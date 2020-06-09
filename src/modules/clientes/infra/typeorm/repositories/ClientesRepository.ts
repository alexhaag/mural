import { getRepository, Repository } from 'typeorm';
import IClientesRepository from '@modules/clientes/repositories/IClientesRepository';
import Clientes from '../entities/Clientes';
import ICreateClientesDTO from '@modules/clientes/dtos/ICreateClientesDTO';

class ClientesRepository implements IClientesRepository {
  private ormRepository: Repository<Clientes>; //pega os tipos
  constructor() {
    this.ormRepository = getRepository(Clientes); // constroi o repo
  }

  public async findByName(nome: string): Promise<Clientes | undefined> {
    const findClient = await this.ormRepository.findOne({
      where: { nome },
    });

    return findClient || undefined;
  }

  public async create({
    bairro,
    celular,
    cidade,
    dt_niver,
    estado,
    nome,
    rg,
    rua,
  }: ICreateClientesDTO): Promise<Clientes> {
    const cliente = this.ormRepository.create({
      bairro,
      celular,
      cidade,
      dt_niver,
      estado,
      nome,
      rg,
      rua,
    });

    await this.ormRepository.save(cliente);

    return cliente;
  }
}

export default ClientesRepository;
