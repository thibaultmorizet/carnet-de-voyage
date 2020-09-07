<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200907124935 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, last_name VARCHAR(255) NOT NULL, first_name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, role VARCHAR(255) NOT NULL, avatar VARCHAR(255) DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE travel (id INT AUTO_INCREMENT NOT NULL, creator_id INT NOT NULL, title VARCHAR(255) NOT NULL, description LONGTEXT NOT NULL, status TINYINT(1) NOT NULL, picture_url VARCHAR(255) DEFAULT NULL, creation_date DATE NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_2D0B6BCE61220EA6 (creator_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user_travel (user_id INT NOT NULL, travel_id INT NOT NULL, INDEX IDX_485970F3A76ED395 (user_id), INDEX IDX_485970F3ECAB15B3 (travel_id), PRIMARY KEY(user_id, travel_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE step (id INT AUTO_INCREMENT NOT NULL, travel_id_id INT NOT NULL, description VARCHAR(255) NOT NULL, latitude DOUBLE PRECISION NOT NULL, longitude DOUBLE PRECISION NOT NULL, step_like INT DEFAULT NULL, step_date DATE NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_43B9FE3CD7E819E1 (travel_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE picture (id INT AUTO_INCREMENT NOT NULL, step_id_id INT NOT NULL, url VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_16DB4F89636669A8 (step_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE comment (id INT AUTO_INCREMENT NOT NULL, step_id_id INT NOT NULL, user_id_id INT NOT NULL, comment VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_9474526C636669A8 (step_id_id), INDEX IDX_9474526C9D86650F (user_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE travel ADD CONSTRAINT FK_2D0B6BCE61220EA6 FOREIGN KEY (creator_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE user_travel ADD CONSTRAINT FK_485970F3A76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_travel ADD CONSTRAINT FK_485970F3ECAB15B3 FOREIGN KEY (travel_id) REFERENCES travel (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE step ADD CONSTRAINT FK_43B9FE3CD7E819E1 FOREIGN KEY (travel_id_id) REFERENCES travel (id)');
        $this->addSql('ALTER TABLE picture ADD CONSTRAINT FK_16DB4F89636669A8 FOREIGN KEY (step_id_id) REFERENCES step (id)');
        $this->addSql('ALTER TABLE comment ADD CONSTRAINT FK_9474526C636669A8 FOREIGN KEY (step_id_id) REFERENCES step (id)');
        $this->addSql('ALTER TABLE comment ADD CONSTRAINT FK_9474526C9D86650F FOREIGN KEY (user_id_id) REFERENCES user (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE comment DROP FOREIGN KEY FK_9474526C636669A8');
        $this->addSql('ALTER TABLE picture DROP FOREIGN KEY FK_16DB4F89636669A8');
        $this->addSql('ALTER TABLE step DROP FOREIGN KEY FK_43B9FE3CD7E819E1');
        $this->addSql('ALTER TABLE user_travel DROP FOREIGN KEY FK_485970F3ECAB15B3');
        $this->addSql('ALTER TABLE comment DROP FOREIGN KEY FK_9474526C9D86650F');
        $this->addSql('ALTER TABLE travel DROP FOREIGN KEY FK_2D0B6BCE61220EA6');
        $this->addSql('ALTER TABLE user_travel DROP FOREIGN KEY FK_485970F3A76ED395');
        $this->addSql('DROP TABLE comment');
        $this->addSql('DROP TABLE picture');
        $this->addSql('DROP TABLE step');
        $this->addSql('DROP TABLE travel');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE user_travel');
    }
}
