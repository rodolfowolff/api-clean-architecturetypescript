import { User } from "./user.entity";
import { UserRepositoryInterface } from "./user.repository";

export class UserInMemoryRepository implements UserRepositoryInterface {
  private users: User[] = [];

  async insert(user: User): Promise<void> {
    this.users.push(user);
  }
}
