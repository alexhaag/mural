import { container } from 'tsyringe';

import IClientesRepository from '@modules/clientes/repositories/IClientesRepository';
import ClientesRepository from '@modules/clientes/infra/typeorm/repositories/ClientesRepository';

import IUsersRepository from '@modules/users/repositories/IUserRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UserRepositories';

container.registerSingleton<IClientesRepository>(
  'ClientesRepository',
  ClientesRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
