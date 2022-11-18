import { Router } from "express";
import { VehiculesService } from "~/resources/vehicules/vehicules.service";
import { BadRequestException, NotFoundException } from "~/utils/exceptions";

// Création d'un router Express
const VehiculesController = Router()

// Instance de notre service
const service = new VehiculesService();

// Tous les vehicules
VehiculesController.get('/', (req, res) => {
    return res
    .status(200) // tout est ok
    .json(service.findAll()); // trouve et parse au format json toutes les données
});


// Un seul vehicule
VehiculesController.get('/:id', (req, res) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
        throw new BadRequestException('Id non-valide !');
    }

    const vehicule = service.findOne(id);
    
    if (!vehicule) {
        throw new NotFoundException('Véhicule introuvable');
    }

    return res
    .status(200) // ok
    .json(vehicule);
});


// Création d'un véhicule
VehiculesController.post('/', (req, res) => {
    const createdVehicule = service.create(req.body);

    return res
    .status(201) // created
    .json(createdVehicule);
});


// On exporte pour pouvoir utiliser notre controller dans `src/index.ts`
export { VehiculesController };