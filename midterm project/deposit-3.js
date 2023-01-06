var link = "main.html";
var link2 = "deposit.html";

var homeBtn = document.getElementById("home");
var againBtn = document.getElementById("again");
var returnBtn = document.getElementById("return1");

function clickHome() { // if click home -> go to main page
  location.href = link;
}

function clickAgain() { // if click again -> go to deposit page
  location.href = link2;
}

function clickReturn() { // if click return -> go to deposit page
  location.href = link2;
}

homeBtn.addEventListener("click", clickHome);
againBtn.addEventListener("click", clickAgain);
returnBtn.addEventListener("click", clickReturn);

var tableData = JSON.parse(sessionStorage.tableData); // get current value of balance and table data
var balance = sessionStorage.balance;
if(sessionStorage.tableNew)
{
  tableData = JSON.parse(sessionStorage.tableNew);
  balance = sessionStorage.balanceNew;
}
tableData.push( // add new table data
  {date: new Date(), value1: 0, value2: sessionStorage.value,
    value3: Number(sessionStorage.value) + Number(balance)}
);
sessionStorage.balanceNew = Number(balance) + Number(sessionStorage.value); // update balance and table data
sessionStorage.tableNew = JSON.stringify(tableData);
