var date = document.getElementById("date");
var content = document.getElementById("content");
var okBtn = document.getElementById("okBtn");

var h1 = document.getElementById("h1");
var h2 = document.getElementById("h2");
var h3 = document.getElementById("h3");
var h4 = document.getElementById("h4");
var h5 = document.getElementById("h5");
var h6 = document.getElementById("h6");
var h7 = document.getElementById("h7");

var inputDate = "";
var inputContent = "";

var weekly2 = [{date: "0", content: "0"}];
if(sessionStorage.weekly2) {
  weekly2 = JSON.parse(sessionStorage.weekly2);
}

function clickOk() {
  inputDate = date.value;
  inputContent = content.value;
  if(inputDate == "MON") {
    h1.innerText = inputContent;
    weekly2.push({date: inputDate, content: inputContent});
  }
  if(inputDate == "TUE") {
    h2.innerText = inputContent;
    weekly2.push({date: inputDate, content: inputContent});
  }
  if(inputDate == "WED") {
    h3.innerText = inputContent;
    weekly2.push({date: inputDate, content: inputContent});
  }
  if(inputDate == "THU") {
    h4.innerText = inputContent;
    weekly2.push({date: inputDate, content: inputContent});
  }
  if(inputDate == "FRI") {
    h5.innerText = inputContent;
    weekly2.push({date: inputDate, content: inputContent});
  }
  if(inputDate == "SAT") {
    h6.innerText = inputContent;
    weekly2.push({date: inputDate, content: inputContent});
  }
  if(inputDate == "SUN") {
    h7.innerText = inputContent;
    weekly2.push({date: inputDate, content: inputContent});
  }
  sessionStorage.weekly2 = JSON.stringify(weekly2);
}

okBtn.addEventListener("click", clickOk);

window.onload = function() {
  if(sessionStorage.weekly2) {
    var weekly2 = JSON.parse(sessionStorage.weekly2);
    for(var i=0; i < weekly2.length; i++) {
      var date1 = weekly2[i].date;
      var content1 = weekly2[i].content;
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

var music = document.getElementById("music");
var getLink = document.getElementById("getLink");
var youtube = document.getElementById("link");
var okBtn1 = document.getElementById("okBtn1");
var area = document.getElementById("newArea");
var weeklyContainer = document.getElementById("weekly");

function clickMusic() {
  getLink.style.display = "block";
}

function clickLink() {
  var musicLink = youtube.value;
  area.innerHTML = musicLink;
  getLink.style.display = "none";
  weeklyContainer.style.marginTop = "-4px";
}

music.addEventListener("click", clickMusic);
okBtn1.addEventListener("click", clickLink);
