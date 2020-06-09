import { getRepository, Repository } from 'typeorm';
import IUserRepository from '@modules/users/repositories/IUserRepository';
import ICreateUsersDTO from '@modules/users/dtos/ICreateUserDTO';
import User from '../entities/User';

class UsersRepository implements IUserRepository {
  private ormRepository: Repository<User>; //pega os tipos
  constructor() {
    this.ormRepository = getRepository(User); // constroi o repo
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(id);

    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({ where: { email } });

    return user;
  }

  public async create(userData: ICreateUsersDTO): Promise<User> {
    const cliente = this.ormRepository.create(userData);

    await this.ormRepository.save(cliente);

    return cliente;
  }

  public async save(user: User): Promise<User> {
    return this.ormRepository.save(user);
  }
}

export default UsersRepository;
