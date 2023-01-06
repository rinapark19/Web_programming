var money = sessionStorage.getItem("money"); // get the withdraw amount from session storage
var display = document.getElementById("display"); // get display that showing withdraw amount

var link1 = "withdraw-3.html";
var link2 = "withdraw.html";

display.innerText = "$" + money; // show amount of withdraw

var yesBtn = document.getElementById("yes");
var noBtn = document.getElementById("no");


function clickYes() { // if click yes
  if(Number(money) > Number(sessionStorage.balance)) // if the amount of withdraw is bigger than balance
  {
    alert("You can withdraw more money than your balance"); // show alert message
    location.href = link2; // back to previous page
  }
  else
  {
    location.href = link1; // else-> go to next page
  }
}

function clickNo() { // if click no
  location.href = link2; // back to previous page
}

yesBtn.addEventListener("click", clickYes);
noBtn.addEventListener("click", clickNo);
