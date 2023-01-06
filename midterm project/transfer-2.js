var transfer = sessionStorage.transfer; // get the transfer value
var link1 = "transfer-3.html";
var link2 = "transfer.html";

var display = document.getElementById("display"); // get the display that showing transfer value
var yesBtn = document.getElementById("yes");
var noBtn = document.getElementById("no");

var from =  document.getElementById("from"); //get the display that showing sending account number
var to = document.getElementById("to"); // get the display that showing receiving account number

fromValue = sessionStorage.fromValue // get sending account number from session storage
toValue = sessionStorage.toValue; // get receiving account number from session storage

display.innerText = "$" + transfer; // showing each value
from.innerText = "From " + fromValue;
to.innerText = "To " + toValue;

function clickYes() { // if click yes
  if(Number(transfer) > Number(sessionStorage.balance)) // if transfer value is bigger than current balance
  {
    alert("You can transfer more money than your balance"); // showing alert
    location.href = link2; // back to transfer page
  }
  else
  {
    location.href = link1; // go to next page
  }
}

function clickNo() {
  location.href = link2; // back to previous page
}

yesBtn.addEventListener("click", clickYes);
noBtn.addEventListener("click", clickNo);
