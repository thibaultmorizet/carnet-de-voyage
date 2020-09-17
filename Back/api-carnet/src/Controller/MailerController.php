<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\HttpFoundation\Request;

class MailerController extends AbstractController
{
    
    public function sendEmail(MailerInterface $mailer, $userMail, $subject, $html, $username, $token)
    {
        $email = (new TemplatedEmail())
            ->from('carnetdevoyage@example.com')
            ->to($userMail)
            ->subject($subject)
            ->htmlTemplate($html)
            ->context([
                'username' => $username,
                'token' => $token
            ]);
            
        $mailer->send($email);
    }

    /**
     * @Route("/contact", name="contact", methods={"POST"})
     */
    public function sendEmailContact(MailerInterface $mailer, Request $request)
    {
        $requestArray = json_decode($request->getContent(), true);
        $email = (new TemplatedEmail())
            ->from($requestArray["email"])
            ->to("sebtoorop@gmail.com")
            ->subject($requestArray["object"])
            ->text($requestArray["text"]);
            
            
        $mailer->send($email);

        
    }
}
