const saad = {
    nam: 'Abu Sayed Md Saad',
    age: 25,
    isMarried: false,
    education: {
        madrasha: ['kamil pass', 'fazil', 'alim', 'dakhil'],
        genarel: {
            MA: 'pass',
            BA: {
                result1: 2.96,
                result2: 2.72,
                cgpa: 3.01
            }
        }
    }
}
const hsc = saad.education.madrasha[2];
// console.log(saad.education.madrasha[2]);

saad.education.genarel.BA.result2 = 3.15;
// console.log(saad.education.genarel.BA.result2);

// console.log(saad.education.genarel.MA);

delete saad.isMarried;
console.log(saad);

