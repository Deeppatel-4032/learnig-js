let name = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("uEmal");
let age = document.getElementById("age");
let course = document.getElementById("course");
let recod = document.getElementById("ViweData");

const getData = () => {

    let data = JSON.parse(localStorage.getItem("student_Data"));

    if(data) {
        return data;
    } else {
        return [];
    }
}

let Storage = getData();

const DataFrom = () => {
  event.preventDefault();
  let obj = {
    id: Math.floor(Math.random() * 1000),
    name: name.value,
    lname: lname.value,
    email: email.value,
    age: age.value,
    course: course.value
  };

    // StorageArray = Storage.push(obj);
   Storage = [...Storage, obj];

   console.log("Storage is",Storage);
//    console.log("obj is", obj);

  addData();

    localStorage.setItem("student_Data",JSON.stringify(Storage));
    name.value = "";
    lname.value ="";
    email.value = "";
    age.value = "";
    course.value = "";  
};

const addData = () => {
  recod.innerHTML = "";

  Storage.forEach((rec) => {
    recod.innerHTML += `<tr>
                            <td>${rec.id}</td>
                            <td>${rec.name}</td>
                            <td>${rec.lname}</td>
                            <td>${rec.email}</td>
                            <td>${rec.age}</td>
                            <td>${rec.course}</td>
                            <td>
                            <button class="btn btn-outline-primary">Edit</button>
                            <button class="btn btn-outline-danger inline">Delete</button> 
                         </tr>`;
  });
};
addData();
