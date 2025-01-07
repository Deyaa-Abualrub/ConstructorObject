function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;

  this.getDetails = function () {
    return `This Car Is The ${this.brand} ${this.model} ${this.year}`;
  };
}

let car1 = new Car("Toyota", "Camry", 2022);
let car2 = new Car("Tesla", "Model S", 2023);
let car3 = new Car("Ford", "Mustang", 2021);

let CarDetails = [car1, car2, car3];

for (let i = 0; i < CarDetails.length; i++) {
  console.log(CarDetails[i].getDetails());
}

// q2

function firstName(Person) {
  return Person.firstName;
}

let person = [
  { firstName: "Deya'a", lastName: "Nabil" },
  { firstName: "Mahmoud", lastName: "Alaa" },
  { firstName: "Hareth", lastName: "J" },
];

for (let i = 0; i < person.length; i++) {
  console.log(person[i].firstName);
}

// q3

function objectToArray(obj) {
  return Object.entries(obj).flat();
}
const exampleObject = {
  name: "Ali",
  age: 25,
};

console.log(objectToArray(exampleObject));
