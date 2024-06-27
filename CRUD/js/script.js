let pname = document.getElementById("pname");
let pmodel = document.getElementById("pmodel");
let prize = document.getElementById("prize");
let year = document.getElementById("year");
let discounte = document.getElementById("discounte");

let recod = document.getElementById("ViweData");
let cart = document.getElementById("cart");
let carts = document.getElementById("carts");
let addShow = document.getElementById("addShow");

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


//create Data
const DataFrom = () => {
  event.preventDefault();
  if (isEdit) {
    
    let data = [...Storage];

    let obj = {
      id: isIndex ? isIndex : Math.floor(Math.random() * 1000),
      name: pname.value,
      model: pmodel.value,
      prize: prize.value,
      year: year.value,
      discounte: discounte.value,
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
    if (pname.value == "" && pmodel.value == "" && prize.value == "" && year.value == "") {
      errname.innerHTML = "Enter The All ";
    } else {
      errname.innerHTML = "";
    }
    if (pmodel.value == "") {
      errlname.innerHTML = "Plase Enter The last name";
    } else {
      errlname.innerHTML = "";
    }
    if (prize.value == "") {
      erremail.innerHTML = "Plase Enter The Email";
    } else {
      erremail.innerHTML = "";
    }
    if (year.value == "") {
      errage.innerHTML = "Plase Enter The Age";
    } else {
      errage.innerHTML = "";
    }
    if (discounte.value == "") {
      errCourse.innerHTML = "Plase Enter the your course";
    } else {
      errCourse.innerHTML = "";
    }

    let obj = {
      id: isIndex ? isIndex : Math.floor(Math.random() * 1000),
      name: pname.value,
      model: pmodel.value,
      prize: prize.value,
      year: year.value,
      discounte: discounte.value,
    };

    Storage = [...Storage, obj];
  }
  displyData();

  localStorage.setItem("student_Data", JSON.stringify(Storage));
  pname.value = "";
  pmodel.value = "";
  prize.value = "";
  year.value = "";
  discounte.value = "";
};

// Edit
const singleRec = (id) => {
  console.log("id", id);

  let data = [...Storage];

  let singleRec = data.filter((d) => {
    return d.id == id;
  });
  console.log("Edit ID", singleRec[0]);

  id.value = singleRec[0].id;
  pname.value = singleRec[0].name;
  pmodel.value = singleRec[0].model;
  prize.value = singleRec[0].prize;
  year.value = singleRec[0].year;
  discounte.value = singleRec[0].discounte;
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

// getCart 
const getCart = () => {
  let cardData = JSON.parse(localStorage.getItem('cardItem'));
  if(cardData){
    return cardData;
  }else {
    return [];
  }
}
let Cart = getCart();

const addCount = ()=>{
    carts.innerHTML = Cart.length;
} 
addCount();
let Storage = getData();

// selectProduct
const selectProduct = (id) =>{
  
  let data = [...Storage];

  let addCart = data.filter((p) =>{
    return p.id ==  id;
})

  console.log("add cart", addCart[0]);
  Cart = [...Cart, addCart[0]];
  localStorage.setItem('cardItem',JSON.stringify(Cart));
  addCount();
  viewCart();
}

const viewCart = () => {
  addShow.innerHTML = "";
  if(Cart.length > 0) {
    Cart.forEach((pro) =>{
      addShow.innerHTML += `<tr>
                              <td>${pro.id}</td>
                              <td>${pro.name}</td>
                              <td>${pro.model}</td>
                              <td>${pro.prize}</td>
                          </tr>`;
    })
  }else {
    addShow.innerHTML = "";
  }
}
viewCart(); 
// displyDataFunftion
const displyData = () => {
  recod.innerHTML = "";

  Storage.forEach((rec) => {
    recod.innerHTML += `<tr class="text-center">
                            <td>${rec.id}</td>
                            <td>${rec.name}</td>
                            <td>${rec.model}</td>
                            <td>${rec.prize}</td>
                            <td>${rec.year}</td>
                            <td>${rec.discounte}</td>
                            <td>
                              <button class="btn btn-outline-primary" onclick = "return singleRec(${rec.id})">Edit</button>
                              <button class="btn btn-outline-danger inline" onclick ="return deleteRec(${rec.id})">Delete</button> 
                            </td>
                            <td>
                              <button class="btn btn-outline-primary inline" onclick ="return selectProduct(${rec.id})">Add</button>
                            </td>
                         </tr>`;
  });
};
displyData();
