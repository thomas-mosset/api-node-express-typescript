# Installation du projet

## 1 - Commandes effectuées

- `npm init -y` : instanciation du projet Node.js

- `npm install -D @types/express @types/node @types/cors nodemon ts-node tsconfig-paths tsup typescript`

- `npm install express cors` (dépendances de développement et de production ici)

### Explications

- `-D` : installe entant que dépendances de développement.

- `@types/express`, `@types/node`, `@types/cors` : ces modules permettent d'avoir accès aux types TS de nos dépendances.

- `nodemon` : permet de relancer le serveur à chaque changement dans les fichiers sources.

- `ts-node` : compile les fichiers TS en développement et permet d'exécuter nos fichiers à la volée.
  - Ex : `ts-node mon_fichier.ts` "deviendra" `node mon_fichier.js`.

- `tsconfig-paths` : permet de donner des chemins relatifs personnalisables à `ts-node`.
  - Ex : `~/mon_fichier.ts` équivaudra à `/src/mon_fichier.ts`.

- `tsup` : permet de compiler les fichiers TS en un seul fichier JS prêt pour la production.

- `cors` : permet d'autoriser uniquement certains domaines (ou tous) à envoyer des requêtes à une API.

## 2 - Définition du script dans `package.json`

``` json
"scripts": {
  "dev": "nodemon --watch src -e js,ts,json --exec \"ts-node src/index.ts\"",
  "build": "tsup src/index.ts --format cjs --clean",
  "start": "node dist/index.js"
}
```

## 3 - Création du fichier `tsconfig.json`
