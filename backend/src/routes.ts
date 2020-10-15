import { Router } from 'express';
import OrphanagesController from './controllers/OrphanagesController';

import './database/connection';


const routes = Router();

routes.post('/orphanages', OrphanagesController.create);

export default routes;
