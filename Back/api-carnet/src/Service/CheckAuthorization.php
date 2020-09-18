<?php

namespace App\Service;

use App\Repository\StepRepository;
use App\Repository\UserRepository;
use Lexik\Bundle\JWTAuthenticationBundle\Encoder\JWTEncoderInterface;

class CheckAuthorization
{

    /**
     * Get the Token from the headers and check the Username in the database
     *
     * @param JWTEncoderInterface $jWTEncoderInterface
     * @param UserRepository $userRepository
     * @return userArray [userId, admin(false or true), follow(array of id of follow travels)] or null (Bab Token or username not found)
     */
    public static function checkAuthorization(JWTEncoderInterface $jWTEncoderInterface, UserRepository $userRepository)
    {
        // get the Token from the headers
        $token = apache_request_headers()["Authorization"];
        if ($token == null) {
            return null;
        } // not Token
        // delete sub string "Berear "
        $token = substr($token, 7);
        // Decode Token
        $tokenArray = $jWTEncoderInterface->decode($token);
        // gets a User object from username
        $user = $userRepository->findOneByUsername($tokenArray['username']);
        if ($user == null) {
            return null;
        } // username not found in Database
        $userArray["userId"] = $user->getId();
        $userArray["admin"] = false;
        //dd($userArray);
        // loop on all roles
        $arrayRoles = $user->getRoles();
        foreach ($arrayRoles as $roles) {
            if ($roles == "ROLE_ADMIN") $userArray["admin"] = true;
        }
        $followTravels = $user->getFollower()->getValues();
        $followTravelsId = array();
        foreach ($followTravels as $travel) {
            array_push($followTravelsId, $travel->getId());
        }
        $userArray["follow"] = $followTravelsId;
        //dd($user, $userArray);       
        return $userArray;
    }

    /**
     * Get the Token from the headers and check the Username in the database
     *
     * @param travelId $travelId
     * @param stepId $stepId
     * @param StepRepository $stepRepository
     * @return match True or False (if the step matches to the travel)
     */
    public static function checkTravelStep($travelId, $stepId, StepRepository $stepRepository)
    {
        $match=false;
        if($stepRepository->find($stepId)->getTravel()->getId()==$travelId){
            $match=true;
        }
        return $match;
    }
}
