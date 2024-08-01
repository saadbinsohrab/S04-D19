const mobile = {
    brand: 'xaiomi',
    model: '9 pro max',
    colour: 'blue',
    price: 25000,
    camera: '12mp' 
}

for(const prop in mobile){
    // console.log(prop);
    // console.log(mobile[prop]);
}

const keysss = Object.keys(mobile);
// const keysss = Object.keys(mobile); er man ta array hisebe output debe. 
// so amra array er jonno (for of) loop use korte pari.
for(const kye of keysss){
    console.log(kye, ':', mobile[kye]);
}
