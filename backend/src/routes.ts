import { Router } from 'express';
import OrphanagesController from './controllers/OrphanagesController';

import './database/connection';


const routes = Router();

// Orphanages Route
routes.get('/orphanages', OrphanagesController.index);

routes.post('/orphanages', OrphanagesController.create);

export default routes;
