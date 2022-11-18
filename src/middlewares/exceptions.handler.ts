import { NextFunction, Request, Response } from 'express';

// Middleware de gestion globale des erreurs
// (les nôtres avec les 404 et 400, mais aussi celles d'Express)

export const ExceptionsHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    // err: erreur Express
    // req: requête initiale
    // res: objet de réponse
    // next: passer au middlware suiviant si celui-ci existe

    if (res.headersSent) {
        return next(err);
    }

    // on renvoie le status de notre propre erreur
    if (err.status && err.error) {
        return res
        .status(err.status)
        .json({ error: err.error });
    }

    return res
    .status(500)
    .json({ error: "Erreur interne"});
};