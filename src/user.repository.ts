import { User } from "./user.entity";

export interface UserRepositoryInterface {
  insert(user: User): Promise<void>;
}
