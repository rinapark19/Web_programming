// js file for the first quiz
var answer = 2; // answer for the quiz
var score = 0; // total score of quiz
var select1 = document.getElementById("ans1Btn"); // get buttons
var select2 = document.getElementById("ans2Btn");
var select3 = document.getElementById("ans3Btn");
var select4 = document.getElementById("ans4Btn");
var link = "quiz2.html";

function click1() // if click button
{
  if(select1.value == answer) // if it is right
  {
    score = Number(score) + Number(1); // calculate the score
    sessionStorage.score = score; // and save
    select1.style.backgroundColor = "green"; // make it color green
    setTimeout(function() {location.href = link}, 1000); // give a little delay and move to next page
  }
  else // if it is wrong
  {
    sessionStorage.score = score; // save score
    select1.style.backgroundColor = "red"; // make color red
    setTimeout(function() {location.href = link}, 1000); // give a little delay and move to next page
  }
}

function click2() // same with button 1
{
  if(select2.value == answer)
  {
    score = Number(score) + Number(1);
    sessionStorage.score = score;
    select2.style.backgroundColor = "green";
    setTimeout(function() {location.href = link}, 1000);
  }
  else
  {
    sessionStorage.score = score;
    select2.style.backgroundColor = "red";
    setTimeout(function() {location.href = link}, 1000);
  }
}

function click3()
{
  if(select3.value == answer)
  {
    score = Number(score) + Number(1);
    sessionStorage.score = score;
    select3.style.backgroundColor = "green";
    setTimeout(function() {location.href = link}, 1000);
  }
  else
  {
    sessionStorage.score = score;
    select3.style.backgroundColor = "red";
    setTimeout(function() {location.href = link}, 1000);
  }
}

function click4()
{
  if(select4.value == answer)
  {
    score = Number(score) + Number(1);
    sessionStorage.score = score;
    select4.style.backgroundColor = "green";
    setTimeout(function() {location.href = link}, 2000);
  }
  else
  {
    sessionStorage.score = score;
    select4.style.backgroundColor = "red";
    setTimeout(function() {location.href = link}, 2000);
  }
}

select1.addEventListener("click", click1); // add function to buttons
select2.addEventListener("click", click2);
select3.addEventListener("click", click3);
select4.addEventListener("click", click4);
