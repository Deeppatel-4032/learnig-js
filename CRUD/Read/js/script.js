  let name = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("uEmal");
let age = document.getElementById("age");
let course = document.getElementById("course");
let recod = document.getElementById("ViweData");

// Error
let errname = document.getElementById("errname");
let errlname = document.getElementById("errlname");
let erremail = document.getElementById("erremail");
let errage = document.getElementById("errage");
let errCourse = document.getElementById("errCourse");

let isEdit = false;
let isIndex;

// getData
const getData = () => {
  let data = JSON.parse(localStorage.getItem("student_Data"));

  if (data) {
    return data;
  } else {
    return [];
  }
};

let Storage = getData();

//create Data
const DataFrom = () => {
  event.preventDefault();
  if (isEdit) {
    
    let data = [...Storage];

    let obj = {
      id: isIndex ? isIndex : Math.floor(Math.random() * 1000),
      name: name.value,
      lname: lname.value,
      email: email.value,
      age: age.value,
      course: course.value,
    };
    // updateData
    const updateData = data.map((recod) => {

      if (recod.id == isIndex) {
        return recod = obj;
      } else {
        return recod;
      }
    });

    console.log("update", updateData);
    Storage = updateData;

    isIndex = undefined;
    isEdit = false;
  } else {
    if (name.value === "") {
      errname.innerHTML = "Plase Enter The First name";
    }
    if (lname.value === "") {
      errlname.innerHTML = "Plase Enter The last name";
    }
    if (email.value === "") {
      erremail.innerHTML = "Plase Enter The Email";
    }
    if (age.value === "") {
      errage.innerHTML = "Plase Enter The Age";
    }
    if (course.value === "") {
      errCourse.innerHTML = "Plase Enter the your course";
    }

    let obj = {
      id: isIndex ? isIndex : Math.floor(Math.random() * 1000),
      name: name.value,
      lname: lname.value,
      email: email.value,
      age: age.value,
      course: course.value,
    };

    Storage = [...Storage, obj];
  }
  displyData();

  localStorage.setItem("student_Data", JSON.stringify(Storage));
  name.value = "";
  lname.value = "";
  email.value = "";
  age.value = "";
  course.value = "";
};

// Edit
const singleRec = (id) => {
  console.log("id", id);

  let data = [...Storage];

  let singleRec = data.filter((d) => {
    return d.id == id;
  });
  console.log("Edit ID", singleRec[0]);

  name.value = singleRec[0].name;
  lname.value = singleRec[0].lname;
  email.value = singleRec[0].email;
  age.value = singleRec[0].age;
  course.value = singleRec[0].course;
  localStorage.setItem("student_Data", JSON.stringify(data));
  isEdit = true;
  isIndex = id;
};

// DeleteFunction
const deleteRec = (id) => {
    let data = [...Storage]

    let deleteData = data.filter((delId) =>{
        return delId.id != id 
    })

    localStorage.setItem("student_Data", JSON.stringify(deleteData));
    Storage = getData();
    displyData();
}

// displyDataFunftion
const displyData = () => {
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
                            <button class="btn btn-outline-primary" onclick = "return singleRec(${rec.id})">Edit</button>
                            <button class="btn btn-outline-danger inline" onclick ="return deleteRec(${rec.id})">Delete</button> 
                         </tr>`;
  });
};
displyData();
