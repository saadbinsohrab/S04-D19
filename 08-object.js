const saad = {
    nam: 'Abu Sayed Md Saad',
    age: 25,
    hight: 5.7,
    colour: 'chocolate',
    isMarried: false,
    salary: 5000,
    'fav place': ['sajek', 'cocxbazar', 'kuakata']
}
// const income = saad.salary;
const income = saad['salary'];

// saad.age = 28;
saad['age'] = 30;


// console.log(saad);
// console.log(saad.colour);
// console.log(saad['age']);
// console.log(income);
// console.log(saad['age']);
console.log(saad.age);