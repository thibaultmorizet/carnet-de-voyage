<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Csrf\TokenGenerator\TokenGeneratorInterface;
use Symfony\Component\Serializer\Exception\NotEncodableValueException;

class SecurityController extends AbstractController
{
    /**
     * @Route("/api/login/checkactivation", name="api_login_checkactivation")
     */
    public function apiCheckActivation(Request $request, UserRepository $userRepository)
    {
        $userData = json_decode($request->getContent(), true);

        $user = $userRepository->findOneBy(['email' => $userData['username']]);

        if (!$user) {
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
                    "errors" => "Votre compte n'est pas activé, vérifiez vos mail"
                ],
                Response::HTTP_BAD_REQUEST
            );
        }


        return $this->json(
            $userData,
            200,
            []
        );
    }

    /**
     * @Route("/api/login_check", name="app_api_login_check")
     */
    public function apiLoginCheck()
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }

    /**
     * @Route("/logout", name="app_logout")
     *
     */
    public function logout()
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }

    /**
     * @Route("/email-forgot-password", name="app_forgotten_password", methods={"POST"})
     *
     */
    public function emailForgotPassword(Request $request, UserRepository $userRepository, MailerInterface $mailerInterface, MailerController $mailerController, TokenGeneratorInterface $tokenGenerator)
    {
        $requestArray = (json_decode($request->getContent(), true));
        $user = $userRepository->findOneByUsername($requestArray['email']);
        if ($user === null) {
            return $this->json(
                [
                    "success" => false,
                    "errors" => "Cette adresse e-mail est inconnue"
                ],
                Response::HTTP_BAD_REQUEST
            );
        }
        $token = $tokenGenerator->generateToken();

        try {
            $user->setToken($token);
            $manager = $this->getDoctrine()->getManager();
            $manager->persist($user);
            $manager->flush();
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

        $mailerController->sendEmail(
            $mailerInterface, 
            $user->getEmail(), 
            'Réinitialisation de mot de passe', 
            'emails/reset_password.twig.html', 
            $user->getFirstName(),
            $user->getToken()
        );

        // we return confirmation message of everything is OK
        return $this->json(
            [
                "success" => true
            ],
            Response::HTTP_OK
        );
    }

    /**
     * @Route("/reset-password/{token}", name="app_reset_password", methods={"POST"})
     */
    public function resetPassword(Request $request, string $token, UserPasswordEncoderInterface $passwordEncoder)
    {
        $requestArray = json_decode($request->getContent(), true);
        $user = $this->getDoctrine()->getRepository(User::class)->findOneBy(['token' => $token]);
        if ($user === null) {
            return $this->json(
                [
                    "success" => false,
                    "errors" => "Token Inconnu"
                ],
                Response::HTTP_BAD_REQUEST
            );
        }
        
        if ($request->isMethod('POST')) {
            $user->setToken(null);
            $user->setPassword($passwordEncoder->encodePassword($user, $requestArray['password']));
            //we save the date of the update
            $user->setUpdatedAt(new \DateTime());

            $manager = $this->getDoctrine()->getManager();
            $manager->persist($user);
            $manager->flush();

            // we return confirmation message of everything is OK
            return $this->json(
                [
                    "success" => true
                ],
                Response::HTTP_OK
            );
        }
    }
}
