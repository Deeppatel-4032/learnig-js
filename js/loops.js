

// while loops

let num = 1;

while(num <= 100){

    console.log(num);
    num++;
}


// do while Loop

let no = 1;

do {
    console.log(no);
    no++;
    
}while(no <= 100);


// for Loop

let h2 = document.getElementById("mul");
for(let i = 1; i <= 10; i++){

    // console.log("5*" + i + "=" + 5 * i);

    h2.innerHTML += "5*" + i + "=" + 5 * i + "<br/>";
}

// nested for loop

let std = " ";
let patten = document.getElementById("patten");

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        std += (" " + j);
    }
    std += "<br/>";
}
// console.log(std);
patten.innerHTML = (std);

