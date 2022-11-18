import type { Vehicule } from '~~/types/vehicules';
import { vehicules } from '~/data';
import { NotFoundException } from '~/utils/exceptions';

// Un service est le fichier qui s'occupe de toute la logique. Par exemple, c'est lui qui traite la base de données, les requêtes etc.

export class VehiculesService {
    // On copie localement nos données pour pouvoir faire un CRUD dessus
    vehicules: Vehicule[] = vehicules;

    // On trouve et retourne tous les véhicules
    findAll(): Vehicule[] {
        return this.vehicules;
    };

    // Création d'un véhicule
    create(vehiculeData: Omit<Vehicule, 'id'>): Vehicule {

        const newVehicule: Vehicule = {
            ...vehiculeData,
            id: this.vehicules.length + Math.floor(Math.random() * 100) // permet de créer aléatoirement un id factice (/!\ Mauvaise pratique lorsqu'il y a une vraie BDD /!\)
        }

        this.vehicules.push(newVehicule);

        return newVehicule;
    }
}