import { User, UserType } from "./user.entity";

describe("User Tests", () => {
  it("constructor", () => {
    let userProps: UserType = {
      id: 1,
      firstname: "John",
      lastname: "Doe",
      telephone: "99999999",
      password: "123456",
      sector: [{ id: 1, name: "Sector 1" }],
      status: true,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null,
    };

    let user = new User(userProps);

    expect(user.props).toStrictEqual({
      ...userProps,
      daysService: [],
      deleted_at: null,
    });

    userProps = {
      id: 1,
      firstname: "John",
      lastname: "Doe",
      telephone: "99999999",
      password: "123456",
      sector: [{ id: 1, name: "Sector 1" }],
      daysService: [1, 2, 3],
      status: true,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null,
    };

    user = new User(userProps);

    expect(user.props).toStrictEqual({
      ...userProps,
      daysService: [1, 2, 3],
      deleted_at: null,
    });
  });
});
