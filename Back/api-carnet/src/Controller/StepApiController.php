<?php

namespace App\Controller;

use App\Entity\Step;
use App\Entity\Picture;
use App\Repository\TravelRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Serializer\Exception\NotEncodableValueException;

/**
 *  @Route("/api/step")
 */
class StepApiController extends AbstractController
{
    /**
     *  @Route("/add", name="api_step_add", methods={"POST"})
     */
    public function add(SerializerInterface $serializer, Request $request, ValidatorInterface $validator, TravelRepository $travelRepository)
    {
        try {
            // transforme le JSON en objet de type step
            $step = $serializer->deserialize(
                $request->getContent(),
                Step::class,
                'json',
                ['attributes' => ['description', 'latitude', 'longitude', 'step_like']]
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

        // Avant de persister l'objet on verifie que son contenu est correct
        // on demande au validator de comparer les propriété de mon objet avec les contrainte de validation (@Assert)
        $errors = $validator->validate($step);
        // Si on trouve des erreur
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

        $requestArray = json_decode($request->getContent(), true);

        $step->setStepDate(new \DateTime($requestArray['step_date']));

        $step->setTravel($travelRepository->find($requestArray['travel_id']));

        if (array_key_exists('picture', $requestArray) && $requestArray['picture'] != null) {
            foreach ($requestArray['picture'] as  $url) {
                if (!empty($url)) {
                    $picture = new Picture();
                    $picture->setUrl($url);
                    $picture->setStep($step);
                    $manager = $this->getDoctrine()->getManager();
                    $manager->persist($picture);
                }
            }
        }

        // si tout est ok alors on enregistre l'objet en BDD

        $manager->persist($step);
        $manager->flush();

        // on renvoi un petit message de confirmation de tout est OK
        return $this->json(
            [
                "success" => true,
                "id" => $step->getId()
            ],
            Response::HTTP_CREATED
        );
    }
}