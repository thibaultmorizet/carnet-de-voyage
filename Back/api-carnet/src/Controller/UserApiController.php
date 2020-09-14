<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Serializer\Exception\NotEncodableValueException;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;


class UserApiController extends AbstractController
{

    /**
     * @Route("/api/login/register", name="user_register", methods={"POST"})
     */
    public function register(UserPasswordEncoderInterface $passwordEncoder, SerializerInterface $serializer, Request $request, ValidatorInterface $validator, MailerInterface $mailerInterface, MailerController $mailerController)
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
        $password = $passwordEncoder->encodePassword($user, $user->getPassword());
        $user->setPassword($password);
        $user->setToken(md5(uniqid()));
        $manager = $this->getDoctrine()->getManager();
        $manager->persist($user);
        $manager->flush();

        $mailerController->sendEmail($mailerInterface, $user->getEmail(), 'Merci de vous inscrire!', 'emails/activation.twig.html', $user->getFirstName(), $user->getToken());

        return $this->json(
            [
                "success" => true,
                "id" => $user->getId()
            ],
            Response::HTTP_CREATED
        );
    }

    /**
     * @Route("/activation/{token}", name="activation")
     */
    public function activation($token, UserRepository $userRepository)
    {
        $user = $userRepository->findOneBy(['token' => $token]);

        if (!$user) {
            return $this->json(
                [
                    "success" => false,
                    "errors" => 'Cet utilisateur n\'existe pas.'
                ],
                Response::HTTP_BAD_REQUEST
            );
        }

        $user->setToken(null);
        $manager = $this->getDoctrine()->getManager();
        $manager->persist($user);
        $manager->flush();

        return $this->json(
            [
                "success" => true,
                "id" => $user->getId(),
            ],
        );
    }

    /**
     * @Route("/api/admin/user/list", name="user_list", methods={"GET"})
     */
    public function list(UserRepository $userRepository)
    {
        $userList = $userRepository->findAll();
        
        return $this->json(
            $userList,
            200,
            [],
            ["groups" => "user"]
        );
    }
}

