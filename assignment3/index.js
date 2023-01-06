// js file for starting page

var startBtn = document.getElementById("start"); // get start button
link = "quiz1.html" // link to move

function clickStart()
{
  location.href = link;
}

startBtn.addEventListener("click", clickStart); // if click start button-> go to next page
