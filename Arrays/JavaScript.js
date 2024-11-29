const anyText = "Algum texto";

console.log(anyText.toUpperCase());

console.log(typeof anyText.toUpperCase);

const arr = [1, 2, 3, 4];

console.log(arr[2])

// Object literals
// O object literals é uma instância de um objeto, chamado object.

const person = {
    name: "Marconny",
    job: "Programador",
    year: 20        
};

console.log(person);

console.log(person.job)

console.log(person.name.length);

// Criando e deletando propiedades

const car = {
    engine: 2.0,
    brand: "volkswagen",
    model: "Golf",
    km: 0
};

console.log(car);

car.doors = 4;

console.log(car);

delete car.km;

console.log(car);

console.log(Object.keys(car));
console.log(Object.entries(car));