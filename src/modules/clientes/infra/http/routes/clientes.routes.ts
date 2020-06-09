import { Router } from 'express';
import ClientesController from '../controllers/ClientesController';
const clientesRouter = Router();
const clientesController = new ClientesController();
// clientesRouter.use(ensureAuthenticated);

//clientesRouter.get('/', (request, response) => {
//  const clientes = clientesRepository.find();
//  return response.json(clientes);
//});

clientesRouter.post('/', clientesController.create);

export default clientesRouter;
