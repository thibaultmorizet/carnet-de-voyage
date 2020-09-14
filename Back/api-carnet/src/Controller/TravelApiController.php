<?php

namespace App\Controller;

use App\Entity\Travel;
use App\Repository\UserRepository;
use App\Repository\TravelRepository;
//use Symfony\Component\Finder\Finder;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Serializer\Exception\NotEncodableValueException;
//use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use Symfony\Component\Filesystem\Filesystem;

/**
 *  @Route("/api/travel")
 */
class TravelApiController extends AbstractController
{
    /**
     *  @Route("/create", name="api_travel_create", methods={"POST"})
     * 
     * Creation Travel and addition to BDD
     */
    public function add(SerializerInterface $serializer, Request $request, ValidatorInterface $validator, UserRepository $userRepository)
    {
        try {
            // Transform the JSON into an object of type Travel
            $travel = $serializer->deserialize(
                $request->getContent(),
                Travel::class,
                'json',
                ['attributes' => ['title', 'description', 'status']]
            );

            // Exception if JSON is not correct
        } catch (NotEncodableValueException $exception) {
            // Send API error
            return $this->json(
                [
                    "success" => false,
                    "error" => $exception->getMessage()
                ],
                Response::HTTP_BAD_REQUEST
            );
        }

        // Before persinsting the object Travel, we check that its content is correct
        $errors = $validator->validate($travel);
        // If we find any errors
        if ($errors->count() > 0) {

            // Send API/Validator error
            return $this->json(
                [
                    "success" => false,
                    "errors" => $errors
                ],
                Response::HTTP_BAD_REQUEST
            );
        }

        // Transform the json request into an array
        $requestArray = json_decode($request->getContent(), true);
         
        $travel->setCreationDate(new \DateTime($requestArray['travel_date']));

        // Get a User object with the Id
        $user = $userRepository->find($requestArray['user_id']);
        if ($user == NULL) {  // User not found !
            return $this->json(
                [
                    "success" => false,
                    "errors" => "Bad User"
                ],
                Response::HTTP_BAD_REQUEST
            );
        }
        // User OK !
        $travel->setCreator($user);

        // Get the namefile of the request
        $fileNameImage = $requestArray['picture_travel'];
        // Extract file extension + lowercase
        $fileExtension = strtolower(pathinfo($fileNameImage, PATHINFO_EXTENSION));
        // Checking the file extension
        if (!($fileExtension == "png" || $fileExtension == "jpg" || $fileExtension == "jpeg")) { // Not OK
            // Error file extension
            return $this->json(
                [
                    "success" => false,
                    "errors" => "Bad file image"
                ],
                Response::HTTP_BAD_REQUEST
            );
        }
        // File extension OK
        // Creation of a unique name + extension
        $fileNameUnique = uniqid() . '.' . $fileExtension;
        $travel->setPictureUrl($fileNameUnique);

        // If ok then we save the object in database
        $manager = $this->getDoctrine()->getManager();
        $manager->persist($travel);
        $manager->flush();

        // Decoding 64 data image
        $dataImage = base64_decode($requestArray['picture_data']);
        // New object FileSystem for filesystem operations
        $fileSystem = new FileSystem();
        // Path + image file name
        $filenameWithPath = getcwd(). "/uploads/pictures/travel" . $travel->getId() . "/" . $fileNameUnique;
        // Create file on disk
        $fileSystem->dumpFile($filenameWithPath,$dataImage);
              
        // returns OK message (201): Object created in DataBase
        return $this->json(
            [
                "success" => true,
                "id" => $travel->getId(),
                "imageFile" => $fileNameUnique
            ],
            Response::HTTP_CREATED
        );
    }

    /**
     *  @Route("/{id}/update", name="api_travel_update", methods={"PUT"})
     * 
     */
    public function update (Request $request, TravelRepository $travelRepository, $id) {

        // search and recover in BDD the Travel id
        $travel = $travelRepository->find($id);
        // find() not found !
        if ($travel == null) {
            return $this->json(
                [
                    "success" => false,
                    "id" => $id
                ],
                Response::HTTP_BAD_REQUEST // HTTP Response 400
            );
        }

        // Transform the json request into an array
        $requestArray = json_decode($request->getContent(), true);

        // update fields if necessary for the Travel object
        if (array_key_exists('title', $requestArray) && $requestArray['title'] != null) {
            $travel->setTitle($requestArray['title']);
        }
        if (array_key_exists('description', $requestArray) && $requestArray['description'] != null) {
            $travel->setDescription($requestArray['description']);
        }
        if (array_key_exists('travel_date', $requestArray) && $requestArray['travel_date'] != null) {
            $travel->setCreationDate(new \DateTime($requestArray['travel_date']));
        }
        if (array_key_exists('picture_travel', $requestArray) && $requestArray['picture_travel'] && array_key_exists('picture_data', $requestArray) && $requestArray['picture_data'] != null) {
            // Get the namefile of the request
            $fileNameImage = $requestArray['picture_travel'];
            // Extract file extension + lowercase
            $fileExtension = strtolower(pathinfo($fileNameImage, PATHINFO_EXTENSION));
            // Checking the file extension
            if (!($fileExtension == "png" || $fileExtension == "jpg" || $fileExtension == "jpeg")) { // Not OK
                // Error file extension
                return $this->json(
                    [
                        "success" => false,
                        "errors" => "Bad file image"
                    ],
                    Response::HTTP_BAD_REQUEST
                );
            }
            // The file extension is OK
            // Creation of a unique name + extension
            $fileNameUnique = uniqid() . '.' . $fileExtension;
            // Decoding 64 data image
            $dataImage = base64_decode($requestArray['picture_data']);
            // New object FileSystem for filesystem operations
            $fileSystem = new FileSystem();
            // Path + new image file name
            $newFilenameWithPath = getcwd()."/uploads/pictures/travel" . $travel->getId() . "/" . $fileNameUnique;
            // Path + old image file name
            $oldFilenameWithPath = getcwd()."/uploads/pictures/travel" . $travel->getId() . "/" . $travel->getPictureUrl();
            // Delete old file image on disk
            $fileSystem->remove($oldFilenameWithPath);
            // Create new file image on disk
            $fileSystem->dumpFile($newFilenameWithPath,$dataImage);
            // updated the image name of the Travel object
            $travel->setPictureUrl($fileNameUnique);
        }

        // Update DataBase
        $manager = $this->getDoctrine()->getManager();
        $manager->persist($travel);
        $manager->flush();

        // returns OK message (201): Object created in DataBase
        return $this->json(
            [
                "success" => true,
                "id" => $travel->getId(),
                "imageFile" => $fileNameUnique
            ],
            Response::HTTP_CREATED
        );
    }

    /**
     *  @Route("/{id}/delete", name="api_travel_delete", methods={"DELETE"})
     */
    public function delete(travelRepository $travelRepository, $id)
    {
        // search and recover in BDD the Travel id
        $travel = $travelRepository->find($id);
        // Travel (id) found or not
        if ($travel == null) { // Not found
            return $this->json(
                [
                    "success" => false,
                    "operation" => "Travel " . $id . "not found"
                ],
                Response::HTTP_BAD_REQUEST // HTTP Response 400
            );
        }

        $fileSystem = new Filesystem();
        // Path to delete
        $pathDelete = getcwd()."/uploads/pictures/travel" . $travel->getId() . "/";
        
        // Delete the Travel, Steps and Comments
        $manager = $this->getDoctrine()->getManager();
        $manager->remove($travel);
        $manager->flush();

        // Delete path + all image files       
        $fileSystem->remove($pathDelete);

        return $this->json(
            [
                "success" => true,
                "operation" => "Travel " . $id . " deleted"
            ],
            Response::HTTP_OK
        );
    }

    /**
     *     Route de TEST pour le développement
     */

    /**
     *  @Route("/{id}/test", name="api_travel_test", methods={"DELETE"})
     */
    /*
    public function test(travelRepository $travelRepository, $id) {
        
    }
    */

}