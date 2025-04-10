#  Frontend - Devine le Mot

Ce dépôt contient le **frontend** de l'application _Devine le Mot_, un petit jeu interactif où les utilisateurs doivent deviner un mot en se basant sur des espaces vides représentant les lettres. Ce frontend consomme les API exposées par le backend (voir dépôt correspondant).

---

##  Description du projet

Ce frontend propose une interface utilisateur claire et intuitive, avec les pages suivantes :

- **Page de connexion** (`/login`)
- **Page d'inscription** (`/signup`)
- **Page de jeu**(`/`) : pour tenter de deviner les mots (jeu de type pendu/sudoku sans le pendu 😄)
- **Page d'historique**(`/historique`) : pour consulter toutes les parties déjà jouées

Ce frontend interagit avec un backend Spring Boot (voir [repo backend]) pour la gestion des utilisateurs et des parties.

---

##  Lancer le projet

###  Via Docker 

L’image Docker du frontend est déjà configurée.

Tu peux la build et la lancer avec :

```bash
docker build -t devine-le-mot-frontend .
docker run -p 3000:3000 devine-le-mot-frontend
```

Par défaut, l’application écoute sur le port 3000.

### Lancer en local 
    Installer les dépendances :

```bash
npm install
```

    Lancer le projet :

```bash
npm start
```


    Assure-toi que le backend est bien lancé et accessible à l’URL configurée dans les appels API.

### Tester le frontend

Voici comment tester toutes les fonctionnalités de l’application :

- Accéder à la page d'inscription et créer un utilisateur

- Se connecter via la page de login

- Jouer une partie sur la page principale

- Aller sur la page d'historique pour consulter les parties déjà jouées

### Interactions avec Docker

Le frontend est également conteneurisé et suit la même logique que le backend :

- Build de l'image Docker via un Dockerfile

- Exposition du service sur le port 3000 

- Utilisation dans Docker Compose 

- Publication automatique de l’image sur Docker Hub via GitHub Actions

### CI/CD - GitHub Actions

Le pipeline CI/CD est mis en place avec GitHub Actions, et comprend :

- Installation et build du projet

- Build de l’image Docker

- Push automatique de l’image sur Docker Hub

### Stack technique

- React 

- Tailwind 

- Docker

- GitHub Actions pour le CI/CD



### Publication

- L’image Docker du frontend est automatiquement buildée et publiée sur Docker Hub à chaque mise à jour de la branche principale via GitHub Actions.