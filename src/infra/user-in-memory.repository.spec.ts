import { User, UserType } from "../domain/user.entity";
import { UserInMemoryRepository } from "./user-in-memory.repository";

describe("UserInMemoryRepository Test", () => {
  it("should insert a new user", async () => {
    const userRepository = new UserInMemoryRepository();
    const userProps: UserType = {
      firstname: "John",
      lastname: "Doe",
      telephone: "+55 (11) 99999-9999",
      password: "123456",
      sector: [],
      daysService: [],
      status: true,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null,
    };
    const user = new User(userProps);
    await userRepository.insert(user);
    expect(userRepository.users).toHaveLength(1);
    expect(userRepository.users).toEqual([user]);
  });
});
