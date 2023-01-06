var infoLink = "info.html";
var withdrawLink = "withdraw.html";
var depositLink = "deposit.html";
var transferLink = "transfer.html";
var returnLink = "login.html";

var infoBtn = document.getElementById('info');
var withdrawBtn = document.getElementById('withdraw');
var depositBtn = document.getElementById('deposit');
var transferBtn = document.getElementById('transfer');
var returnBtn = document.getElementById('return');

function clickInfo() { // when click each menu button
  location.href = infoLink; // go to menu page
}

function clickWithdraw() {
  location.href = withdrawLink;
}

function clickDeposit() {
  location.href = depositLink;
}

function clickTransfer() {
  location.href = transferLink;
}

function clickReturn() {
  location.href = returnLink;
}

infoBtn.addEventListener("click", clickInfo);
withdrawBtn.addEventListener("click", clickWithdraw);
depositBtn.addEventListener("click", clickDeposit);
transferBtn.addEventListener("click", clickTransfer);
returnBtn.addEventListener("click", clickReturn);
