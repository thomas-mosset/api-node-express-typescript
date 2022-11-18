import cors from 'cors';
import express from 'express';
import { config } from '~/config';
import { VehiculesController } from '~/resources/vehicules/vehicules.controller';
import { ExceptionsHandler } from '~/middlewares/exceptions.handler';
import { UnknownRoutesHandler } from '~/middlewares/unknownRoutes.handler';

/* Fichier d'entrée, c'est dans ce fichier que nous instancions le serveur ainsi que les routes HTTP */


// Création d'une app Express
const app = express();

// Demande à parser le body des requêtes en JSON à Express
app.use(express.json());

// On autorise tous les noms de domaines à faire des requêtes sur notre API.
app.use(cors())

// Toutes nos routes CRUD pour les véhicules seront préfixées par '/vehicules'
app.use('/vehicules', VehiculesController);

// La homepage
app.get('/', (req, res) => res.send('Homepage 🏠'));

// Pour toutes les autres routes non définies, on renvoie vers une erreur
app.all('*', UnknownRoutesHandler);

// Gestion des erreurs /!\ Cela doit être le dernier `app.use`
app.use(ExceptionsHandler)

// On demande à Express d'ecouter les requêtes sur le port défini dans la config
app.listen(config.API_PORT, () => console.log('Running at http://localhost:' + config.API_PORT));