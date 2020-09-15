<?php

namespace App\Controller;

use App\Repository\TravelRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Controller\TravelApiController;
use Symfony\Bundle\MakerBundle\Str;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

/**
 *  @Route("/api/admin")
 */
class AdminApiController extends AbstractController
{
    /**
     * @Route("/userlist", name="api_admin_userlist", methods={"GET"})
     * 
     */
    public function userlist(UserRepository $userRepository)
    {
        //create an array of all users
        $userlist = $userRepository->findAll();

        // we use the symfony serializer to transform objects into JSON
        return $this->json(
            $userlist,
            200,
            [],
            ["groups" => ["userlist"]]
        );
    }

    /**
     * @Route("/userlist/{id}/delete", name="api_admin_userlist_delete", methods={"DELETE"})
     */
    public function delete(UserRepository $userRepository, $id)
    {
        $manager = $this->getDoctrine()->getManager();
        //we select the desired user object with the url id
        $user = $userRepository->find($id);
        //we recover the roles of the user
        $userRoles = $user->getRoles();
        //we create a boolean for know if the user is an Admin
        $userAdmin = False;
        //for each role of $userRoles
        foreach ($userRoles as $role) {
            //if the role is "ROLE_ADMIN"
            if ($role == "ROLE_ADMIN") {
                //we put the boolean for know if the user is an Admin to "True"
                $userAdmin = True;
            }
        }

        //if the boolean for know if the user is an Admin to "True"
        if ($userAdmin) {
            //we return an error with "HTTP_UNAUTHORIZED"
            return $this->json(
                [
                    "success" => false
                ],
                Response::HTTP_UNAUTHORIZED
            );
        } 
        
        else {
            //else we remove the user and save the change in Database
            $manager->remove($user);
            $manager->flush();

            //we return confirmation message of everything is OK
            return $this->json(
                [
                    "success" => true
                ],
                Response::HTTP_OK
            );
        }
    }

    /**
     * @Route("/userlist/search", name="api_admin_userlist_search", methods={"GET"})
     */
    public function user(UserRepository $userRepository, Request $request)
    {
        //we recover the Json search and we decode in "string" 
        $search = (json_decode($request->getContent(), True)["search"]);
        //we recover all users who have the string "search" in their firstname or lastname
        $results = $userRepository->findByName($search);
        // we use the symfony serializer to transform objects into JSON
        return $this->json(
            $results,
            200,
            [],
            ["groups" => ["userlist:search"]]
        );
    }
}
