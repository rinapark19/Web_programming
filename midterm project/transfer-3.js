var link = "main.html";
var link2 = "transfer.html";

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

var tableData = JSON.parse(sessionStorage.tableData); // get the table data from session storage
var balance = sessionStorage.balance; // get the balance from sessio storage
if(sessionStorage.tableNew) // if there are new data
{
  tableData = JSON.parse(sessionStorage.tableNew); // update each data
  balance = sessionStorage.balanceNew;
}
tableData.push( // add new data to table data
  {date: new Date(), value1: sessionStorage.transfer, value2: 0,
    value3: Number(sessionStorage.balance) - Number(sessionStorage.transfer)}
);
sessionStorage.balanceNew = Number(sessionStorage.balance) - Number(sessionStorage.transfer); // update each data to session storage
sessionStorage.tableNew = JSON.stringify(tableData);
