<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Exception\NotEncodableValueException;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

/**
 * @Route("/api/user")
 */
class UserApiController extends AbstractController
{
    /**
     * @Route("/register", name="user_register", methods={"POST"})
     */
    public function register(SerializerInterface $serializer, Request $request, ValidatorInterface $validator, MailerInterface $mailerInterface, MailerController $mailerController)
    {
        try {
            $user = $serializer->deserialize(
                $request->getContent(),
                User::class,
                'json'
            );
        } catch (NotEncodableValueException $exception) {
            return $this->json(
                [
                    "success" => false,
                    "errors" => $exception->getMessage()
                ],
                Response::HTTP_BAD_REQUEST
            );
        }

        $errors = $validator->validate($user);

        if ($errors->count() > 0) {
            return $this->json(
                [
                    "success" => false,
                    "errors" => $errors
                ],
                Response::HTTP_BAD_REQUEST
            );
        }

        $manager = $this->getDoctrine()->getManager();
        $manager->persist($user);
        $manager->flush();

        $mailerController->sendEmail($mailerInterface, $user->getEmail(), 'Validation', 'Merci de valider votre adresse mail');

        return $this->json(
            [
                "success" => true,
                "id" => $user->getId()
            ],
            Response::HTTP_CREATED
        );
    }
}
