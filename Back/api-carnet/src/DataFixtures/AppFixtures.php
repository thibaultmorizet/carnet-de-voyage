<?php

namespace App\DataFixtures;

use App\Entity\Travel;
use App\Entity\User;
use DateTime;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
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
        $userEntities[] = null;
        // create 10 users
        for ($i = 0; $i < 10; $i++) {
            $user = new User();
            $user->setFirstName('first name '.$i);
            $user->setLastName('last name '.$i);
            $user->setEmail('email'.$i);
            $password = $this->encoder->encodePassword($user, 'password'.$i);
            $user->setPassword($password);
            $user->setRoles(["ROLE_USER"]);
            $user->setCreatedAt(new DateTime('NOW'));
            $userEntities[]= $user;
            $manager->persist($user);
        }

        // create 20 travels
        for ($i = 0; $i < 20; $i++) {
            $travel = new Travel();
            $travel->setTitle('travel '.$i);
            $travel->setDescription('Text description '.$i);
            $travel->setStatus(mt_rand(0, 1));
            $travel->setCreationDate(new \DateTime('now'));
            $user->setCreatedAt(new DateTime('NOW'));
            /** @var User $userRandom */
            $userRandom = $userEntities[array_rand($userEntities, 1)] ;
            $travel->setCreator($userRandom);
            $manager->persist($travel);
        }

        $manager->flush();
    }
}
