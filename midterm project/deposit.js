var link = "main.html";
var link2 = "deposit-1.html";
var input = "";

var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');
var btn6 = document.getElementById('btn6');
var btn7 = document.getElementById('btn7');
var btn8 = document.getElementById('btn8');
var btn9 = document.getElementById('btn9');
var btn0 = document.getElementById('btn0');
var dotBtn = document.getElementById('dotBtn');
var delBtn = document.getElementById('delBtn');
var enterBtn = document.getElementById('enterBtn');
var returnBtn = document.getElementById("return");

var display = document.getElementById('display');

function click1() { // when click number button, get the number and show
  input += "1";
  display.value = input;
  console.log(input);
}

function click2() {
  input += "2";
  display.value = input;
  console.log(input);
}

function click3() {
  input += "3";
  display.value = input;
  console.log(input);
}

function click4() {
  input += "4";
  display.value = input;
  console.log(input);
}

function click5() {
  input += "5";
  display.value = input;
  console.log(input);
}

function click6() {
  input += "6";
  display.value = input;
  console.log(input);
}

function click7() {
  input += "7";
  display.value = input;
  console.log(input);
}

function click8() {
  input += "2";
  display.value = input;
  console.log(input);
}

function click8() {
  input += "8";
  display.value = input;
  console.log(input);
}

function click9() {
  input += "9";
  display.value = input;
  console.log(input);
}

function click0() {
  input += "0";
  display.value = input;
  console.log(input);
}

function clickDot() { // if click dot button,
  input += "." // add dot to value
  display.value = input; // showing current value
  dotBtn.style.backgroundColor='grey'; // make background color grey
  dotBtn.disabled = true; // make button disabled
}

function clickDel() { // when click del button
  input = input.substr(0, input.length-1); // delete one character
  display.value = input; // showing current value
}

function clickEnter() { // when click enter button
  location.href = link2; // go to next page(deposit-1)
  sessionStorage.setItem("value", input); // save current value to session storage
}

function clickReturn() { // go to main page
  location.href = link;
}

btn1.addEventListener('click', click1);
btn2.addEventListener('click', click2);
btn3.addEventListener('click', click3);
btn4.addEventListener('click', click4);
btn5.addEventListener('click', click5);
btn6.addEventListener('click', click6);
btn7.addEventListener('click', click7);
btn8.addEventListener('click', click8);
btn9.addEventListener('click', click9);
btn0.addEventListener('click', click0);
dotBtn.addEventListener('click', clickDot);
delBtn.addEventListener('click', clickDel);
enterBtn.addEventListener('click', clickEnter);
returnBtn.addEventListener("click", clickReturn);
