<?php

namespace App\Controller;

use App\Entity\Step;
use App\Entity\Picture;
use App\Entity\Travel;
use App\Repository\PictureRepository;
use App\Repository\StepRepository;
use PhpParser\Node\Stmt\Break_;
use SplFileInfo;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Serializer\Exception\NotEncodableValueException;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;

/**
 *  @Route("/api/travel/{id}")
 */
class StepApiController extends AbstractController
{
    /**
     *  @Route("/add", name="api_step_add", methods={"POST"})
     */
    public function add(SerializerInterface $serializer, Request $request, ValidatorInterface $validator, Travel $travel)
    {
        try {
            // transforms the JSON to object of type step
            $step = $serializer->deserialize(
                $request->getContent(),
                Step::class,
                'json',
                ['attributes' => ['title', 'description', 'latitude', 'longitude', 'step_like']]
            );

            //If the content of the request is not correct JSON
            // the deserializer will throw an exception
        } catch (NotEncodableValueException $exception) {
            // we then send an error to the one who calls the API
            return $this->json(
                [
                    "success" => false,
                    "error" => $exception->getMessage()
                ],
                Response::HTTP_BAD_REQUEST
            );
        }

        // Before persisting the object we check that its content is correct
        // we ask the validator to compare the properties of my object with the validation constraints (@Assert)
        $errors = $validator->validate($step);
        // if we found errors
        if ($errors->count() > 0) {

            // we return the errors found by the validator to the one who called the API
            return $this->json(
                [
                    "success" => false,
                    "errors" => $errors
                ],
                Response::HTTP_BAD_REQUEST
            );
        }

        //transforms JSON content into Array
        $requestArray = json_decode($request->getContent(), true);

        //add the date of the JSON request to the step object
        $step->setStepDate(new \DateTime($requestArray['step_date']));

        //add the travel object to the step object
        $step->setTravel($travel);


        //if the array picture exists in the JSON request and it is not empty
        if (array_key_exists('picture', $requestArray) && $requestArray['picture'] != null) {
            //for each picture array in request
            for($pictureJson = 0; $pictureJson < count($requestArray['picture']); $pictureJson++) {

                //we recover the uploaded file
                /** @var UploadedFile $pictureFile */
                //we recover the data and the url in variables
                $pictureFile = $requestArray['picture'][$pictureJson + 1]['data'];
                $pictureUrl = $requestArray['picture'][$pictureJson + 1]['url'];
                //we create a unique picture name with the extension of $pictureUrl 
                $pictureName = uniqid() . strrchr($pictureUrl, '.');
                $spl = new SplFileInfo($pictureName);
                //we put the extension in a variable
                $extension = $spl->getExtension();
                //we test if the extension is "jpeg" or "png":
                //-if it isn't 
                if ($extension != "jpeg" and $extension != "png") {
                    //we return an error
                    return $this->json(
                        [
                            "success" => false
                        ],
                        Response::HTTP_NOT_ACCEPTABLE
                    );
                
                } 
                //-if it is
                else {
                    //we create a new FileSystem object
                    $fileSystem = new Filesystem();
                    //we prepare the way for store the pictures
                    $current_dir_path = getcwd()."/uploads/pictures/travel".$travel->getId()."step/";
                    //we decode the data picture
                    $decodePicture = base64_decode($pictureFile);
                    //we create the repository of the step and put the picture in this repository
                    $fileSystem->dumpFile($current_dir_path.$pictureName, $decodePicture);
                    //we create a new picture entity
                    $picture = new Picture();
                    //add the url and step to the picture entity
                    $picture->setUrl($pictureName);
                    $picture->setStep($step);
                    $manager = $this->getDoctrine()->getManager();
                    $manager->persist($picture);
                }
                
            }
        }

        // if everything is ok then we save the object in Database

        $manager->persist($step);
        $manager->flush();

        //we rename the repository for add the Step ID
        rename(getcwd()."/uploads/pictures/travel".$travel->getId()."step/",getcwd()."/uploads/pictures/travel".$travel->getId()."step".$step->getId()."/");

        // we return confirmation message of everything is OK
        return $this->json(
            [
                "success" => true,
                "id" => $step->getId()
            ],
            Response::HTTP_CREATED
        );
    }

    /**
     *  @Route("/update/{id2}", name="api_step_update", methods={"PUT"})
     */
    public function update(Request $request, StepRepository $stepRepository, $id2, PictureRepository $pictureRepository, Travel $travel)
    {
        $manager = $this->getDoctrine()->getManager();

        //we select the desired step object with the url id
        $step = $stepRepository->find($id2);

        //we create an array of picture belonging to the step
        $pictures = $pictureRepository->findBy(['step' => $step->getId()]);

        //transforms JSON content into Array
        $requestArray = json_decode($request->getContent(), true);

        //if the request contains a title, we replace the old one with the title of the request
        if (array_key_exists('title', $requestArray) && $requestArray['title'] != null) {
            $step->setTitle($requestArray['title']);
        }

        //if the request contains a description, we replace the old one with the description of the request
        if (array_key_exists('description', $requestArray) && $requestArray['description'] != null) {
            $step->setDescription($requestArray['description']);
        }

        //if the request contains a latitude, we replace the old one with the latitude of the request
        if (array_key_exists('latitude', $requestArray) && $requestArray['latitude'] != null) {
            $step->setLatitude(($requestArray['latitude']));
        }

        //if the request contains a longitude, we replace the old one with the longitude of the request
        if (array_key_exists('longitude', $requestArray) && $requestArray['longitude'] != null) {
            $step->setLongitude(($requestArray['longitude']));
        }

        //if the request contains a step_date, we replace the old one with the step_date of the request
        if (array_key_exists('step_date', $requestArray) && $requestArray['step_date'] != null) {
            $step->setStepDate(new \DateTime($requestArray['step_date']));
        }

        //if the array picture exists in the JSON request and it is not empty
        if (array_key_exists('picture', $requestArray) && $requestArray['picture'] != null) {
            foreach ($pictures as $picture ) {
                $step->removePicture($picture);

            }
            //for each picture array in request
            for($pictureJson = 0; $pictureJson < count($requestArray['picture']); $pictureJson++) {
                //we create a new FileSystem object
                $fileSystem = new Filesystem();
                //we delete the repository with old pictures
                $fileSystem->remove(getcwd()."/uploads/pictures/travel".$travel->getId()."step".$step->getId()."/");
                //we recover the uploaded file
                /** @var UploadedFile $pictureFile */
                //we recover the data and the url in variables
                $pictureFile = $requestArray['picture'][$pictureJson + 1]['data'];
                $pictureUrl = $requestArray['picture'][$pictureJson + 1]['url'];
                //we create a unique picture name with the extension of $pictureUrl 
                $pictureName = uniqid() . strrchr($pictureUrl, '.');
                $spl = new SplFileInfo($pictureName);
                //we put the extension in a variable
                $extension = $spl->getExtension();
                //we test if the extension is "jpeg" or "png"
                //if it isn't 
                if ($extension != "jpeg" and $extension != "png") {
                    //we return an error
                    return $this->json(
                        [
                            "success" => false
                        ],
                        Response::HTTP_NOT_ACCEPTABLE
                    );
                }      
                //if it is          
                else {
                    //we prepare the way for store the pictures
                    $current_dir_path = getcwd()."/uploads/pictures/travel".$travel->getId()."step".$step->getId()."/";
                     //we decode the data picture
                    $decodePicture = base64_decode($pictureFile);
                    //we create the repository of the step and put the picture in this repository
                    $fileSystem->dumpFile($current_dir_path.$pictureName, $decodePicture);
                    //we create a new picture entity
                    $picture = new Picture();
                    //add the url and step to the picture entity
                    $picture->setUrl($pictureName);
                    $picture->setStep($step);
                    $manager = $this->getDoctrine()->getManager();
                    $manager->persist($picture);
                }
                
            }
        }


        // if everything is ok then we save the object in Database
        $manager->persist($step);
        $manager->flush();

        // we return confirmation message of everything is OK
        return $this->json(
            [
                "success" => true,
                "id" => $step->getId()
            ],
            Response::HTTP_OK
        );
    }

    /**
     *  @Route("/delete/{id2}", name="api_step_delete", methods={"DELETE"})
     */
    public function delete(StepRepository $stepRepository, $id2, Travel $travel)
    {
        //we select the desired step object with the url id
        $step = $stepRepository->find($id2);

        //we create a new FileSystem object
        $fileSystem = new Filesystem();
        //we delete the repository with old pictures
        $fileSystem->remove(getcwd()."/uploads/pictures/travel".$travel->getId()."step".$step->getId()."/");


        $manager = $this->getDoctrine()->getManager();

        // we delete the step object and all that is linked to it
        $manager->remove($step);
        $manager->flush();

        //we return confirmation message of everything is OK
        return $this->json(
            [
                "success" => true
            ],
            Response::HTTP_OK
        );
    }

}
