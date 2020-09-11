<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class SecurityController extends AbstractController
{
    /**
     * @Route("api/login", name="app_login")
     */
    public function login(SerializerInterface $serializer, Request $request, UserRepository $userRepository)
    {
        $userData = json_decode($request->getContent(), true);

        $user = $userRepository->findOneBy(['email' => $userData['email']]);

        if ($user->getToken()) {
            return $this->json(
                [
                    "success" => false,
                    "errors" => "Votre compte n'est pas activé, verifier vos mail"
                ],
                Response::HTTP_BAD_REQUEST
            );
        }

    }
}
