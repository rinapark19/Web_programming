// javascript file for change.html -> change password

var input = ""; // get input from user
var pw = ""; // new password
var cnt = 0; // counter

var btn1 = document.getElementById('btn1'); // get each number buttons from html
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');
var btn6 = document.getElementById('btn6');
var btn7 = document.getElementById('btn7');
var btn8 = document.getElementById('btn8');
var btn9 = document.getElementById('btn9');
var btn0 = document.getElementById('btn0');

var dot1 = document.getElementById("dot1"); // get each dots from html 
var dot2 = document.getElementById("dot2");
var dot3 = document.getElementById("dot3");
var dot4 = document.getElementById("dot4");

function click1() { // when click the each number button (all functionalities are the same with other number funcitons)
  input += "1"; // add number to input value
  cnt++;

  if(cnt == 1) { // change dot color
    dot1.style.background = "#0D4C92";
  }
  if(cnt == 2) {
    dot2.style.background = "#0D4C92";
  }
  if(cnt == 3) {
    dot3.style.background = "#0D4C92";
  }
  if(cnt == 4) {
    dot4.style.background = "#0D4C92";
    pw = input;
    sessionStorage.pw = pw; // save new password -> go back to login page
    setTimeout(function() {
      location.href = "index.jsp";
    }, 2000);
  }
}

function click2() { // when click the each number button
  input += "2"; // add number to input value
  cnt++;

  if(cnt == 1) {
    dot1.style.background = "#0D4C92";
  }
  if(cnt == 2) {
    dot2.style.background = "#0D4C92";
  }
  if(cnt == 3) {
    dot3.style.background = "#0D4C92";
  }
  if(cnt == 4) {
    dot4.style.background = "#0D4C92";
    pw = input;
    sessionStorage.pw = pw;
    setTimeout(function() {
      location.href = "index.jsp";
    }, 2000);
  }
}

function click3() { // when click the each number button
  input += "3"; // add number to input value
  cnt++;

  if(cnt == 1) {
    dot1.style.background = "#0D4C92";
  }
  if(cnt == 2) {
    dot2.style.background = "#0D4C92";
  }
  if(cnt == 3) {
    dot3.style.background = "#0D4C92";
  }
  if(cnt == 4) {
    dot4.style.background = "#0D4C92";
    pw = input;
    sessionStorage.pw = pw;
    setTimeout(function() {
      location.href = "index.jsp";
    }, 2000);
  }
}


function click4() { // when click the each number button
  input += "4"; // add number to input value
  cnt++;

  if(cnt == 1) {
    dot1.style.background = "#0D4C92";
  }
  if(cnt == 2) {
    dot2.style.background = "#0D4C92";
  }
  if(cnt == 3) {
    dot3.style.background = "#0D4C92";
  }
  if(cnt == 4) {
    dot4.style.background = "#0D4C92";
    pw = input;
    sessionStorage.pw = pw;
    setTimeout(function() {
      location.href = "index.jsp";
    }, 2000);
  }
}

function click5() { // when click the each number button
  input += "5"; // add number to input value
  cnt++;

  if(cnt == 1) {
    dot1.style.background = "#0D4C92";
  }
  if(cnt == 2) {
    dot2.style.background = "#0D4C92";
  }
  if(cnt == 3) {
    dot3.style.background = "#0D4C92";
  }
  if(cnt == 4) {
    dot4.style.background = "#0D4C92";
    pw = input;
    sessionStorage.pw = pw;
    setTimeout(function() {
      location.href = "index.jsp";
    }, 2000);
  }
}

function click6() { // when click the each number button
  input += "6"; // add number to input value
  cnt++;

  if(cnt == 1) {
    dot1.style.background = "#0D4C92";
  }
  if(cnt == 2) {
    dot2.style.background = "#0D4C92";
  }
  if(cnt == 3) {
    dot3.style.background = "#0D4C92";
  }
  if(cnt == 4) {
    dot4.style.background = "#0D4C92";
    pw = input;
    sessionStorage.pw = pw;
    setTimeout(function() {
      location.href = "index.jsp";
    }, 2000);
  }
}

function click7() { // when click the each number button
  input += "7"; // add number to input value
  cnt++;

  if(cnt == 1) {
    dot1.style.background = "#0D4C92";
  }
  if(cnt == 2) {
    dot2.style.background = "#0D4C92";
  }
  if(cnt == 3) {
    dot3.style.background = "#0D4C92";
  }
  if(cnt == 4) {
    dot4.style.background = "#0D4C92";
    pw = input;
    sessionStorage.pw = pw;
    setTimeout(function() {
      location.href = "index.jsp";
    }, 2000);
  }
}

function click8() { // when click the each number button
  input += "8"; // add number to input value
  cnt++;

  if(cnt == 1) {
    dot1.style.background = "#0D4C92";
  }
  if(cnt == 2) {
    dot2.style.background = "#0D4C92";
  }
  if(cnt == 3) {
    dot3.style.background = "#0D4C92";
  }
  if(cnt == 4) {
    dot4.style.background = "#0D4C92";
    pw = input;
    sessionStorage.pw = pw;
    setTimeout(function() {
      location.href = "index.jsp";
    }, 2000);
  }
}

function click9() { // when click the each number button
  input += "9"; // add number to input value
  cnt++;

  if(cnt == 1) {
    dot1.style.background = "#0D4C92";
  }
  if(cnt == 2) {
    dot2.style.background = "#0D4C92";
  }
  if(cnt == 3) {
    dot3.style.background = "#0D4C92";
  }
  if(cnt == 4) {
    dot4.style.background = "#0D4C92";
    pw = input;
    sessionStorage.pw = pw;
    setTimeout(function() {
      location.href = "index.jsp";
    }, 2000);
  }
}

function click0() { // when click the each number button
  input += "0"; // add number to input value
  cnt++;

  if(cnt == 1) {
    dot1.style.background = "#0D4C92";
  }
  if(cnt == 2) {
    dot2.style.background = "#0D4C92";
  }
  if(cnt == 3) {
    dot3.style.background = "#0D4C92";
  }
  if(cnt == 4) {
    dot4.style.background = "#0D4C92";
    pw = input;
    sessionStorage.pw = pw;
    setTimeout(function() {
      location.href = "index.jsp";
    }, 2000);
  }
}

btn1.addEventListener('click', click1); // add each functions to buttons
btn2.addEventListener('click', click2);
btn3.addEventListener('click', click3);
btn4.addEventListener('click', click4);
btn5.addEventListener('click', click5);
btn6.addEventListener('click', click6);
btn7.addEventListener('click', click7);
btn8.addEventListener('click', click8);
btn9.addEventListener('click', click9);
btn0.addEventListener('click', click0);
