
let pre = document.querySelector('p');

function myFun(){
    pre.style.color = 'blue';
    pre.style.fontSize = '50px';
    
    pre.document.getElementById('pre').innerHTML = 'hello';
}

pre.addEventListener('click', myFun);


//from validation 

// let uname = document.getElementById("name");
// let uEmail = document.getElementById("Email");
// let upassword = document.getElementById("password");

// let Errname = document.getElementById("Errname");
// let ErrEmail = document.getElementById("ErrEmail");
// let Errpassword = document.getElementById("Errpassword");
// const onSubmitFun = () => {

//     console.log(name.value, Email.value, password.value);

//     return false;
// }

let uname = document.getElementById("name");
let uEmail = document.getElementById("Email");
let upassword = document.getElementById("pass");
let gender = document.getElementsByName('Gender');
let city = document.getElementById("city");


let Errname = document.getElementById("Errname");
let ErrEmail = document.getElementById("ErrEmail");
let Errpassword = document.getElementById("Errpass");
let Errgender = document.getElementById("Errgender");
let Errcity = document.getElementById("Errcity");

const onSubmitFun = () => {

    let n = uname.value;
    let e = uEmail.value;
    let p = upassword.value;
    let g = gender.value;
    let c = city.value;
    
    console.log(n, e, p, g, c); 
    
    if(n == ""){
        Errname.innerHTML = "Please Enter Name";
    } 
    
    if(e == ""){
        ErrEmail.innerHTML = "Please Enter Email";
    } 
    
    if(p == ""){
        Errpassword.innerHTML = "Please Enter Password";
     }
    else{
        if(p.length < 6){
            Errpassword.innerHTML = "Password must be at least 6 characters";
        } 
        Errpassword.innerHTML = "";
    }
    if (g == "") {
        Errgender.innerHTML = "Please select gender";
    }

    if (c == "") {
        Errcity.innerHTML = "Please select city";
    } else {
        Errcity.innerHTML = "";
    }

    return false;
}

