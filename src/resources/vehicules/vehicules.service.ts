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
}