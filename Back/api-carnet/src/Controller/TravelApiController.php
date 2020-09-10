<?php

namespace App\Controller;

use App\Repository\UserRepository;
use App\Entity\Travel;
//use App\Repository\TravelRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Serializer\Exception\NotEncodableValueException;

/**
 *  @Route("/api/travel")
 */
class TravelApiController extends AbstractController
{
    /**
     *  @Route("/create", name="api_travel_create", methods={"POST"})
     */
    public function add(SerializerInterface $serializer, Request $request, ValidatorInterface $validator, UserRepository $userRepository)
    {
        try {
            // Transform the JSON into an object of type Travel
            $travel = $serializer->deserialize(
                $request->getContent(),
                Travel::class,
                'json',
                ['attributes' => ['title', 'description', 'status', 'picture_url']]
            );

            //Si le contenu de la requete n'est pas du JSON correct
            // le deserializer va emettre une exception
        } catch (NotEncodableValueException $exception) {
            // si c'est le cas on renvoi a celui qui appel l'API une erreur
            return $this->json(
                [
                    "success" => false,
                    "error" => $exception->getMessage()
                ],
                Response::HTTP_BAD_REQUEST
            );
        }

        // Before persinsting the object Travel, we check that its content is correct
        // on demande au validator de comparer les propriété de mon objet avec les contrainte de validation (@Assert)
        $errors = $validator->validate($travel);
        // If we find any errors
        if ($errors->count() > 0) {

            // on renvoi a celui qui a appelé l'API les erreur trouvées par le validator
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

        $travel->setCreator($userRepository->find($requestArray['user_id']));


        // If ok then we save the object in database
        $manager = $this->getDoctrine()->getManager();
        $manager->persist($travel);
        $manager->flush();

        // returns OK message (201): Object created in DataBase
        return $this->json(
            [
                "success" => true,
                "id" => $travel->getId()
            ],
            Response::HTTP_CREATED
        );
    }

    /* Exemple JSON POST : /api/travel/create
       {
           "user_id" : 30,
           "title" : "Voyage en Tanzanie",
           "description" : "un long voyage en Tanzanie",
           "status" : 0,
           "picture_travel" : "picture5.jpeg",
           "travel_date" : "2020-03-18"
       } 
    */


}
