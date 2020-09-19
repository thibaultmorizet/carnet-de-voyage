<?php

namespace App\Controller;

use DateTime;
use SplFileInfo;
use App\Entity\Step;
use App\Entity\Travel;
use App\Entity\Picture;
use App\Entity\Comment;
use App\Repository\UserRepository;
use App\Repository\StepRepository;
use App\Repository\TravelRepository;
use App\Repository\PictureRepository;
use App\Repository\CommentRepository;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Lexik\Bundle\JWTAuthenticationBundle\Encoder\JWTEncoderInterface;
use Symfony\Component\Serializer\Exception\NotEncodableValueException;


/**
 *  @Route("/api/travel/{id}")
 */
class StepApiController extends AbstractController
{
    /**
     *  @Route("/step/{id2}", name="api_step_show", methods={"GET"}, requirements={"id"="\d+"})
     */
    public function show(StepRepository $stepRepository, $id2, JWTEncoderInterface $jWTEncoderInterface, UserRepository $userRepository, Travel $travel, TravelRepository $travelRepository)
    {
        //we put the token of the header in a variable
        $token = substr(apache_request_headers()["Authorization"], 7);
        //we decode the token
        $tokenArray = $jWTEncoderInterface->decode($token);
        //we recover the Id of the connected user
        $userId = $userRepository->findOneByUsername($tokenArray['username'])->getId();
        //we recover the Id of the creator of the travel
        $travelCreatorId = $travel->getCreator()->getId();
        $followers = $travel->getFollowers()->getValues();
        $isFollower = false;
        foreach ($followers as $follower) {
            if ($follower->getId() == $userId) {
                $isFollower = true;
            }
        }
        //we recover the roles of the connected user in a variable
        $userRoles = $tokenArray["roles"];
        //we create a boolean for the autorization of the user
        $userAuthorization = false;
        //for each role of the user
        foreach ($userRoles as $role) {
            //if the role is equal to "ROLE_ADMIN"
            if ($role == "ROLE_ADMIN") {
                //we put the boolean to True
                $userAuthorization = true;
            }
        }

        //if the Id of the connected user is same of the Id of the creator of the travel
        if ($userId == $travelCreatorId or $userAuthorization == true or $isFollower == true) {
            //we select the desired step object with the url id
            $step = $stepRepository->find($id2);
            //we return in JSON all the important variables for the display of the step pages
            return $this->json(
                $step,
                200,
                [],
                ["groups" => ["step:show"]]
            );
        }
        else {
            //we return an error "HTTP_UNAUTHORIZED"
            return $this->json(
                [
                    "success" => false,
                    "error" => "you're not the creator of the travel or an Administrator or a follower of the travel"
                ],
                Response::HTTP_UNAUTHORIZED
            );
        }
    }

    /**
     *  @Route("/add", name="api_step_add", methods={"POST"})
     */
    public function add(SerializerInterface $serializer, Request $request, ValidatorInterface $validator, Travel $travel, JWTEncoderInterface $jWTEncoderInterface, UserRepository $userRepository)
    {
        $manager = $this->getDoctrine()->getManager();
        //we put the token of the header in a variable
        $token = substr(apache_request_headers()["Authorization"], 7);
        //we decode the token
        $tokenArray = $jWTEncoderInterface->decode($token);
        //we recover the Id of the connected user
        $userId = $userRepository->findOneByUsername($tokenArray['username'])->getId();
        //we recover the Id of the creator of the travel
        $travelCreatorId = $travel->getCreator()->getId();

        //if the Id of the connected user is same of the Id of the creator of the travel
        if ($userId == $travelCreatorId) {
            try {
                // transforms the JSON to object of type step

                $step = $serializer->deserialize(
                    $request->getContent(),
                    Step::class,
                    'json',
                    ['attributes' => ['title', 'description', 'latitude', 'longitude']]
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
            $date = DateTime::createFromFormat('j/m/Y', ($requestArray['step_date']));
            $step->setStepDate($date);

            //add the travel object to the step object
            $step->setTravel($travel);

            //put the step_like to 0
            $step->setStepLike(0);

            //if the array picture exists in the JSON request and it is not empty
            if (array_key_exists('pictures', $requestArray) && $requestArray['pictures'] != null) {
                //for each picture array in request
                for ($pictureJson = 0; $pictureJson < count($requestArray['pictures']); $pictureJson++) {

                    //we recover the uploaded file
                    /** @var UploadedFile $pictureFile */
                    //we recover the data and the url in variables
                    $pictureFile = $requestArray['pictures'][$pictureJson]['data'];
                    $pictureUrl = $requestArray['pictures'][$pictureJson]['url'];
                    //we create a unique picture name with the extension of $pictureUrl
                    $pictureName = uniqid() . strrchr($pictureUrl, '.');
                    $spl = new SplFileInfo($pictureName);
                    //we put the extension in a variable
                    $extension = $spl->getExtension();
                    //we test if the extension is "jpeg" or "jpg" or "png":
                    //-if it isn't
                    if ($extension != "jpeg" and $extension != "png" and $extension != "jpg") {
                        //we return an error
                        return $this->json(
                            [
                                "success" => false,
                                "error" => "Bad extension"
                            ],
                            Response::HTTP_NOT_ACCEPTABLE
                        );
                    }
                    //-if it is
                    else {
                        //we create a new FileSystem object
                        $fileSystem = new Filesystem();
                        //we prepare the way for store the pictures
                        $current_dir_path = getcwd() . "/uploads/pictures/";
                        //we decode the data picture
                        $decodePicture = base64_decode($pictureFile);
                        //we create the repository of the step and put the picture in this repository
                        $fileSystem->dumpFile($current_dir_path . $pictureName, $decodePicture);
                        //we create a new picture entity
                        $picture = new Picture();
                        //add the url and step to the picture entity
                        $picture->setUrl($pictureName);
                        $picture->setStep($step);
                        $manager->persist($picture);
                    }
                }
            } else {
                return $this->json(
                    [
                        "success" => false,
                        "error" => "No picture"
                    ],
                    Response::HTTP_NOT_ACCEPTABLE
                );
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
                Response::HTTP_CREATED
            );
        } else {
            //we return an error "HTTP_UNAUTHORIZED"
            return $this->json(
                [
                    "success" => false,
                    "error" => "you're not the creator of the travel"
                ],
                Response::HTTP_UNAUTHORIZED
            );
        }
    }


    /**
     *  @Route("/update/{id2}", name="api_step_update", methods={"PUT"}, requirements={"id"="\d+"})
     */
    public function update(Request $request, StepRepository $stepRepository, $id2, PictureRepository $pictureRepository, Travel $travel, JWTEncoderInterface $jWTEncoderInterface, UserRepository $userRepository)
    {
        $manager = $this->getDoctrine()->getManager();
        //we put the token of the header in a variable
        $token = substr(apache_request_headers()["Authorization"], 7);
        //we decode the token
        $tokenArray = $jWTEncoderInterface->decode($token);
        //we recover the Id of the connected user
        $userId = $userRepository->findOneByUsername($tokenArray['username'])->getId();
        //we recover the Id of the creator of the travel
        $travelCreatorId = $travel->getCreator()->getId();

        //if the Id of the connected user is same of the Id of the creator of the travel
        if ($userId == $travelCreatorId) {

            //we select the desired step object with the url id
            $step = $stepRepository->find($id2);
            //transforms JSON content into Array
            $requestArray = json_decode($request->getContent(), true);

            if (array_key_exists('pictures-delete', $requestArray) && $requestArray['pictures-delete'] != null) {

                //we recover the picture Id to delete
                $picturesIdDelete = $requestArray['pictures-delete'];

                //we create an array of object pictures to delete
                $picturesDelete = array();
                foreach ($picturesIdDelete as $id) {
                    array_push($picturesDelete, $pictureRepository->find($id));
                }
            }

            //we save the date of the update
            $step->setUpdatedAt(new \DateTime());

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
                $date = DateTime::createFromFormat('j/m/Y', ($requestArray['step_date']));
                $step->setStepDate($date);
            }

            //if the array pictures-delete exists in the JSON request and it is not empty
            if (array_key_exists('pictures-delete', $requestArray) && $requestArray['pictures-delete'] != null) {
                foreach ($picturesDelete as $picture) {
                    //we delete the pictures of $picturesDelete of the database and of the file "pictures"
                    $step->removePicture($picture);
                    unlink(__DIR__ . "/../../public/uploads/pictures/" . $picture->getUrl());
                }
            }
            //if the array pictures-new exists in the JSON request and it is not empty
            if (array_key_exists('pictures-new', $requestArray) && $requestArray['pictures-new'] != null) {

                //for each picture array in request
                for ($pictureJson = 0; $pictureJson < count($requestArray['pictures-new']); $pictureJson++) {
                    //we create a new FileSystem object
                    $fileSystem = new Filesystem();
                    //we recover the uploaded file
                    /** @var UploadedFile $pictureFile */
                    //we recover the data and the url in variables
                    $pictureFile = $requestArray['pictures-new'][$pictureJson]['data'];
                    $pictureUrl = $requestArray['pictures-new'][$pictureJson]['url'];
                    //we create a unique picture name with the extension of $pictureUrl
                    $pictureName = uniqid() . strrchr($pictureUrl, '.');
                    $spl = new SplFileInfo($pictureName);
                    //we put the extension in a variable
                    $extension = $spl->getExtension();
                    //we test if the extension is "jpeg" or "jpg" or "png"
                    //if it isn't
                    if ($extension != "jpeg" and $extension != "png" and $extension != "jpg") {
                        //we return an error
                        return $this->json(
                            [
                                "success" => false,
                                "error" => "Bad extension file"
                            ],
                            Response::HTTP_NOT_ACCEPTABLE
                        );
                    }
                    //if it is
                    else {
                        //we prepare the way for store the pictures
                        $current_dir_path = getcwd() . "/uploads/pictures/";
                        //we decode the data picture
                        $decodePicture = base64_decode($pictureFile);
                        //we create the repository of the step and put the picture in this repository
                        $fileSystem->dumpFile($current_dir_path . $pictureName, $decodePicture);
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
        } else {
            //we return an error "HTTP_UNAUTHORIZED"
            return $this->json(
                [
                    "success" => false,
                    "error" => "you're not the creator of the travel"
                ],
                Response::HTTP_UNAUTHORIZED
            );
        }
    }

    /**
     *  @Route("/delete/{id2}", name="api_step_delete", methods={"DELETE"}, requirements={"id"="\d+"})
     */
    public function delete(StepRepository $stepRepository, $id2, PictureRepository $pictureRepository, JWTEncoderInterface $jWTEncoderInterface, UserRepository $userRepository, Travel $travel)
    {
        //we put the token of the header in a variable
        $token = substr(apache_request_headers()["Authorization"], 7);
        //we decode the token
        $tokenArray = $jWTEncoderInterface->decode($token);
        //we recover the Id of the connected user
        $userId = $userRepository->findOneByUsername($tokenArray['username'])->getId();
        //we recover the Id of the creator of the travel
        $travelCreatorId = $travel->getCreator()->getId();
        //we recover the roles of the connected user in a variable
        $userRoles = $tokenArray["roles"];
        //we create a boolean for the autorization of the user
        $userAuthorization = false;
        //for each role of the user
        foreach ($userRoles as $role) {
            //if the role is equal to "ROLE_ADMIN"
            if ($role == "ROLE_ADMIN") {
                //we put the boolean to True
                $userAuthorization = true;
            }
        }

        //if the Id of the connected user is same of the Id of the creator of the travel
        if ($userId == $travelCreatorId or $userAuthorization == true) {

            //we select the desired step object with the url id
            $step = $stepRepository->find($id2);

            $pictures = $pictureRepository->findBy(['step' => $step->getId()]);

            foreach ($pictures as $picture) {
                //we delete the old pictures of the database and of the file "pictures"
                unlink(__DIR__ . "/../../public/uploads/pictures/" . $picture->getUrl());
            }

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
        } else {
            //we return an error "HTTP_UNAUTHORIZED"
            return $this->json(
                [
                    "success" => false,
                    "error" => "you're not the creator of the travel and you're not an Administrator"
                ],
                Response::HTTP_UNAUTHORIZED
            );
        }
    }

    /**
     *  @Route("/like/{id2}", name="api_step_like", methods={"GET"}, requirements={"id"="\d+"})
     */
    public function like(StepRepository $stepRepository, $id2, JWTEncoderInterface $jWTEncoderInterface)
    {
        //we put the token of the header in a variable
        $token = substr(apache_request_headers()["Authorization"], 7);
        //we decode the token
        $tokenArray = $jWTEncoderInterface->decode($token);
        //we recover the roles of the connected user in a variable
        $userRoles = $tokenArray["roles"];
        //we create a boolean for the autorization of the user
        $userAuthorization = false;
        //for each role of the user
        foreach ($userRoles as $role) {
            //if the role is equal to "ROLE_USER"
            if ($role == "ROLE_USER") {
                //we put the boolean to True
                $userAuthorization = true;
            }
        }

        //if the Id of the connected user is same of the Id of the creator of the travel
        if ($userAuthorization == true) {

            //we select the desired step object with the url id
            $step = $stepRepository->find($id2);

            //we recover the actual number of like
            $current_step_like = $step->getStepLike();
            //we add 1 to the number of like
            $new_step_like = $current_step_like + 1;
            //we save the new numbe rof like in step object
            $step->setStepLike($new_step_like);

            // if everything is ok then we save the change in Database
            $manager = $this->getDoctrine()->getManager();
            $manager->flush();

            //we return confirmation message of everything is OK
            return $this->json(
                [
                    "success" => true
                ],
                Response::HTTP_OK
            );
        } else {
            //we return an error "HTTP_UNAUTHORIZED"
            return $this->json(
                [
                    "success" => false,
                    "error" => "you're not connected"
                ],
                Response::HTTP_UNAUTHORIZED
            );
        }
    }

    /**
     *  @Route("/unlike/{id2}", name="api_step_unlike", methods={"GET"}, requirements={"id"="\d+"})
     */
    public function unlike(StepRepository $stepRepository, $id2, jWTEncoderInterface $jWTEncoderInterface)
    {
        //we put the token of the header in a variable
        $token = substr(apache_request_headers()["Authorization"], 7);
        //we decode the token
        $tokenArray = $jWTEncoderInterface->decode($token);
        //we recover the roles of the connected user in a variable
        $userRoles = $tokenArray["roles"];
        //we create a boolean for the autorization of the user
        $userAuthorization = false;
        //for each role of the user
        foreach ($userRoles as $role) {
            //if the role is equal to "ROLE_USER"
            if ($role == "ROLE_USER") {
                //we put the boolean to True
                $userAuthorization = true;
            }
        }

        //if the Id of the connected user is same of the Id of the creator of the travel
        if ($userAuthorization == true) {
            //we select the desired step object with the url id
            $step = $stepRepository->find($id2);

            //we recover the actual number of like
            $current_step_like = $step->getStepLike();
            //we subtracted 1 to the number of like
            $new_step_like = $current_step_like - 1;
            //we save the new numbe rof like in step object
            $step->setStepLike($new_step_like);

            // if everything is ok then we save the change in Database
            $manager = $this->getDoctrine()->getManager();
            $manager->flush();

            //we return confirmation message of everything is OK
            return $this->json(
                [
                    "success" => true
                ],
                Response::HTTP_OK
            );
        } else {
            //we return an error "HTTP_UNAUTHORIZED"
            return $this->json(
                [
                    "success" => false,
                    "error" => "you're not connected"
                ],
                Response::HTTP_UNAUTHORIZED
            );
        }
    }

    /**
     *  @Route("/comment/{id2}", name="api_step_comment", methods={"POST"}, requirements={"id"="\d+"})
     */
    public function comment(StepRepository $stepRepository, $id2, Request $request, UserRepository $userRepository, JWTEncoderInterface $jWTEncoderInterface)
    {
        //transforms JSON content into Array
        $requestArray = json_decode($request->getContent(), true);
        //we put the token of the header in a variable
        $token = substr(apache_request_headers()["Authorization"], 7);
        //we decode the token
        $tokenArray = $jWTEncoderInterface->decode($token);
        //we recover the roles of the connected user in a variable
        $userRoles = $tokenArray["roles"];
        //we create a boolean for the autorization of the user
        $userAuthorization = false;
        //for each role of the user
        foreach ($userRoles as $role) {
            //if the role is equal to "ROLE_USER"
            if ($role == "ROLE_USER") {
                //we put the boolean to True
                $userAuthorization = true;
            }
        }

        //if the Id of the connected user is same of the Id of the creator of the travel
        if ($userAuthorization == true) {
            $user = $userRepository->findOneByUsername($tokenArray['username']);
            //we recover the id of the connected user
            $userId = $user->getId();
            //we put the comment of the request in a variable
            $commentRequest = $requestArray['comment'];

            //we select the desired step object with the url id
            $step = $stepRepository->find($id2);
            //we select the desired user object with the id of the token
            $user = $userRepository->find($userId);

            //we create a new object comment
            $comment = new Comment();
            //we save the step and the user obects in the new comment
            $comment->setStep($step);
            $comment->setUser($user);
            //we save the comment of the request in the new comment
            $comment->setComment($commentRequest);

            // if everything is ok then we save the object in Database
            $manager = $this->getDoctrine()->getManager();
            $manager->persist($comment);
            $manager->flush();

            //we return confirmation message of everything is OK
            return $this->json(
                [
                    "success" => true,
                    "id" => $comment->getId()

                ],
                Response::HTTP_CREATED
            );
        } else {
            //we return an error "HTTP_UNAUTHORIZED"
            return $this->json(
                [
                    "success" => false,
                    "error" => "you're not connected"
                ],
                Response::HTTP_UNAUTHORIZED
            );
        }
    }

    /**
     *  @Route("/comment/{id2}/delete", name="api_step_delete_comment", methods={"DELETE"}, requirements={"id"="\d+"})
     */
    public function deleteComment(UserRepository $userRepository, CommentRepository $commentRepository, $id2, JWTEncoderInterface $jWTEncoderInterface)
    {
        $manager = $this->getDoctrine()->getManager();
        //we select the desired comment object with the url id
        $comment = $commentRepository->find($id2);
        //we put the token of the header in a variable
        $token = substr(apache_request_headers()["Authorization"], 7);
        //we decode the token
        $tokenArray = $jWTEncoderInterface->decode($token);
        //we recover the Id of the connected user
        $userId = $userRepository->findOneByUsername($tokenArray['username'])->getId();
        //we recover the Id of the creator of the comment
        $commentCreatorId = $comment->getUser()->getId();
        //we recover the roles of the connected user in a variable
        $userRoles = $tokenArray["roles"];
        //we create a boolean for the autorization of the user
        $userAuthorization = false;
        //for each role of the user
        foreach ($userRoles as $role) {
            //if the role is equal to "ROLE_ADMIN"
            if ($role == "ROLE_ADMIN") {
                //we put the boolean to True
                $userAuthorization = true;
            }
        }

        //if the Id of the connected user is same of the Id of the creator of the comment
        if ($userId == $commentCreatorId or $userAuthorization == true) {
            //we remove the comment and save the change in Database
            $manager->remove($comment);
            $manager->flush();

            //we return confirmation message of everything is OK
            return $this->json(
                [
                    "success" => true
                ],
                Response::HTTP_OK
            );
        }
        //else we return an error with "HTTP_UNAUTHORIZED"
        else {
            return $this->json(
                [
                    "success" => false,
                    "error" => "you're not the creator of the comment and you're not an Administrator"
                ],
                Response::HTTP_UNAUTHORIZED
            );
        }
    }
}
