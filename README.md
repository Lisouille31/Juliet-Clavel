# Projet Juliet Clavel

Site vitrine statique pour Juliet Clavel, diététicienne-nutritionniste.

## Structure du projet

- `index.html` : page principale.
- `css/styles.css` : styles globaux.
- `js/main.js` : scripts des interactions de la page.
- `_headers` : en-têtes de sécurité appliqués par Netlify après déploiement.

## Ouvrir le projet

1. Ouvrez `index.html` dans un navigateur.
2. Si vous utilisez un serveur local, placez le dossier `juliet-clavel-site` dans le répertoire souhaité.

## Notes

- La prise de rendez-vous en ligne renvoie vers le profil Alivio de Juliet Clavel.
- Les en-têtes de `_headers` ne sont pas actifs lors d'une ouverture directe du fichier HTML ; ils sont servis par Netlify.
- Les polices Google sont chargées directement depuis le HTML.

## QR code permanent

Le fichier `images/qr-code-juliet-clavel.png` encode l'adresse permanente
suivante :

`https://juliet-clavel-dieteticienne.netlify.app/qr`

Cette adresse redirige vers le site grâce au fichier `_redirects`. Si l'adresse
finale du site change, modifiez uniquement la destination des règles `/qr` dans
ce fichier. Il ne faut pas générer un nouveau QR code : les supports déjà
imprimés continueront ainsi à fonctionner.

## Avis Google

Les avis sont synchronisés via le widget Elfsight `6044754d-ee5a-40f8-83db-2103dce02ca4`, à partir de la fiche publique du cabinet. Aucun avis n'est saisi dans les fichiers du site.

- Éditeur : https://dash.elfsight.com/widget/6044754d-ee5a-40f8-83db-2103dce02ca4
- Présentation : Ticker (défilement continu), une rangée.
- Offre sélectionnée : Free, 200 affichages mensuels, marque Elfsight.
- Les mises à jour dépendent de la synchronisation Elfsight ; elles ne sont pas instantanées.
- Le script officiel est chargé depuis `https://elfsightcdn.com/platform.js`. Les domaines nécessaires sont autorisés dans `_headers` pour Netlify.
- Le lien vers tous les avis Google reste disponible si le widget ne peut pas charger ou atteint son quota.

Le widget est configuré en français. L'affichage de la date est désactivé dans Elfsight : lors du contrôle, le fournisseur indiquait 16 heures contre 47 minutes sur Google Maps. Le texte intégral de l'avis est affiché. Réglages publiés et vérifiés dans Safari après actualisation du site local.
