<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;

class MailerController extends AbstractController
{
    /**
     * @Route("/email")
     */
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
}
