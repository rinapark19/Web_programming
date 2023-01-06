// js file for second quiz
var answer = 214; // answer of the quiz
var scorevalue = document.getElementById("score");  // get h tag for showing score
var score = sessionStorage.score; // load score
var select1 = document.getElementById("ans1Btn"); // get buttons
var select2 = document.getElementById("ans2Btn");
var select3 = document.getElementById("ans3Btn");
var select4 = document.getElementById("ans4Btn");
var link = "quiz3.html";

scorevalue.innerText = score; // show current score

function click1() // same function with quiz1.js
{
  if(select1.value == answer)
  {
    score = Number(score) + Number(1);
    sessionStorage.score = score;
    select1.style.backgroundColor = "green";
    setTimeout(function() {location.href = link}, 1000);
  }
  else
  {
    sessionStorage.score = score;
    select1.style.backgroundColor = "red";
    setTimeout(function() {location.href = link}, 1000);
  }
}

function click2()
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

select1.addEventListener("click", click1); // add functions to button
select2.addEventListener("click", click2);
select3.addEventListener("click", click3);
select4.addEventListener("click", click4);
