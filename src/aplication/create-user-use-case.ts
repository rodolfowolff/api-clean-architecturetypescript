import { SectorType, User } from "../domain/user.entity";
import { UserRepositoryInterface } from "../domain/user.repository";

export class CreateUserUseCase {
  constructor(private userRepository: UserRepositoryInterface) {}

  async execute(input: CreateUserInput): Promise<CreateUserOutput> {
    const user = new User(input);
    await this.userRepository.insert(user); // INSERE O USUARIO NO 'BANCO DE DADOS' (inversão de dependência)
    return user.toJSON();
  }
}

type CreateUserInput = {
  firstname: string;
  lastname: string;
  telephone: string;
  password: string;
  sector: SectorType[];
  daysService?: number[];
  status: boolean;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
};

type CreateUserOutput = {
  id: number | null;
  firstname: string;
};
