var link = "deposit-3.html";

var okBtn = document.getElementById("ok");

function clickOk() { // if click ok -> go to next page(deposit-3)
  location.href = link;
}

okBtn.addEventListener("click", clickOk);
