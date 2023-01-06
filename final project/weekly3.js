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

var weekly3 = [{date: "0", content: "0"}];
if(sessionStorage.weekly3) {
  weekly3 = JSON.parse(sessionStorage.weekly3);
}

function clickOk() {
  inputDate = date.value;
  inputContent = content.value;
  if(inputDate == "MON") {
    h1.innerText = inputContent;
    weekly3.push({date: inputDate, content: inputContent});
  }
  if(inputDate == "TUE") {
    h2.innerText = inputContent;
    weekly3.push({date: inputDate, content: inputContent});
  }
  if(inputDate == "WED") {
    h3.innerText = inputContent;
    weekly3.push({date: inputDate, content: inputContent});
  }
  if(inputDate == "THU") {
    h4.innerText = inputContent;
    weekly3.push({date: inputDate, content: inputContent});
  }
  if(inputDate == "FRI") {
    h5.innerText = inputContent;
    weekly3.push({date: inputDate, content: inputContent});
  }
  if(inputDate == "SAT") {
    h6.innerText = inputContent;
    weekly3.push({date: inputDate, content: inputContent});
  }
  if(inputDate == "SUN") {
    h7.innerText = inputContent;
    weekly3.push({date: inputDate, content: inputContent});
  }
  sessionStorage.weekly3 = JSON.stringify(weekly3);
}

okBtn.addEventListener("click", clickOk);

window.onload = function() {
  if(sessionStorage.weekly3) {
    var weekly3 = JSON.parse(sessionStorage.weekly3);
    for(var i=0; i < weekly3.length; i++) {
      var date1 = weekly3[i].date;
      var content1 = weekly3[i].content;
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
