// javascript file for routine.jsp -> for showing youtube
var music = document.getElementById("music"); // music button
var getLink = document.getElementById("getLink"); // link container
var youtube = document.getElementById("link"); // link input
var okBtn1 = document.getElementById("okBtn1"); // okay button
var area = document.getElementById("newArea"); // new area to insert html code

function clickMusic() {
  getLink.style.display = "block"; // show the link container
}

function clickLink() {
  var musicLink = youtube.value; // get the value
  area.innerHTML = musicLink; // add html code
  getLink.style.display = "none"; // hide the link container
}

music.addEventListener("click", clickMusic); // add each function to button
okBtn1.addEventListener("click", clickLink);