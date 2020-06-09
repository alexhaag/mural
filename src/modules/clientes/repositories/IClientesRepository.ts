import Clientes from '../infra/typeorm/entities/Clientes';
import ICreateClientesDTO from '../dtos/ICreateClientesDTO';

export default interface IClientesRepository {
  create(data: ICreateClientesDTO): Promise<Clientes>;
  findByName(nome: string): Promise<Clientes | undefined>;
}
