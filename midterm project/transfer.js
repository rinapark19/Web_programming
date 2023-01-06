var input = "";
var link1 = "main.html";
var link2 = "transfer-2.html";

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

var fromValue = document.getElementById("from");
var toValue = document.getElementById("to");
sessionStorage.fromValue = fromValue.options[fromValue.selectedIndex + 1].text; // save each account number in session storage
sessionStorage.toValue = toValue.options[toValue.selectedIndex + 1].text;

function click1() { // when click each number button
  input += "1"; // add to input
  display.value = input; // show current input
}

function click2() {
  input += "2";
  display.value = input;
}

function click3() {
  input += "3";
  display.value = input;
}

function click4() {
  input += "4";
  display.value = input;
}

function click5() {
  input += "5";
  display.value = input;
}

function click6() {
  input += "6";
  display.value = input;
}

function click7() {
  input += "7";
  display.value = input;
}

function click8() {
  input += "2";
  display.value = input;
}

function click8() {
  input += "8";
  display.value = input;
}

function click9() {
  input += "9";
  display.value = input;
}

function click0() {
  input += "0";
  display.value = input;
}

function clickDot() { // if click dot button
  input += "." // add dot to input
  display.value = input; // show current value
  dotBtn.style.backgroundColor='grey'; // change button color
  dotBtn.disabled = true; // make the button disabled
}

function clickDel() { // if click delete buttpn
  input = input.substr(0, input.length-1); //delete one character
  display.value = input; // show current value
}

function clickEnter() { // if click enter
  location.href = link2; // go to next page
  sessionStorage.setItem("transfer", input); // save the transfer value in session storage
}

function clickBack() { // if click back
  location.href = link1; // back to previous page
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
returnBtn.addEventListener("click", clickBack);
