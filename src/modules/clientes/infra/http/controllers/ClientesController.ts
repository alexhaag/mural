import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateClienteService from '@modules/clientes/services/CreateClienteService';
// import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

export default class ClientesController {
  public async create(
    resquest: Request,
    response: Response,
  ): Promise<Response> {
    const {
      bairro,
      celular,
      cidade,
      dt_niver,
      estado,
      nome,
      rg,
      rua,
    } = request.body;

    const createCliente = container.resolve(CreateClienteService);
    const cliente = await createCliente.execute({
      bairro,
      celular,
      cidade,
      dt_niver,
      estado,
      nome,
      rg,
      rua,
    });
    response.json(cliente);
  }
}
