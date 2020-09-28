<?php

namespace App\Tests;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class SmokeTest extends WebTestCase
{
    public function testGetUser()
    {
        $client = $this->createClient();
        $client->request('GET', '/');

        $this->assertResponseIsSuccessful();
    }

    public function testGetUserList()
    {
        $client = $this->createClient(['sebtoorop@gmail.com', 'Salut123']);

        // $client->request(
        //     'POST',
        //     '/api/login_check',
        //     [],
        //     [],
        //     ['CONTENT_TYPE' => 'application/json'],
        //     json_encode(
        //         [
        //             "_username" => 'sebtoorop@gmail.com',
        //             "_password" => 'Salut123',
        //         ]
        //     )
        // );
        
        //$response = $client->getResponse();
        
        //$token = json_decode($response->getContent())->token;

        $client->request('GET', '/api/user', [], [], [
            'HTTP_AUTHORIZATION' => "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDA4ODgzODgsImV4cCI6MTYwMTQ5MzE4OCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoic2VidG9vcm9wQGdtYWlsLmNvbSJ9.dqHooGwGw_fvk0O1vQQdG5btLZaZfRxTkJ1Oo6PtB4xOMCSlmCJzOdrh8x8qYVVTxhy-pL3FO4YGqoCz8nHn4to2ehC8mZCIN7XnX_iZ2wfEd3hpD7lf9f_0ny30yVUfMkFv-jwuIfH-8EPGL_0zV_Pi6wOfd2pWymKfB2qIp2qdC4uV8_aU8xcV64EmkbCxLk3mGpYnhFqciSIut25j1K8nac-J1pBXybU1EwO2DrPGRR4b4D0w93wve_fLozaMvqT6InIly1Z_bWBq_BnKq1G_hpfaeH1eP8W7PVvuU-9ITI1j779R1ugS5L5ALTECx70sql4Mj9ae1kVp-AUn7EZc4pEdB0oI5qAdQj655Qf5AiPuyt6WgRcgQ3W3VytDM6za507DZv4SQSD6Y2negW9m3iW0Jq1zHIB448ygrWWGXIrxwbTN_WEQ5Hp6cpEuQwdnUR973Eu3KMohN446-Y7XzxajGkVjLb-yUf-_c-3NWOUnt5jFpZWLISSB2eASAcQLNeSd3vF1QNDwWXZNuL2x60KBMpOmlVD9uOoFL2vwB4pNJ_rUqjJjddOCUrbGsSM2X6_p-UKDLqYcMnxXOBrrzzZtSh9dJ4QbCLpsyOnkUmwDkh3jdww1awjjO1DvM5UJ70Y0pmmi-C91_xU6chVY6GXqphokPT-1-mw8gEc",
            'CONTENT_TYPE' => 'application/ld+json',
            'HTTP_ACCEPT' => 'application/ld+json'
        ]);

        $this->assertResponseIsSuccessful();
    }
}