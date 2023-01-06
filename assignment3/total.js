// js file for total pagge
var scorevalue = document.getElementById("score"); // get h tag to show score
var againBtn = document.getElementById("again"); // get again button
var score = sessionStorage.score; // load total score
var link = "quiz1.html"; // link to go

scorevalue.innerText = "Total score: " + score; // show total score

function clickAgain() // if click the button -> go to next page
{
  location.href = link;
}

againBtn.addEventListener("click", clickAgain); // add function to button
