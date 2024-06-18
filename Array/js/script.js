
// strings ->  inmutable chang ni karay index ma
// array ->  inmutable chang thay karay index ma

let Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array[4] = 50;
console.log('Array', Array);
// console.log('Array', Array[4] + Array[8]);
// console.log('Array', Array[4] + Array[8]);

// for loop
// for(let i = 0; i < Array.length; i++){
//     console.log(`[Array${i}] is = ${Array[i]}`);
// }

// for of loop
for (let element of Array){
    console.log(element);
}

//sum of the studant marks
const marks = [85, 97, 44, 37, 76, 60];

let sum = 0;
// for loop
for(let i = 0; i < marks.length; i++){

    sum += marks[i];
}

// for of loop
// for(let element of marks){
//     sum += element
// }

let avg = sum / marks.length;
document.write(`studant mark is = ${sum} <br> `);
document.write(`studant avg is = ${avg} <br> `);

// for given array with prices of items [250, 645, 300, 900, 50] all items have an offer of 10% off.
// change the to store final price after offer.

const items = [250, 645, 300, 900, 50];

for (let i=0; i < items.length; i++) {

    let offer = items[i] / 10;
    items[i] -= offer;
}
console.log(items)
// console.log(`final offer iss : ${items}`);