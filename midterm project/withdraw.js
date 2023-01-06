var btn20 = document.getElementById("btn20");
var btn40 = document.getElementById("btn40");
var btn60 = document.getElementById("btn60");
var btn80 = document.getElementById("btn80");
var up100 = document.getElementById("up100");
var up20 = document.getElementById("up20");
var down20 = document.getElementById("down20");
var down100 = document.getElementById("down100");
var btn100 = document.getElementById("btn100");
var btn200 = document.getElementById("btn200");
var btn300 = document.getElementById("btn300");
var enterBtn = document.getElementById("enterBtn");
var backBtn = document.getElementById("backBtn");

var link1 = "main.html";
var link2 = "withdraw-2.html";
var input = 0;
var display = document.getElementById("input");

function clickup20() { // if click each number of up and down button
  input = Number(input) + Number(20); // calculate input
  display.value = input; // show current input
}

function clickdown20() {
  input = Number(input) - Number(20);
  display.value = input;
}

function clickup100() {
  input = Number(input) + Number(100);
  display.value = input;
}

function clickdown100() {
  input = Number(input) - Number(100);
  display.value = input;
}

function click20() { // if click each number button
  sessionStorage.setItem("money", 20); // save the withdraw value in session storage
  location.href = link2; // go to next page
}

function click40() {
  sessionStorage.money = 40;
  location.href = link2;
}

function click60() {
  sessionStorage.money = 60;
  location.href = link2;
}

function click80() {
  sessionStorage.money = 80;
  location.href = link2;
}

function click100() {
  sessionStorage.money = 100;
  location.href = link2;
}

function click200() {
  sessionStorage.money = 200;
  location.href = link2;
}

function click300() {
  sessionStorage.money = 300;
  location.href = link2;
}

function clickEnter() { // if click enter
  sessionStorage.money = input; // save the withdraw amount in the session storage
  location.href = link2; // go to next page
}

function clickBack() { // if click back
  location.href = link1; // go to previous page
}

up20.addEventListener("click", clickup20);
down20.addEventListener("click", clickdown20);
up100.addEventListener("click", clickup100);
down100.addEventListener("click", clickdown100);
btn20.addEventListener("click", click20);
btn40.addEventListener("click", click40);
btn60.addEventListener("click", click60);
btn80.addEventListener("click", click80);
btn100.addEventListener("click", click100);
btn200.addEventListener("click", click200);
btn300.addEventListener("click", click300);
enterBtn.addEventListener("click", clickEnter);
backBtn.addEventListener("click", clickBack);
