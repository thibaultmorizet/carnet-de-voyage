# Dictionnaire de données

## Utilisateurs (`user`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant de notre l'utilisateur|
|last_name|VARCHAR(255)|NOT NULL|Le nom de l'utilisateur|
|first_name|VARCHAR(255)|NOT NULL|Le prénom de l'utilisateur|
|password|VARCHAR(255)|NOT NULL|Le mot de passe de l'utilisateur|
|role|VARCHAR(255)|NULL|Le rôle de l'utilisateur|
|avatar|VARCHAR(255)|NULL|L'avatar de l'utilisateur|
|created_at|TIMESTAMP|DEFAULT CURRENT_TIMESTAMP|La date de création de l'utilisateur|
|updated_at|TIMESTAMP|NULL|La date de la dernière mise à jour de l'utilisateur|

## Voyage (`travel`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant du voyage|
|title|VARCHAR(255)|NOT NULL|Le titre du voyage|
|description|VARCHAR(255)|NOT NULL|La description du voyage|
|status|VARCHAR(255)|NOT NULL|Le status 0: en cours 1: terminé|
|creation_date|TIMESTAMP|DEFAULT CURRENT_TIMESTAMP|La date de début du voyage|
|created_at|TIMESTAMP|DEFAULT CURRENT_TIMESTAMP|La date de création du voyage|
|updated_at|TIMESTAMP|NULL|La date de la dernière mise à jour du voyage|

## Etape (`step`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant de l'étape|
|picture|VARCHAR(255)|NOT NULL|L'url de la photo|
|description|VARCHAR(255)|NOT NULL|La description de l'étape|
|like|INT|NULL|Bouton j'aime|
|step_date|TIMESTAMP|DEFAULT CURRENT_TIMESTAMP|La date de l'étape|
|created_at|TIMESTAMP|DEFAULT CURRENT_TIMESTAMP|La date de création de l'étape|
|updated_at|TIMESTAMP|NULL|La date de la dernière mise à jour de l'étape|

## Commentaire (`comment`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant du commentaire|
|comment|VARCHAR(255)|NOT NULL|La description de l'étape|
|created_at|TIMESTAMP|DEFAULT CURRENT_TIMESTAMP|La date de création du commentaire|
|updated_at|TIMESTAMP|NULL|La date de la dernière mise à jour du commentaire|
