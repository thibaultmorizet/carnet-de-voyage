<?php

namespace App\Entity;

use App\Repository\PictureRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;


/**
 * @ORM\Entity(repositoryClass=PictureRepository::class)
 * @ORM\HasLifecycleCallbacks()
 */
class Picture
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"step:show"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"step:show"})
     */
    private $url;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"step:show"})
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Groups({"step:show"})
     */
    private $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity=Step::class, inversedBy="pictures")
     * @ORM\JoinColumn(nullable=false)
     */
    private $step;

    /**
     * @ORM\PrePersist
     */
    public function onPersist()
    {
        $this->createdAt = new \DateTime();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUrl(): ?string
    {
        return $this->url;
    }

    public function setUrl(string $url): self
    {
        $this->url = $url;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getStep(): ?Step
    {
        return $this->step;
    }

    public function setStep(?Step $step): self
    {
        $this->step = $step;

        return $this;
    }
}
