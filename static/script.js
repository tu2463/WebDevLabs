// with DOM
function greetingFunc(){
  var d = new Date();
  var h = d.getHours();
  var E = document.getElementById("greeting");
  if (h >= 5 && h < 12) {
    E.innerHTML = "Good morning 👋 My name is Cheyu";
  } else if (h>=12 && h<18) {
    E.innerHTML = "Good afternoon 🌞 My name is Cheyu";
  } else if (h>=18 && h<20) {
    E.innerHTML = "Good evening 🌆 My name is Cheyu";
  } else {
    E.innerHTML = "Good night 🌛 My name is Cheyu";
  }
}

var L = window.location.href;
if (L.includes("index.html")){
  greetingFunc();
}
// if (L.includes("fun.html")){
//   initMap();
// }

function addYear() {
var d = new Date();
var y = d.getFullYear();
var E = document.getElementById("copyYear");
E.innerHTML += y;
}

// function showList() {
//   document.getElementById("FavList").style.display = "block";
//   document.getElementById("SeeMoreBTN").style.display = "none";
// }

$("#readLess").click(function(){
$("#longIntro").hide();
$("#readLess").hide();  
$("#readMore").show();    
});

$("#readMore").click(function(){
$("#longIntro").show();
$("#readLess").show();
$("#readMore").hide();    
});


function validate() {
var userName = document.getElementById("UserName");
var userEmail = document.getElementById("UserEmail");
var userText = document.getElementById("Usertext");
var msg = document.getElementById("ValidateMsg");

// checkValidity() is built-in
if (!userName.checkValidity() || !userEmail.checkValidity() || !userText.checkValidity()) {
    msg.innerHTML = "Error-Please fill out the form correctly so I can get back to you :)";
}
}

// // Initialize and add the map
// let map;

// async function initMap() {
// // The location of CMU
// const position = { lat: 40.44350885066819, lng:-79.95112182879774 };

// // Request needed libraries.
// //@ts-ignore
// const { Map } = await google.maps.importLibrary("maps");
// const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

// // The map, centered at CMU
// map = new Map(document.getElementById("map"), {
//  zoom: 12,
//  center: position,
//  mapId: "DEMO_MAP_ID",
// });

// // The marker, positioned at CMU
// const marker = new AdvancedMarkerElement({
//  map: map,
//  position: position,
//  title: "CMU",
// });
// }

function activeNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



/*

// step 4
var x = 5;
var y = 7;
var z = x + y;
console.log(z);
var A = 'Hello';
var B = ' world!';
var C = A + B;
console.log(C);

// step 5
function SumNPrint(x1, x2) {
    var x3 = x1 + x2;
    console.log(x3);
}
SumNPrint(x,y);
SumNPrint(A,B);

// step 6
if (C.length > z) {
    console.log(C);
} else if (z > C.length) {
    console.log(z);
} else {
    console.log("good job!");
}

// step 7
var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];
function findTheBanana(array) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element === "Banana") {
      alert("found the Banana in " + [index])
    }
  }}

findTheBanana(L1);
findTheBanana(L2);

// step 8
L1.forEach(element => {
  if (element === "Banana") {
    alert("We found a banana in the first array")
  }
});

L2.forEach(element => {
  if (element === "Banana") {
    alert("We found a banana in the second array")
  }
});

// step 9
function greetingFunc(){
  var d = new Date();
  var h = d.getHours();
  if (h >= 5 && h < 12) {
    console.log("Good morning!");
  } else if (h>=12 && h<18) {
    console.log("Good afternoon!");
  } else if (h>=18 && h<20) {
    console.log("Good evening!");
  } else if (h>=20 && h<24 ||  h<5) {
    console.log("Good night!");
  }
}
greetingFunc()

*/
