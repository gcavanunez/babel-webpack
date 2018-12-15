export const person = {
  name: "Johny boy",
  location: "Lima",
  age: 20
};
export function sayHello(name) {
  return `Hello ${name}`;
}
export class User {
  constructor(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  name() {
    return this.name;
  }
}
