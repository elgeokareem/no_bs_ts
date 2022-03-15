interface MyUser {
  name: string;
  id: number;
  email?: string;
}

// interface MyUserOptionals {
//   name?: string;
//   id?: string;
//   email?: string;
// }

// Partial hace que todos los campos sean opcionales
type MyUserOptionals = Partial<MyUser>;

const merge = (user: MyUser, overrides: MyUserOptionals) => {
  return {
    ...user,
    ...overrides
  };
};

// console.log(merge({ name: "John", id: "123", email: "lala" }, { email: "" }));

// Required hace que todos los campos sean requeridos
type RequiredMyUser = Required<MyUser>;

// Pick te permite seleccionar las propiedades que se quieren de un objeto
type JustEmailAndName = Pick<MyUser, "email" | "name">;

// Omit es lo opuesto de pick
type UserWithoutId = Omit<MyUser, "id">;

const mapById = (users: MyUser[]): Record<MyUser["id"], UserWithoutId> => {
  return users.reduce((a, v) => {
    const { id, ...other } = v;
    return {
      ...a,
      [v.id]: other
    };
  }, {});
};

console.log(
  mapById([
    { name: "John", id: 123, email: "lala" },
    { name: "John2", id: 1234, email: "lala2" }
  ])
);
