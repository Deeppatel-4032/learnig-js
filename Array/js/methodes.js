//concat method
//two array merge karvanu kam kaere
//new array banve (new variable ma)

const arry1 = ["a", "b", "c", "d"];
const array2 = ["e", "f", "g", "h"];

const array3 = arry1.concat(array2);

console.log(array3);

/* ------------------------ concat method  end ------------------------*/

// forEach method

const arrayforEach = ["a", "b", "c", "d"]; 

arrayforEach.forEach((element) => console.log(element));


/* ------------------------ forEach method  end ------------------------*/

//map method
//map the array new work out karava mate use thay (+, * , /, -)
//new array banve (new variable ma)

const arrayMap = [1, 2, 3, 4, 5, 6];

const newarray = arrayMap.map((ele) => ele * 2);

console.log(newarray);

/* ------------------------ map method  end ------------------------*/

// indexof method
//find the index of the element
//return the index of the element


//push methods 
//add the element in the last(end) of the array
//return new the length of the array add the element

const foodItems = ["pizza", "pasta", "burger"]; // 3 items
foodItems.push("cake"); // 4 items
console.log("foodItems", foodItems);


/* ------------------------ push method  end ------------------------*/

//pop / tostring method
//remove the last element
//return the last element
// new length of the array -1
//delete element show in new variable assing return iteme

// toString method
//convert array to string
//return string

const PcModel = ["Macbook", "Dell", "Asus", "Lenovo", "samsung", "HP"]; // 3 items

let deletedItem = PcModel.pop(); // 2 items

console.log("PcModel", PcModel);
console.log(PcModel.toString());
console.log("deletedItem", deletedItem);


/* ------------------------ pop / toString method  end ------------------------*/


//shift method
// remove the element in the first(beginning) of the array
//return new the length of the array remove the element

const arratShift = ["a", "b", "c", "d"]; // 3 items

let deletedItem1  = arratShift.shift();

console.log("arratShift", arratShift);
console.log("deletedItem", deletedItem1);

/* ------------------------ shift method  end ------------------------*/


//unshift method
//add the element in the first(beginning) of the array
//return new the length of the array add the element

const arrayUnShift = ["a", "b", "c", "d"]; // 3 items

let newLength = arrayUnShift.unshift("e", "f", "g"); // add 3 items new 

console.log("arrayUnShift", arrayUnShift);
