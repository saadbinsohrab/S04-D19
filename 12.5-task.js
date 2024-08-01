// Task-5 (Hard)
// Loop through an object and print the key-value pairs with their types

let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
    };
// key: name | type:  string
// key: age | type:  number
// key: city | type:  string
// key: isStudent | type:  boolean

for(const object in myObject){
    const print = `key: ${object} | type: ${typeof(object)}`;
    console.log(print);
}
// PS C:\rPROJECT\pRACTICE\mILESTONE-04\mODULE-19> node 12.5-task
// key: name | type: string
// key: age | type: string
// key: city | type: string
// key: isStudent | type: string

