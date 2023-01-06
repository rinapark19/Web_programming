var accountNumber = 1234;
var link = "main.html";
var link2 = "login.html";
var input = "";
var chance = 5;

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
var enterBtn = document.getElementById('enterBtn');
var delBtn = document.getElementById('delBtn');
var returnBtn = document.getElementById("return");

var display = document.getElementById('display');

function click1() { // when click each number button
  input += "1"; // add each number
  display.value = input; // show current input value
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

function clickEnter() {  // when click enter
  if(input != accountNumber) // if password is wrong
  {
    chance = chance - 1; // decrease chance
    if(chance == 0) // if there are no left chance -> go to previous page
    {
      location.href = link2;
    }
    alert("Incorrect PIN, You have " + chance + " attemps left"); // show alert
  }
  else
  {
    location.href = link; // else-> go to main page
  }
}

function clickDel() { // when click delete button
  input = input.substr(0, input.length-1); // delete one character
  display.value = input; // show current value
}

function clickReturn() { // if click return
  location.href = link2; // back to previous page
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
enterBtn.addEventListener('click', clickEnter);
delBtn.addEventListener('click', clickDel);
returnBtn.addEventListener("click", clickReturn);
