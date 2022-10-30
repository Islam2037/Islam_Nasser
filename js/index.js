var outerWidth = $(".list-ul ").outerWidth();
// console.log(outerWidth);
$("#contact").hide(10);
$("#hide").hide(10);
getMeals(" ");

$("li a").click(function () {
  $(".list-caption").animate({ left: "0" }, 500);
  $(".list-ul").hide(500, function () {
    $(".list-ul li").fadeOut(500);
  });

  $(".active").show();
  $(".nonActive").hide();
});
$(".active,.nonActive").click(function () {
  if ($(".list-caption").css("left") === `0px`) {
    $(".list-caption").animate({ left: `${outerWidth}` }, 300);
    $(".list-ul").show(300, function () {
      $(".list-ul li").fadeIn(300);
    });
    $(".active").hide();
    $(".nonActive").show();
  } else {
    $(".list-caption").animate({ left: "0" }, 300);
    $(".list-ul").hide(300, function () {
      $(".list-ul li").fadeOut(300);
    });

    $(".active").show();
    $(".nonActive").hide();
  }
});
let myNewResponse = [];
async function getMeals(meal) {
  let myRequest = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
  );
  myResponse = await myRequest.json();
  myNewResponse = myResponse.meals;
  displayMeals();
  $("#demo").show(500);
  $("#information").hide(500);
}

function displayMeals() {
  var box = "";
  for (var i = 0; i < myNewResponse.length; i++) {
    box += `
              <div class="col-md-3">
              <div onclick="getDetails(${myNewResponse[i].idMeal})"  class="item" >
              <img class="w-100 "    src="${myNewResponse[i].strMealThumb}" alt="">
              <div class="inner-opacity text-center d-flex justify-content-center align-items-center ">
              <h2 class="text-black">${myNewResponse[i].strMeal}</h2>
              </div>
              </div>
              </div>
            
              `;
  }
  document.getElementById("demo").innerHTML = box;
}
$("#search").click(function () {
  $("#demo").empty(500);
  $("#category").empty(500);
  $("#information").empty(500);
  $("#areaHtml").empty(500);
  $("#Allcategory").empty(500);
  $("#allAreaHtml").empty(500);
  $("#hide").fadeIn(500);
  $("#contact").hide(500);
});
$("#searchInput").keypress(function () {
  let searchInput = $("#searchInput").val();
  getMeals(`${searchInput}`);
  $("#demo").show(500);
});

$("#firstLitter").keyup(function () {
  let lengthValue = document.getElementById("firstLitter").value;
  if (lengthValue.length == 1) {
    let firstLitter = $("#firstLitter").val();
    getMeals(`${firstLitter}`);
  }
  $("#demo").show(500);
});

let detailsList = [];
async function getDetails(id) {
  let myRequest = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  x = await myRequest.json();
  detailsList = x.meals;
  displayDetails();
  $("#information").show(500);
  $("#demo").empty(500);
  $("#Allcategory").empty(500);
  $("#allIngredientHtml").empty(500);
  $("#allAreaHtml").empty(500);
}

function displayDetails() {
  var box = "";
  for (var i = 0; i < detailsList.length; i++) {
    box += `
              
               <div class="col-md-4 ">
               <div class="mx-auto>
            <div class="info-meals-item mx-auto text-white">
              <img class="w-100" src="${detailsList[i].strMealThumb}" alt="">
              <h2>${detailsList[i].strMeal}</h2>
            </div>
          </div>
          <div class="col-md-8 ">
            <div>
              <h3>instractions</h3>
              <p>${detailsList[i].strInstructions}</p>
              <p>area :<span>${detailsList[i].strArea} </span></p>
              <p>category : <span>${detailsList[i].strCategory}</span></p>
              <p>recipes : <span>${detailsList[i].strArea}</span></p>
            </div>
            <div class="row tabs justify-content-evenly">
              <div class="row g-3">
                <div class="col-lg-2 col-md-4 col-md-3 col-sm-12">
                  <button class="btn btn-info opacity-25">${detailsList[i].strMeasure1}
                  </button>
                </div>
                <div class="col-lg-2 col-md-4 col-md-3 col-sm-12">
                  <button class="btn btn-info opacity-25">${detailsList[i].strMeasure2}
                  </button>
                </div>
                <div class="col-lg-2 col-md-4 col-md-3 col-sm-12">
                  <button class="btn btn-info opacity-25">${detailsList[i].strMeasure3}</button>
                </div>
                <div class="col-lg-2 col-md-4 col-md-3 col-sm-12">
                  <button class="btn btn-info opacity-25">${detailsList[i].strMeasure4}</button>
                </div>
                <div class="col-lg-2 col-md-4 col-md-3 col-sm-12">
                  <button class="btn btn-info opacity-25">${detailsList[i].strMeasure5}</button>
                </div>
                <div class="col-lg-2 col-md-4 col-md-3 col-sm-12">
                  <button class="btn btn-info opacity-25">${detailsList[i].strMeasure6}</button>
                </div>
                <div class="col-lg-2 col-md-4 col-md-3 col-sm-12">
                  <button class="btn btn-info opacity-25">${detailsList[i].strMeasure7}</button>
                </div>
                <div class="col-lg-2 col-md-4 col-md-3 col-sm-12">
                  <button class="btn btn-info opacity-25">${detailsList[i].strMeasure8}</button>
                </div>
                <div class="col-lg-2 col-md-4 col-md-3 col-sm-12">
                  <button class="btn btn-info opacity-25">${detailsList[i].strMeasure9}</button>
                </div>
                <div class="col-lg-2 col-md-4 col-md-3 col-sm-12">
                  <button class="btn btn-info opacity-25">${detailsList[i].strMeasure10}</button>
                </div>

              </div>
            </div>
            <h3 class="py-3">Tags:</h3>
            <p class="btn btn-light">Soup</p>
            <div>
              <a class="btn btn-warning" href="##">Sourse</a>
              <a class="btn btn-danger" href="${detailsList[i].strYoutube}">Youtube</a>
            </div>
            </div>
           
            
              `;
  }
  document.getElementById("information").innerHTML = box;
}

let categoryList = [];
async function getCategory() {
  let my = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  myResponse = await my.json();
  categoryList = myResponse.categories;
  displayCategory();
  $("#Allcategory").show(500);
  $("#information").empty(500);
  //  $("#category").show(500)
}

function displayCategory() {
  let box = "";
  for (let i = 0; i < categoryList.length; i++) {
    box += `
         <div class="col-md-3 shadow">
         <div id="item" onclick="getAllCategorys('${
           categoryList[i].strCategory
         }')"  class="item " >
         <img class="w-100 "    src="${
           categoryList[i].strCategoryThumb
         }" alt="">
         <div class="inner-opacity text-center d-flex justify-content-center align-items-center flex-column ">
         <h2 class="text-black ">${categoryList[i].strCategory}</h2>
         <p  class="text-black ">${categoryList[i].strCategoryDescription.slice(
           0,
           50
         )}</p>
         </div>
         </div>
         </div>

         `;
  }
  document.getElementById("category").innerHTML = box;
}

$("#categories").click(function () {
  getCategory();
  $("#demo").empty(500);
  $("#category").empty(500);
  $("#information").empty(500);
  $("#areaHtml").empty(500);
  $("#Allcategory").empty(500);
  $("#allAreaHtml").empty(500);
  $("#IngredientHtml").empty(500);
  $("#allIngredientHtml").empty(500);
  $("#hide").fadeOut(500);
  $("#contact").hide(500);
});

let categoryAllList = [];
async function getAllCategorys(str) {
  let my = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${str}`
  );
  let myreq = await my.json();
  categoryAllList = myreq.meals;
  displayAllCategorys();
  $("#Allcategory").show(500);
  $("#category").empty(500);
  $("#information").empty(500);
  $("#IngredientHtml").empty(500);
  $("#allIngredientHtml").empty(500);
}

function displayAllCategorys() {
  var box = "";
  for (var i = 0; i < categoryAllList.length; i++) {
    box += `
                <div class="col-md-3">
                <div onclick="getDetails(${categoryAllList[i].idMeal})" class="item" >
                <img class="w-100 "    src="${categoryAllList[i].strMealThumb}" alt="">
                <div class="inner-opacity text-center d-flex justify-content-center align-items-center ">
                <h2 class="text-black">${categoryAllList[i].strMeal}</h2>
                </div>
                </div>
                </div>
              
                `;
  }
  document.getElementById("Allcategory").innerHTML = box;
}

let areaList = [];
async function getArea() {
  let my = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
  );
  let myreq = await my.json();
  areaList = myreq.meals;
  displayArea();
}

function displayArea() {
  var box = "";
  for (var i = 0; i < areaList.length; i++) {
    box += `
                 <div class="col-md-3 shadow ">
                 <div id="item" onclick="getAllArea('${areaList[i].strArea}')"   class=" text-center d-flex justify-content-center align-items-center flex-column p-4 " >
                 <i class="fa-solid fa-city fa-3x"></i>
                 <h2>${areaList[i].strArea}</h2>
                 </div>
                 </div>
              
                `;
  }
  document.getElementById("areaHtml").innerHTML = box;
}

$("#area").click(function () {
  getArea();
  $("#demo").empty(500);
  $("#category").empty(500);
  $("#information").empty(500);
  $("#areaHtml").empty(500);
  $("#Allcategory").empty(500);
  $("#allAreaHtml").empty(500);
  $("#IngredientHtml").empty(500);
  $("#allIngredientHtml").empty(500);
  $("#hide").fadeOut(500);
  $("#contact").hide(500);
});

let areaAllList = [];
async function getAllArea(mel) {
  let my = await fetch(
    ` https://www.themealdb.com/api/json/v1/1/filter.php?a=${mel}`
  );
  let myreq = await my.json();
  areaAllList = myreq.meals;
  //
  //
  $("#allAreaHtml").show(500);
  $("#areaHtml").empty(500);
  displayAllArea();
}

function displayAllArea() {
  var box = "";
  for (var i = 0; i < areaAllList.length; i++) {
    box += `
                <div class="col-md-3">
                <div onclick="getDetails('${areaAllList[i].idMeal}')"
                class="item" >
                <img class="w-100 "    src="${areaAllList[i].strMealThumb}" alt="">
                <div class="inner-opacity text-center d-flex justify-content-center align-items-center ">
                <h2 class="text-black">${areaAllList[i].strMeal}</h2>
                </div>
                </div>
                </div>
              
                `;
  }
  document.getElementById("allAreaHtml").innerHTML = box;
}

let ingraduentList = [];
async function getIngredient() {
  let my = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
  );
  let myreq = await my.json();
  ingraduentList = myreq.meals;
  displayIngredient();
  $("#demo").empty(500);
  $("#category").empty(500);
  $("#information").empty(500);
  $("#areaHtml").empty(500);
  $("#Allcategory").empty(500);
  $("#allAreaHtml").empty(500);
  $("#allIngredientHtml").empty(500);
}

function displayIngredient() {
  var box = "";
  for (var i = 0; i < 20; i++) {
    box += `
                     
      <div max-l class="col-md-3 shadow ">
      <div onclick="getAllIngredient('${
        ingraduentList[i].strIngredient
      }')" id="item" class=" text-center d-flex justify-content-center align-items-center flex-column">
      <i class="grey fa-solid fa-bowl-food fa-3x"></i>
      <h2>${ingraduentList[i].strIngredient}</h2>
      <p >${ingraduentList[i].strDescription.slice(0, 40)}</p>
      </div>
      </div>
                    
            `;
  }
  document.getElementById("IngredientHtml").innerHTML = box;
}
$("#Ingredients").click(function () {
  getIngredient();
  $("#demo").empty(500);
  $("#category").empty(500);
  $("#information").empty(500);
  $("#areaHtml").empty(500);
  $("#Allcategory").empty(500);
  $("#allAreaHtml").empty(500);
  $("#IngredientHtml").show(500);
  $("#hide").fadeOut(500);
  $("#contact").hide(500);
});

let ingraduentAllList = [];
async function getAllIngredient(ayhaga) {
  let my = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ayhaga}`
  );
  let myreq = await my.json();
  ingraduentAllList = myreq.meals;
  displayAllIngradiant();
  $("#IngredientHtml").empty(500);
}

function displayAllIngradiant() {
  var box = "";
  for (var i = 0; i < ingraduentAllList.length; i++) {
    box += `
                <div class="col-md-3">
                <div onclick="getDetails('${ingraduentAllList[i].idMeal}')" class="item" >
                <img class="w-100 "    src="${ingraduentAllList[i].strMealThumb}" alt="">
                <div class="inner-opacity text-center d-flex justify-content-center align-items-center ">
                <h2 class="text-black">${ingraduentAllList[i].strMeal}</h2>
                </div>
                </div>
                </div>
              
                `;
  }
  document.getElementById("allIngredientHtml").innerHTML = box;
}

function regexName() {
  let regexNameInput = /^[A-Z]{0,10}[a-z]{0,10}[ ]{0,10}$/;
  if (regexNameInput.test($("#nameInput").val()) == true) {
    $(".alert-name").addClass("d-none");
    $(".alert-name").removeClass("d-flex");
    document.getElementById("nameInput").classList.add("is-valid");
    document.getElementById("nameInput").classList.remove("is-invalid");
    return true;
  } else {
    $(".alert-name").addClass("d-flex");
    $(".alert-name").removeClass("d-none");
    document.getElementById("nameInput").classList.add("is-invalid");
    document.getElementById("nameInput").classList.remove("is-valid");
    return false;
  }
}

function regexEmail() {
  let regexEmailInput = /^[a-z]{3,10}[0-9]{0,5}@[a-z]{3,7}\.[a-z]{3}$/;
  if (regexEmailInput.test($("#emailInput").val()) == true) {
    $(".alert-email").addClass("d-none");
    $(".alert-email").removeClass("d-flex");
    document.getElementById("emailInput").classList.add("is-valid");
    document.getElementById("emailInput").classList.remove("is-invalid");
    return true;
  } else {
    $(".alert-email").addClass("d-flex");
    $(".alert-email").removeClass("d-none");
    document.getElementById("emailInput").classList.add("is-invalid");
    document.getElementById("emailInput").classList.remove("is-valid");
    return false;
  }
}
function regexphone() {
  let regexphoneInput = /^(011|012|015|010)[0-9]{8}$/;
  if (regexphoneInput.test($("#phoneInput").val()) == true) {
    $(".alert-phone").addClass("d-none");
    $(".alert-phone").removeClass("d-flex");
    document.getElementById("phoneInput").classList.add("is-valid");
    document.getElementById("phoneInput").classList.remove("is-invalid");
    return true;
  } else {
    $(".alert-phone").addClass("d-flex");
    $(".alert-phone").removeClass("d-none");
    document.getElementById("phoneInput").classList.add("is-invalid");
    document.getElementById("phoneInput").classList.remove("is-valid");
    return false;
  }
}
function regexage() {
  let regexAgeInput = /^[1-9][0-9]?$/;
  if (regexAgeInput.test($("#ageInput").val()) == true) {
    $(".alert-age").addClass("d-none");
    $(".alert-age").removeClass("d-flex");
    document.getElementById("ageInput").classList.add("is-valid");
    document.getElementById("ageInput").classList.remove("is-invalid");
    return true;
  } else {
    $(".alert-age").addClass("d-flex");
    $(".alert-age").removeClass("d-none");
    document.getElementById("ageInput").classList.add("is-invalid");
    document.getElementById("ageInput").classList.remove("is-valid");
    return false;
  }
}
function regexpassword() {
  let regexApasswordInput = /^\w{8,20}$/;
  if (regexApasswordInput.test($("#passwordInput").val()) == true) {
    $(".alert-password").addClass("d-none");
    $(".alert-password").removeClass("d-flex");
    document.getElementById("passwordInput").classList.add("is-valid");
    document.getElementById("passwordInput").classList.remove("is-invalid");
    return true;
  } else {
    $(".alert-password").addClass("d-flex");
    $(".alert-password").removeClass("d-none");
    document.getElementById("passwordInput").classList.add("is-invalid");
    document.getElementById("passwordInput").classList.remove("is-valid");
    return false;
  }
}
function regexrepassword() {
  if ($("#passwordInput").val() == $("#repasswordInput").val()) {
    $(".alert-repassword").addClass("d-none");
    $(".alert-repassword").removeClass("d-flex");
    document.getElementById("repasswordInput").classList.add("is-valid");
    document.getElementById("repasswordInput").classList.remove("is-invalid");
    return true;
  } else {
    $(".alert-repassword").addClass("d-flex");
    $(".alert-repassword").removeClass("d-none");
    document.getElementById("passwordInput").classList.add("is-invalid");
    document.getElementById("passwordInput").classList.remove("is-valid");
    return false;
  }
}

$("input").keyup(function () {
  regexName();
  regexEmail();
  regexphone();
  regexage();
  regexpassword();
  regexrepassword();
  if (
    regexName() &&
    regexEmail() &&
    regexphone() &&
    regexage() &&
    regexpassword() &&
    regexrepassword()
  ) {
    $(".dis").html(
      `<button class="text-center btn btn-outline-danger">Submit</button>`
    );
  } else {
    $(".dis").html(
      `<button disabled class="text-center btn btn-outline-danger">Submit</button>`
    );
  }
});
$("#contactUs").click(function () {
  $("#demo").empty(500);
  $("#category").empty(500);
  $("#information").empty(500);
  $("#areaHtml").empty(500);
  $("#Allcategory").empty(500);
  $("#allAreaHtml").empty(500);
  $("#IngredientHtml").show(500);
  $("#hide").fadeOut(500);
  $("#contact").show(500);
});

$(document).ready(function () {
  $(".spinner").fadeOut(500, function () {
    $("#reload").fadeOut(500);
  });
});
