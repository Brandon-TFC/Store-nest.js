const myName = 'Brandon';
const myAge = 12;
const suma = (a: number, b: number) => {
  return a + b;
}
suma(12, 12);

class persona {
  //private age;
  //private name; //Si no asignamos public se asigna por defecto

  constructor(private age: number, private name: string) { }

  getsumary() {
    return `I'm ${this.name} and I'm ${this.age}`;
  }
}

const brandon = new persona(15, 'brandon');
brandon.getsumary();


