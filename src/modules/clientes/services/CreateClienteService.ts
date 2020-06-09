import { getRepository } from 'typeorm';
import { injectable, inject } from 'tsyringe';
import Clientes from '../infra/typeorm/entities/Clientes';
import IClientesRepository from '../repositories/IClientesRepository';
import ICreateClientesDTO from '../dtos/ICreateClientesDTO';
/*
interface IRequestDTO {
  nome: string;
  rg: string;
  celular: string;
  rua: string;
  bairro: string;
  cidade: string;
  estado: string;
  dt_niver: Date;
}
*/
@injectable()
class CreateClienteService {
  constructor(
    @inject('ClientesRepository')
    private clientesRepository: IClientesRepository,
  ) {}
  public async execute({
    nome,
    rg,
    celular,
    rua,
    bairro,
    cidade,
    estado,
    dt_niver,
  }: ICreateClientesDTO): Promise<Clientes> {
    const clientesRepository = getRepository(Clientes);

    const cliente = await this.clientesRepository.create({
      nome,
      rg,
      celular,
      rua,
      bairro,
      cidade,
      estado,
      dt_niver,
    });

    return cliente;
  }
}

export default CreateClienteService;
