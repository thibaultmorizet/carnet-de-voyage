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

        if(!$user){
            return $this->json(
                [
                    "success" => false,
                    "errors" => "Vous n'avez pas de compte, merci de vous inscrire"
                ],
                Response::HTTP_BAD_REQUEST
            );
        }
        if ($user->getToken()) {
            return $this->json(
                [
                    "success" => false,
                    "errors" => "Votre compte n'est pas activé, verifier vos mail"
                ],
                Response::HTTP_BAD_REQUEST
            );
        }

        if ($userData['password']) {

        }

    }

    /**
     * @Route("/api/login_check", name="app_api_login_check")
     */
    public function apiLoginCheck()
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }
}
