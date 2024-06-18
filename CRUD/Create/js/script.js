
let name = document.getElementById("fname");
let lname = document.getElementById("lname");
let Email = document.getElementById("uEmal");
let Password = document.getElementById("uPassword");
let City = document.getElementById("ucity");
let State = document.getElementById("uState");

let Storage = [];

const  DataFrom = () => {

    let obj = {
        name : name.value,
        lname : lname.value,
        Email : Email.value,
        pass : Password.value,
        City : City.value,
        State : State.value
    }

    // let StorageArray = Storage.push(obj);
    let StorageArray1 = [...Storage,obj];
    console.log(obj);
    
    return false;
}
