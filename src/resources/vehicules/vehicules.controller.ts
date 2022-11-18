import { Router } from "express";
import { VehiculesService } from "~/resources/vehicules/vehicules.service";
import { BadRequestException, NotFoundException } from "~/utils/exceptions";

// Création d'un router Express
const VehiculesController = Router()

// Instance de notre service
const service = new VehiculesService();

// Tous les vehicules
VehiculesController.get('/', (req, res) => {
    return res.
    status(200) // tout est ok
    .json(service.findAll()); // trouve et parse au format json toutes les données
});


// On exporte pour pouvoir utiliser notre controller dans `src/index.ts`
export { VehiculesController };