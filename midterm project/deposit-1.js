var amount = document.getElementById('withdrawAmount'); // display showing the amount of deposit
var link1 = "deposit-2.html";
var link2 = "deposit.html";
var link3 = "deposit.html";

if(sessionStorage.getItem("value")) { // get deposit value from session storage
  var data = sessionStorage.getItem("value");
}

amount.innerText = "$" + data; // showing deposit value

var yesBtn = document.getElementById("yes");
var noBtn = document.getElementById("no");


function clickYes() { // if click yes -> go to next page(deposit-2)
  location.href = link1;
}

function clickNo() { // if click no -> back to previous page(deposit)
  location.href = link2;
}

yesBtn.addEventListener("click", clickYes);
noBtn.addEventListener("click", clickNo);
