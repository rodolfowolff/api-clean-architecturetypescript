import { SectorType, User } from "./user.entity";

export class CreateUserUseCase {
  async execute(input: CreateUserInput): Promise<CreateUserOutput> {
    const user = new User(input);
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
