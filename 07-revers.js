let nams ='Abu Sayed Md Saad';

// 1
let revers = '';
for(nam of nams){
    revers = nam + revers;
}
// console.log(revers);

// 2
let rev = '';
for(let i = 0; i < nams.length; i++){
    // const letter = nams[i];
    rev = nams[i] + rev;
}
console.log(rev);

// 3
const reversed = nams.split('').reverse().join('');
console.log(reversed);

// 3
let sentence ='fuck You man';

let start = 0;
let reev = '';
while(start <sentence.length){
    let letter = sentence[start]
    reev = letter + reev
    start++;
}
console.log(reev);