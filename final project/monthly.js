var date = document.getElementById("date"); // date input tag
var content = document.getElementById("content"); // content input tag
var okBtn = document.getElementById("okBtn"); // ok button 

var h1 = document.getElementById("h1"); // each area for all 30 days
var h2 = document.getElementById("h2");
var h3 = document.getElementById("h3");
var h4 = document.getElementById("h4");
var h5 = document.getElementById("h5");
var h6 = document.getElementById("h6");
var h7 = document.getElementById("h7");
var h8 = document.getElementById("h8");
var h9 = document.getElementById("h9");
var h10 = document.getElementById("h10");
var h11 = document.getElementById("h11");
var h12 = document.getElementById("h12");
var h13 = document.getElementById("h13");
var h14 = document.getElementById("h14");
var h15 = document.getElementById("h15");
var h16 = document.getElementById("h16");
var h17 = document.getElementById("h17");
var h18 = document.getElementById("h18");
var h19 = document.getElementById("h19");
var h20 = document.getElementById("h20");
var h21 = document.getElementById("h21");
var h22 = document.getElementById("h22");
var h23 = document.getElementById("h23");
var h24 = document.getElementById("h24");
var h25 = document.getElementById("h25");
var h26 = document.getElementById("h26");
var h27 = document.getElementById("h27");
var h28 = document.getElementById("h28");
var h29 = document.getElementById("h29");
var h30 = document.getElementById("h30");

var inputDate = ""; // input values
var inputContent = "";

var monthly = [{date: "0", content: "0"}]; // list that save schedule contents

if(sessionStorage.monthly) { // update list
  monthly = JSON.parse(sessionStorage.monthly);
}

function clickOk() {
  inputDate = date.value; // get input values
  inputContent = content.value;

  if(inputDate == 1) {
    h1.innerText = inputContent; // update h tag
    monthly.push({date: inputDate, content: inputContent}); // add contents to the list
  }

  if(inputDate == 2) {
    h2.innerText = inputContent;
    monthly.push({date: inputDate, content: inputContent});
  }

  if(inputDate == 3) {
    h3.innerText = inputContent;
    monthly.push({date: inputDate, content: inputContent});
  }

  if(inputDate == 4) {
    h4.innerText = inputContent;
    monthly.push({date: inputDate, content: inputContent});
  }

  if(inputDate == 5) {
    h5.innerText = inputContent;
    monthly.push({date: inputDate, content: inputContent});
  }

  if(inputDate == 6) {
    h6.innerText = inputContent;
    monthly.push({date: inputDate, content: inputContent});
  }

  if(inputDate == 7) {
    h7.innerText = inputContent;
    monthly.push({date: inputDate, content: inputContent});
  }

  if(inputDate == 8) {
    h8.innerText = inputContent;
    monthly.push({date: inputDate, content: inputContent});
  }

  if(inputDate == 9) {
    h9.innerText = inputContent;
    monthly.push({date: inputDate, content: inputContent});
  }

  if(inputDate == 10) {
    h10.innerText = inputContent;
    monthly.push({date: inputDate, content: inputContent});
  }

  if(inputDate == 11) {
    h11.innerText = inputContent;
    monthly.push({date: inputDate, content: inputContent});
  }

  if(inputDate == 12) {
    h12.innerText = inputContent;
    monthly.push({date: inputDate, content: inputContent});
  }

  if(inputDate == 13) {
    h13.innerText = inputContent;
    monthly.push({date: inputDate, content: inputContent});
  }

  if(inputDate == 14) {
    h14.innerText = inputContent;
    monthly.push({date: inputDate, content: inputContent});
  }

  if(inputDate == 15) {
    h15.innerText = inputContent;
    monthly.push({date: inputDate, content: inputContent});
  }

  if(inputDate == 16) {
    h16.innerText = inputContent;
    monthly.push({date: inputDate, content: inputContent});
  }

  if(inputDate == 17) {
    h17.innerText = inputContent;
    monthly.push({date: inputDate, content: inputContent});
  }

  if(inputDate == 18) {
    h18.innerText = inputContent;
    monthly.push({date: inputDate, content: inputContent});
  }

  if(inputDate == 19) {
    h19.innerText = inputContent;
    monthly.push({date: inputDate, content: inputContent});
  }

  if(inputDate == 20) {
    h20.innerText = inputContent;
    monthly.push({date: inputDate, content: inputContent});
  }

  if(inputDate == 21) {
    h21.innerText = inputContent;
    monthly.push({date: inputDate, content: inputContent});
  }

  if(inputDate == 22) {
    h22.innerText = inputContent;
    monthly.push({date: inputDate, content: inputContent});
  }

  if(inputDate == 23) {
    h23.innerText = inputContent;
    monthly.push({date: inputDate, content: inputContent});
  }

  if(inputDate == 24) {
    h24.innerText = inputContent;
    monthly.push({date: inputDate, content: inputContent});
  }

  if(inputDate == 25) {
    h25.innerText = inputContent;
    monthly.push({date: inputDate, content: inputContent});
  }

  if(inputDate == 26) {
    h26.innerText = inputContent;
    monthly.push({date: inputDate, content: inputContent});
  }

  if(inputDate == 27) {
    h27.innerText = inputContent;
    monthly.push({date: inputDate, content: inputContent});
  }

  if(inputDate == 28) {
    h28.innerText = inputContent;
    monthly.push({date: inputDate, content: inputContent});
  }

  if(inputDate == 29) {
    h29.innerText = inputContent;
    monthly.push({date: inputDate, content: inputContent});
  }

  if(inputDate == 30) {
    h30.innerText = inputContent;
    monthly.push({date: inputDate, content: inputContent});
  }
  sessionStorage.monthly = JSON.stringify(monthly); // save the list
}

okBtn.addEventListener("click", clickOk);

window.onload = function() { // update the calendar schedule contents
  if(sessionStorage.monthly) {
    var monthly = JSON.parse(sessionStorage.monthly);
    for(var i=0; i < monthly.length; i++) {
      var date1 = monthly[i].date;
      var content1 = monthly[i].content;
      if(date1 == "1") h1.innerText = content1;
      if(date1 == "2") h2.innerText = content1;
      if(date1 == "3") h3.innerText = content1;
      if(date1 == "4") h4.innerText = content1;
      if(date1 == "5") h5.innerText = content1;
      if(date1 == "6") h6.innerText = content1;
      if(date1 == "7") h7.innerText = content1;
      if(date1 == "8") h8.innerText = content1;
      if(date1 == "9") h9.innerText = content1;
      if(date1 == "10") h10.innerText = content1;
      if(date1 == "11") h11.innerText = content1;
      if(date1 == "12") h12.innerText = content1;
      if(date1 == "13") h13.innerText = content1;
      if(date1 == "14") h14.innerText = content1;
      if(date1 == "15") h15.innerText = content1;
      if(date1 == "16") h16.innerText = content1;
      if(date1 == "17") h17.innerText = content1;
      if(date1 == "18") h18.innerText = content1;
      if(date1 == "19") h19.innerText = content1;
      if(date1 == "20") h20.innerText = content1;
      if(date1 == "21") h21.innerText = content1;
      if(date1 == "22") h22.innerText = content1;
      if(date1 == "23") h23.innerText = content1;
      if(date1 == "24") h24.innerText = content1;
      if(date1 == "25") h25.innerText = content1;
      if(date1 == "26") h26.innerText = content1;
      if(date1 == "27") h27.innerText = content1;
      if(date1 == "28") h28.innerText = content1;
      if(date1 == "29") h29.innerText = content1;
      if(date1 == "30") h30.innerText = content1;
    }
  }
}

var music = document.getElementById("music"); // music button
var getLink = document.getElementById("getLink"); // link container
var youtube = document.getElementById("link"); // link input
var okBtn1 = document.getElementById("okBtn1"); // ok button
var setting = document.getElementById("setting"); // setting container
var calendar = document.getElementById("calendar"); // calendar container
var area = document.getElementById("newArea"); // new area to insert html code

function clickMusic() {
  getLink.style.display = "block"; // show link container
  calendar.style.marginTop = "-500px"; // adjust location
}

function clickLink() {
  var musicLink = youtube.value; // get input value
  area.innerHTML = musicLink; // add youtube html code
  getLink.style.display = "none"; // hide link container
  calendar.style.marginTop = "-550px"; // adjust location
}

music.addEventListener("click", clickMusic); // add functions to buttons
okBtn1.addEventListener("click", clickLink);
