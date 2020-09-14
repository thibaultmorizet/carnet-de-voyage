<?php

namespace App\Entity;

use App\Repository\CommentRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;


/**
 * @ORM\Entity(repositoryClass=CommentRepository::class)
 * @ORM\HasLifecycleCallbacks()
 */
class Comment
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
    private $comment;

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
     * @ORM\ManyToOne(targetEntity=Step::class, inversedBy="comments")
     * @ORM\JoinColumn(nullable=false)
     */
    private $step;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="comments")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"step:show"})
     */
    private $user;

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

    public function getComment(): ?string
    {
        return $this->comment;
    }

    public function setComment(string $comment): self
    {
        $this->comment = $comment;

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

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }


}
