// console.log("clairon");
// // document.getElementById("hash");
// console.log(document.getElementById("hash"));
console.log(document.getElementById("test"));


console.log(document.getElementById("link").id);

// console.log(document.getElementById("hash").innerHTML);
// document.getElementById("java").innerHTML="javascript is good";
// document.getElementById("p1").style["color"]="green";
// document.getElementById("p1").style["padding"]="50px";
// document.getElementById("java").style.fontSize="80px";

// // console.log(1+2)
// // console.log("C and P")

// //create new html tag
// let sum =20+40;
// let a=23;
// let b=41;
// let c=a +b;
// c=a+c;
// a=24+c;
// let hash = document.getElementById
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(sum);



// //create new element//
// const link2 = document.createElement("a");
// link2.innerHTML="Google";
// link2.href="www.google.com"
// document.querySelector(".anchol");
// let anchol= document.getElementsByClassName("anchol");
// console.log(typeof anchol);
// // anchol[0].innerHTML= link2;
// anchol[0].appendChild= link2;






const main= document.createElement("div");
main.id="main";


const test = document.createElement("h3");
test.id="test";
test.innerHTML="Hello world";

const p1 =document.createElement("p");
p1.id="p1";
p1.innerText="Today are learning practical javascript";

const hash= document.createElement("p");
hash.id="hash";
hash.innerHTML="#make progress";

const java= document.createElement("h1");
java.id="java";
java.innerHTML="javascript is powerful";

const link= document.createElement("a");
link.id="link";
link.innerhtml="instagram";
link.href="about.html";

main.appendChild(test);
main.appendChild(p1);
// main.appendChild(java);
main.appendChild(hash);

document.body.appendChild(main)

let black = document.getElementById("black");
let today= new Date();
black.innerHTML= today;

let birthdate = new Date("2003-09-28");
black.innerHTML=birthdate ;

let day = birthdate.getDay();
black.innerHTML=day;

let month =birthdate.getMonth();
black.innerHTML=month;


let website=window.location.href;
let adress = document.getElementById("adress");
adress.innerHTML= website;

website=window.location.protocol;
adress = document.getElementById("adress");
adress.innerHTML=website;

website=window.location.hostname;
adress = document.getElementById("adress");
adress.innerHTML=website;

let history=window.history.length;
let back= document.getElementById("back");
back.innerHTML= history;

// window.alert("hey love");

// window.confirm("hello");
// window.location.href="https://www.instagram.com";

// window.location.replace("https://www.twitter.com");


