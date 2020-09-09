<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;


class MailerController extends AbstractController
{
    /**
     * @Route("/email")
     */
    public function sendEmail(MailerInterface $mailer, $userMail, $subject, $text)
    {
        $email = (new Email())
            ->from('hello@example.com')
            ->to($userMail)
            ->subject($subject)
            ->text($text);

        $mailer->send($email);
    }
}
