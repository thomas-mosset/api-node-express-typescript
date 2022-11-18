export type VehiculeCategory = 'van' | 'utilitaire';

export type VehiculeBrand = 'volkswagen' | 'citroën';

export interface Vehicule {
  id: number
  name: string
  type: VehiculeCategory
  brand: VehiculeBrand
};