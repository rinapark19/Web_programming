// javascript file for daily.html -> get draw input from user, and save daily diary input

canvas = document.getElementById("canvas"); // get canvas from html
ctx = canvas.getContext("2d"); //get canvas context
erase = document.getElementById("erase"); // earse button 

canvas.width = 800; // setting canvas size
canvas.height = 600;

ctx.strokeStyle = "black"; // setting draw stroke style
ctx.lineWidth = 2.5;

let painting = false;

function startPainting() { 
  painting = true;
}

function stopPainting() {
  painting = false;
}

function onMouseMove(event) { // when user move mouse in the canvas
  const x = event.offsetX; // get coordinate
  const y = event.offsetY;
  if(!painting) { // start drawing
    ctx.beginPath();
    ctx.moveTo(x, y);
  }
  else { // continue drawing
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

if(canvas) { // add functions to canvas
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  erase.addEventListener("click", () => ctx.clearRect(0, 0, 800, 600));
}

var content = document.getElementById("content"); // user input
var okBtn = document.getElementById("okBtn"); // okay button
var h2 = document.getElementById("diary"); // 
var inputContainer = document.getElementById("inputContainer");

var data = "";
if(sessionStorage.data) { // if user already wrote something -> update
  data = sessionStorage.data;
}

function clickOk() { // if user click ok button -> add new content
  data = data + "\n" + content.value;
  sessionStorage.data = data;
  h2.innerText = data;
}

window.onload = function() { // update diary content 
  if(sessionStorage.data) {
    var data = sessionStorage.data;
    h2.innerText = data;
  }
}

okBtn.addEventListener("click", clickOk); //  add function to button 

var music = document.getElementById("music"); // music button
var getLink = document.getElementById("getLink"); // link input container
var youtube = document.getElementById("link"); // input tag that get youtube link
var okBtn1 = document.getElementById("okBtn1"); 
var area = document.getElementById("newArea"); // new area that youtube html code will be inserted
var container = document.getElementById("container");

function clickMusic() { // if click music button
  getLink.style.display = "block"; // show link input container
  container.style.marginTop = "-70px"; // set the location properly
}

function clickLink() { // if click ok button
  var musicLink = youtube.value; // get input
  area.innerHTML = musicLink; // add the html
  getLink.style.display = "none"; // hide link container
  container.style.marginTop = "-100px"; // set the location properly
}

music.addEventListener("click", clickMusic); // add functions to buttons
okBtn1.addEventListener("click", clickLink);
