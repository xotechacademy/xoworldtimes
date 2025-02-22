# Mon Projet - XO World Times

Bienvenue sur le projet **XO World Times**, une application web qui fournit différentes fonctionnalités telles qu'une horloge en temps réel, un calendrier interactif, et plus encore. Ce projet est une application statique transformée en **Progressive Web App (PWA)**, offrant une expérience utilisateur fluide sur les appareils mobiles.

## Structure du Projet

Voici un aperçu de la structure du projet :

/mon-projet │ ├── index.html      # Fichier principal de l'horloge (index) ├── jour.html         # Page pour afficher les informations du jour ├── calendrier.html   # Page pour afficher le calendrier ├── propos.html       # Page "À propos" ├── cadeau.html       # Page pour le cadeau │ ├── css/              # Dossier pour les fichiers CSS │   ├── horloge.css   # Styles spécifiques à horloge.html │   ├── jour.css      # Styles spécifiques à jour.html │   ├── calendrier.css# Styles spécifiques à calendrier.html │   ├── propos.css    # Styles spécifiques à propos.html │   └── cadeau.css    # Styles spécifiques à cadeau.html │ ├── js/               # Dossier pour les fichiers JavaScript │   ├── horloge.js    # Script spécifique à horloge.html │   ├── jour.js       # Script spécifique à jour.html │   ├── calendrier.js # Script spécifique à calendrier.html │   ├── propos.js     # Script spécifique à propos.html │   └── cadeau.js     # Script spécifique à cadeau.html │ ├── sw.js             # Service Worker pour la PWA ├── manifest.json     # Fichier de configuration PWA └── README.md         # Documentation du projet

## Fonctionnalités

- **Horloge** : Affiche l'heure actuelle en temps réel avec une interface élégante.
- **Jour** : Montre des informations détaillées sur la date et l'heure actuelles.
- **Calendrier** : Affiche un calendrier interactif pour naviguer entre les mois et années.
- **À propos** : Donne des informations sur l'application et son créateur.
- **Cadeau** : Une section spéciale pour offrir un cadeau numérique, par exemple un message personnalisé.

## Installation

### Prérequis

Aucun prérequis spécifique pour installer ce projet. Il suffit de cloner le dépôt ou de télécharger les fichiers et de les héberger sur un serveur.

### Déploiement

1. Clonez ce repository sur votre machine locale ou déployez-le directement sur une plateforme comme **Netlify**, **GitHub Pages**, ou tout autre service d'hébergement statique.
2. Si vous souhaitez activer la fonctionnalité **PWA**, assurez-vous que votre navigateur supporte les service workers.

## Développement

Si vous souhaitez développer ou modifier ce projet, voici quelques étapes de base pour le configurer :

1. Clonez le projet depuis GitHub :
   ```bash
   git clone https://github.com/xotechacademy/xoworldtimes.git

2. Ouvrez les fichiers HTML dans votre éditeur de texte ou IDE préféré.


3. Modifiez les fichiers horloge.html, jour.html, etc., pour personnaliser l'apparence et le contenu.


4. Si vous ajoutez des fonctionnalités JavaScript, éditez les fichiers dans le dossier js/.



Service Worker et PWA

Ce projet utilise un service worker (sw.js) pour permettre à l'application de fonctionner hors ligne et d'être installée sur les appareils mobiles en tant que Progressive Web App. Assurez-vous que votre site est servi via HTTPS pour que le service worker fonctionne correctement.

Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser, de le modifier, et de le distribuer sous les termes de cette licence.

Auteurs

Lorvenshy Brice- Créateur du projet.

