import { NotFoundException } from "~/utils/exceptions";

// Pour toutes les autres routes demandées qui n'existent pas, on retourne une erreur 404 via 'NotFoundException'
export const UnknownRoutesHandler = () => {
    throw new NotFoundException('La resource demandée n\'existe pas.');
};