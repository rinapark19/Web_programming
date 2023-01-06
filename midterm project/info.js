var balance = 2000; // initialize balance
sessionStorage.balance = balance; // save the balance to session storage
var current = "Current Balance: $";
var tDate = new Date();
var fundOut = 0;
var fundIn = 0; // initialize table data value
var link = "main.html";
var finalValue = 0;

var balanceValue = document.getElementById("balance");
var table = document.getElementById("table");
var returnBtn = document.getElementById("return");

var data = [ // initialize table data
  {date: tDate, value1: fundOut, value2: fundIn, value3: balance}
];

sessionStorage.tableData = JSON.stringify(data); // save the table data to session storage

function toDOM(row, i) { // add new table data to html
  if(i % 2 == 1)
  {
    var tr = "";
    tr += "<tr class='odd'>";
    tr += '<td>' + row.date + '</td>';
    tr += '<td>' + row.value1 + '</td>';
    tr += '<td>' + row.value2 + '</td>';
    tr += '<td>' + row.value3 + '</td>';
    tr += '</tr>';
    return tr;
  }
  else
  {
    var tr = "";
    tr += "<tr class='even'>";
    tr += '<td>' + row.date + '</td>';
    tr += '<td>' + row.value1 + '</td>';
    tr += '<td>' + row.value2 + '</td>';
    tr += '<td>' + row.value3 + '</td>';
    tr += '</tr>';
    return tr;
  }
}

function renderTable(id, data) { // make table
  var size = data.length;
  var trList = "";
  for(var i=0; i < size; i++)
  {
    trList += toDOM(data[i], i);
  }
  document.querySelector("#table tbody").innerHTML = trList;
}

function clickReturn() { // if click return button
  location.href = link; // go to main page
}

window.onload = function() { // when the main page open

  if(sessionStorage.tableNew) // if there are new table data
  {
    tableData = JSON.parse(sessionStorage.tableNew); // update table data
    data = tableData;
    sessionStorage.tableData = JSON.stringify(data); // update table data to the session storage
    balance = sessionStorage.balanceNew; // get the balance
  }
  current = current + balance;
  balanceValue.innerText = current; // showing current balance
  sessionStorage.balance = balance; // save the balance to the session storage
  renderTable("table", data); // make new table row
}

returnBtn.addEventListener("click", clickReturn);
