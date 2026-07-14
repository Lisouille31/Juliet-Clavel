# Projet Juliet Clavel

Site vitrine statique pour Juliet Clavel, diététicienne-nutritionniste.

## Structure du projet

- `index.html` : page principale.
- `css/styles.css` : styles globaux.
- `js/main.js` : petit script de gestion du formulaire.

## Ouvrir le projet

1. Ouvrez `index.html` dans un navigateur.
2. Si vous utilisez un serveur local, placez le dossier `juliet-clavel-site` dans le répertoire souhaité.

## Notes

- Le formulaire est géré par Netlify Forms et affiche une confirmation sans
  quitter la page. Les demandes sont disponibles dans l'onglet `Forms` du site
  Netlify après déploiement.
- Les polices Google sont chargées directement depuis le HTML.

## QR code permanent

Le fichier `images/qr-code-juliet-clavel.png` encode l'adresse permanente
suivante :

`https://juliet-clavel-dieteticienne.netlify.app/qr`

Cette adresse redirige vers le site grâce au fichier `_redirects`. Si l'adresse
finale du site change, modifiez uniquement la destination des règles `/qr` dans
ce fichier. Il ne faut pas générer un nouveau QR code : les supports déjà
imprimés continueront ainsi à fonctionner.
