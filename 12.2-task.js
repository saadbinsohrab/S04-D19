// Task-2
// For this object below add a property named passenger capacity with value 5
// --------------------------VERY IMPORTANT TASK------------------------------------

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
car.isNew = true;

const newCar = {
    ...car,
    'passenger capacity': 5,
}

console.log(car);
console.log(newCar);

