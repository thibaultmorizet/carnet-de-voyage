<?php

namespace App\DataFixtures;

use DateTime;
use App\Entity\Step;
use App\Entity\User;
use App\Entity\Travel;
use App\Entity\Comment;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AppFixtures extends Fixture
{

    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }


    public function load(ObjectManager $manager)
    {
        // create an array of User Entity
        $userEntities[] = null;

        // create 5 users

        $seb = new User();
        $seb->setFirstName('Sébastien');
        $seb->setLastName('Cailleau');
        $seb->setEmail('sebastien-cailleau@gmail.com');
        $password = $this->encoder->encodePassword($seb, 'password');
        $seb->setPassword($password);
        $seb->setRoles(["ROLE_USER"]);
        $userEntities[] = $seb;
        $manager->persist($seb);

        $quentin = new User();
        $quentin->setFirstName('Quentin');
        $quentin->setLastName('Garcia');
        $quentin->setEmail('quentin-garcia@gmail.com');
        $password = $this->encoder->encodePassword($quentin, 'password');
        $quentin->setPassword($password);
        $quentin->setRoles(["ROLE_USER"]);
        $userEntities[] = $quentin;
        $manager->persist($quentin);

        $thibault = new User();
        $thibault->setFirstName('Thibault');
        $thibault->setLastName('Morizet-Marminc');
        $thibault->setEmail('thibault-morizet-marminc@gmail.com');
        $password = $this->encoder->encodePassword($thibault, 'password');
        $thibault->setPassword($password);
        $thibault->setRoles(["ROLE_USER"]);
        $userEntities[] = $thibault;
        $manager->persist($thibault);

        $chloe = new User();
        $chloe->setFirstName('Chloé');
        $chloe->setLastName('Talour');
        $chloe->setEmail('chloe-talour@gmail.com');
        $password = $this->encoder->encodePassword($chloe, 'password');
        $chloe->setPassword($password);
        $chloe->setRoles(["ROLE_USER"]);
        $userEntities[] = $chloe;
        $manager->persist($chloe);

        $christophe = new User();
        $christophe->setFirstName('Christophe');
        $christophe->setLastName('Vasseur');
        $christophe->setEmail('christophe-vasseur@gmail.com');
        $password = $this->encoder->encodePassword($christophe, 'password');
        $christophe->setPassword($password);
        $christophe->setRoles(["ROLE_USER"]);
        $userEntities[] = $christophe;
        $manager->persist($christophe);


        // create 10 travels
        for ($i = 0; $i < 10; $i++) {
            $travel = new Travel();
            $travel->setTitle('travel ' . $i);
            $travel->setDescription('Text description ' . $i);
            $travel->setStatus(mt_rand(0, 1));
            $travel->setCreationDate(new \DateTime('NOW'));
            $travel->setCreatedAt(new DateTime('NOW'));
            // Get a random user in array $userEntities
            $userRandom = $userEntities[random_int(1, 5)];
            $travel->setCreator($userRandom);

            foreach ($userEntities as $user) {
                if (is_object($user)) {
                    $travel->addFollower($user);
                }
            }

            $travelEntities[] = $travel;
            $manager->persist($travel);
        }

        // create an array of Step Entity
        $stepEntities[] = null;

        // create 20 step

        for ($i = 0; $i < 20; $i++) {
            $step = new Step();
            $step->setDescription('Text description step ' . $i);
            $step->setLatitude(random_int(-90, 90));
            $step->setLongitude(random_int(-180, 180));
            $step->setStepDate(new DateTime('NOW'));
            // Get a random Travel in array $travelEntities
            $travelRandom = $travelEntities[rand(1, (count($travelEntities) - 1))];
            $step->setTravel($travelRandom);
            $stepEntities[] = $step;
            $manager->persist($step);
        }

        // create 20 comment

        for ($i = 0; $i < 20; $i++) {
            $comment = new Comment();
            $comment->setComment("Commentaire " . $i);
            // Get a random User in array $userEntities
            $userRandom = $userEntities[rand(1, 5)];
            $comment->setUser($userRandom);
            // Get a random Step in array $stepEntities
            $stepRandom = $stepEntities[rand(1, (count($stepEntities) - 1))];
            $comment->setStep($stepRandom);
            $manager->persist($comment);
        }

        $manager->flush();
    }
}
