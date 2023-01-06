var link = "main.html";
var link2 = "withdraw.html";

var homeBtn = document.getElementById("home");
var againBtn = document.getElementById("again");
var returnBtn = document.getElementById("return1");

function clickHome() { // when click each menu button
  location.href = link; // go to each menu page
}

function clickAgain() {
  location.href = link2;
}

function clickReturn() {
  location.href = link2;
}

homeBtn.addEventListener("click", clickHome);
againBtn.addEventListener("click", clickAgain);
returnBtn.addEventListener("click", clickReturn);

var tableData = JSON.parse(sessionStorage.tableData); // get the table data and balnce from session storage
var balance = sessionStorage.balance;
if(sessionStorage.tableNew)
{
  tableData = JSON.parse(sessionStorage.tableNew);
  balance = sessionStorage.balanceNew;
}
tableData.push( // add new table data
  {date: new Date(), value1: sessionStorage.money, value2: 0,
    value3: Number(balance) - Number(sessionStorage.money)}
);
sessionStorage.balanceNew = Number(balance) - Number(sessionStorage.money); // update table data and balance to the session storage
sessionStorage.tableNew = JSON.stringify(tableData);
