// js file for quiz3, same code with quiz2.js
var answer = 56;
var scorevalue = document.getElementById("score");
var score = sessionStorage.score;
var select1 = document.getElementById("ans1Btn");
var select2 = document.getElementById("ans2Btn");
var select3 = document.getElementById("ans3Btn");
var select4 = document.getElementById("ans4Btn");
var link = "quiz4.html";

scorevalue.innerText = score;

console.log(select4.value);

function click1()
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

select1.addEventListener("click", click1);
select2.addEventListener("click", click2);
select3.addEventListener("click", click3);
select4.addEventListener("click", click4);
