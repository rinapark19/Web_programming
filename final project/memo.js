var input1 = document.getElementById("input1"); // get each input tag
var input2 = document.getElementById("input2");
var input3 = document.getElementById("input3");
var input4 = document.getElementById("input4");

var okBtn1 = document.getElementById("okBtn1"); // get each ok button
var okBtn2 = document.getElementById("okBtn2");
var okBtn3 = document.getElementById("okBtn3");
var okBtn4 = document.getElementById("okBtn4");

var h1 = document.getElementById("h1"); // get each memo h tag
var h2 = document.getElementById("h2");
var h3 = document.getElementById("h3");
var h4 = document.getElementById("h4");

function write1() { // all write functions operate similarly
  h1.innerText = input1.value; // put input
  sessionStorage.memo1 = input1.value; // save input in session storage
}

function write2() {
  h2.innerText = input2.value;
  sessionStorage.memo2 = input2.value;
}

function write3() {
  h3.innerText = input3.value;
  sessionStorage.memo3 = input3.value;
}

function write4() {
  h4.innerText = input4.value;
  sessionStorage.memo4 = input4.value;
}

window.onload = function() { // update the memo contents
  if(sessionStorage.memo1) {
    h1.innerText = sessionStorage.memo1;
    h2.innerText = sessionStorage.memo2;
    h3.innerText = sessionStorage.memo3;
    h4.innerText = sessionStorage.memo4;
  }
}

okBtn1.addEventListener("click", write1); // add functions to ok buttons 
okBtn2.addEventListener("click", write2);
okBtn3.addEventListener("click", write3);
okBtn4.addEventListener("click", write4);

var music = document.getElementById("music"); // get music button
var getLink = document.getElementById("getLink"); // link container
var youtube = document.getElementById("link"); // link input tag
var okBtnn = document.getElementById("okBtnn"); // okay button
var area = document.getElementById("newArea"); // new html area to insert html
var container = document.getElementById("container"); // memo container

function clickMusic() {
  getLink.style.display = "block"; // show link container
  container.style.marginTop = "100px"; // adjust location 
}

function clickLink() {
  var musicLink = youtube.value; // get input
  area.innerHTML = musicLink; // add youtube link
  getLink.style.display = "none"; // hide link container
  container.style.marginTop = "100px"; // adjust location
}

music.addEventListener("click", clickMusic); // add functions to buttons
okBtnn.addEventListener("click", clickLink);
