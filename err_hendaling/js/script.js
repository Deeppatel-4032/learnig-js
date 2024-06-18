
let p = document.getElementById("ans");
const calc = (a, b) => {

    if (0 > a && 0 > b) {
        return a + b;
    }  else if(a == 0 || b == 0){
        throw 0;
    }
    else{
        throw 200;

    }
}
try{
     let ans = calc(10, 0);
     p.innerHTML = ("ans is : ", ans);
    console.log("ans is : ",ans);

} catch(error) {
    if(error == 0){
        p.innerHTML = ("0 is not valid");
        console.log("0 is not valid");
    } 

    if (error == 200) {
        p.innerHTML = ("200 is not valid");
        console.log("200 is not valid");
    }
}

