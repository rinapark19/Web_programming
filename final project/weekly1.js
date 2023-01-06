// javascript file for weekly1. html 
// all functionalities are the same with other weekly files

var date = document.getElementById("date"); // date input
var content = document.getElementById("content"); // content input
var okBtn = document.getElementById("okBtn"); // ok button

var h1 = document.getElementById("h1"); // each h tag for 7 days
var h2 = document.getElementById("h2");
var h3 = document.getElementById("h3");
var h4 = document.getElementById("h4");
var h5 = document.getElementById("h5");
var h6 = document.getElementById("h6");
var h7 = document.getElementById("h7");

var inputDate = ""; // input value
var inputContent = "";

var weekly1 = [{date: "0", content: "0"}]; // list to save contents
if(sessionStorage.weekly1) {
  weekly1 = JSON.parse(sessionStorage.weekly1); // update contents
}

function clickOk() {
  inputDate = date.value; // get input value
  inputContent = content.value;
  if(inputDate == "MON") {
    h1.innerText = inputContent; // update h tag
    weekly1.push({date: inputDate, content: inputContent}); // add contents to list
  }
  if(inputDate == "TUE") {
    h2.innerText = inputContent;
    weekly1.push({date: inputDate, content: inputContent});
  }
  if(inputDate == "WED") {
    h3.innerText = inputContent;
    weekly1.push({date: inputDate, content: inputContent});
  }
  if(inputDate == "THU") {
    h4.innerText = inputContent;
    weekly1.push({date: inputDate, content: inputContent});
  }
  if(inputDate == "FRI") {
    h5.innerText = inputContent;
    weekly1.push({date: inputDate, content: inputContent});
  }
  if(inputDate == "SAT") {
    h6.innerText = inputContent;
    weekly1.push({date: inputDate, content: inputContent});
  }
  if(inputDate == "SUN") {
    h7.innerText = inputContent;
    weekly1.push({date: inputDate, content: inputContent});
  }
  sessionStorage.weekly1 = JSON.stringify(weekly1); // save list
}

window.onload = function() {
  if(sessionStorage.weekly1) { // update contents
    var weekly1 = JSON.parse(sessionStorage.weekly1);
    for(var i=0; i < weekly1.length; i++) {
      var date1 = weekly1[i].date;
      var content1 = weekly1[i].content;
      if(date1 == "MON") h1.innerText = content1;
      if(date1 == "TUE") h2.innerText = content1;
      if(date1 == "WED") h3.innerText = content1;
      if(date1 == "THU") h4.innerText = content1;
      if(date1 == "FRI") h5.innerText = content1;
      if(date1 == "SAT") h6.innerText = content1;
      if(date1 == "SUN") h7.innerText = content1;
    }
  }
}

var music = document.getElementById("music"); // music button
var getLink = document.getElementById("getLink"); // link container
var youtube = document.getElementById("link"); // link input
var okBtn1 = document.getElementById("okBtn1"); // ok button
var area = document.getElementById("newArea"); // new area to add html code
var weeklyContainer = document.getElementById("weekly");

function clickMusic() {
  getLink.style.display = "block"; // show link container
}

function clickLink() {
  var musicLink = youtube.value; // get input
  area.innerHTML = musicLink; // add html code
  getLink.style.display = "none"; // hide link container
  weeklyContainer.style.marginTop = "-4px"; // adjust location
}

music.addEventListener("click", clickMusic); // add function to buttons
okBtn1.addEventListener("click", clickLink);
okBtn.addEventListener("click", clickOk);