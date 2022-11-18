import type { Vehicule } from '~~/types/vehicules';

/**
 * Fausses base de données
 *
 * On spécifie ici que `vehicules` est un tableau contenant des `Vehicule`
 */
export const vehicules: Vehicule[] = [
  { id: 1, name: 'California', type: 'van', brand: 'volkswagen'  },
  { id: 2, name: 'Caddy', type: 'utilitaire', brand: 'volkswagen' },
  { id: 3, name: 'Combi', type: 'van', brand: 'volkswagen' },
  { id: 4, name: 'Berlingo', type: 'utilitaire', brand: 'citroën' }
]