// javascript file for todo.html

var content = document.getElementById("content"); // content input
var okBtn = document.getElementById("okBtn"); // ok button
var number = document.getElementById("number"); // number input
var okBtn1 = document.getElementById("okBtn1"); // ok button

var list1 = document.getElementById("list1"); // each todo object h tag
var list2 = document.getElementById("list2");
var list3 = document.getElementById("list3");
var list4 = document.getElementById("list4");
var list5 = document.getElementById("list5");
var list6 = document.getElementById("list6");
var list7 = document.getElementById("list7");
var list8 = document.getElementById("list8");
var list9 = document.getElementById("list9");
var list10 = document.getElementById("list10");

var todo = [{index: "0", content: "0"}]; // save the todo contents in the list

if(sessionStorage.todo) {
  todo = JSON.parse(sessionStorage.todo); // update the list
}

function add() {
  var number = todo.length;
  todo.push({index: number, content: content.value}); // add new content

  for(var i = 0; i <= todo.length; i++) {
    var index = 0;
    var content2 = "0";
    if(todo[i]) {
      var index = todo[i].index; // get the each contents
      var content2 = todo[i].content;
    }
    if(index == 1) list1.innerText = "● " + content2; // show all the contents to user
    if(index == 2) list2.innerText = "● " + content2;
    if(index == 3) list3.innerText = "● " + content2;
    if(index == 4) list4.innerText = "● " + content2;
    if(index == 5) list5.innerText = "● " + content2;
    if(index == 6) list6.innerText = "● " + content2;
    if(index == 7) list7.innerText = "● " + content2;
    if(index == 8) list8.innerText = "● " + content2;
    if(index == 9) list9.innerText = "● " + content2;
    if(index == 10) list10.innerText = "● " + content2;
  }
  sessionStorage.todo = JSON.stringify(todo); // update the list
}

function check() {
  var todo = JSON.parse(sessionStorage.todo); // get the list
  var number1 = Number(number.value); // the number value that user want to check
  var index1 = 0;

  for(var i = 0; i <= todo.length; i++) {
    var index2 = 0;
    if(todo[i]) {
      var index2 = todo[i].index; // if the todo available, get the index
    }
    if(index2 == number1) {
      index1 = index2;
      if(index1 == 1) list1.style.color = "red"; // change color red
      if(index1 == 2) list2.style.color = "red";
      if(index1 == 3) list3.style.color = "red";
      if(index1 == 4) list4.style.color = "red";
      if(index1 == 5) list5.style.color = "red";
      if(index1 == 6) list6.style.color = "red";
      if(index1 == 7) list7.style.color = "red";
      if(index1 == 8) list8.style.color = "red";
      if(index1 == 9) list9.style.color = "red";
      if(index1 == 10) list10.style.color = "red";
      break;
    }
  }
  delete todo[index1]; // delete content
  sessionStorage.todo = JSON.stringify(todo); // update the list
}

okBtn.addEventListener("click", add);
okBtn1.addEventListener("click", check);

window.onload = function() {
  if(sessionStorage.todo) { // show current todo list
    var todo = JSON.parse(sessionStorage.todo);
    if(todo) {
      for(var i = 0; i < todo.length; i++) {
        var index = 0;
        var content2 = "0";
        if(todo[i]) {
          var index = todo[i].index;
          var content2 = todo[i].content;
        }
        if(index == 1) list1.innerText = "● " + content2;
        if(index == 2) list2.innerText = "● " + content2;
        if(index == 3) list3.innerText = "● " + content2;
        if(index == 4) list4.innerText = "● " + content2;
        if(index == 5) list5.innerText = "● " + content2;
        if(index == 6) list6.innerText = "● " + content2;
        if(index == 7) list7.innerText = "● " + content2;
        if(index == 8) list8.innerText = "● " + content2;
        if(index == 9) list9.innerText = "● " + content2;
        if(index == 10) list10.innerText = "● " + content2;
      }
    }
  }
}

var music = document.getElementById("music"); // music button
var getLink = document.getElementById("getLink"); // link container
var youtube = document.getElementById("link"); // link input
var okBtn2 = document.getElementById("okBtn2"); // ok button
var area = document.getElementById("newArea"); // new area to insert html code
var todoContainer = document.getElementById("todoContainer"); 

function clickMusic() {
  getLink.style.display = "block"; // show link container
  todoContainer.style.marginTop = "100px"; // adjust location
}

function clickLink() {
  var musicLink = youtube.value; // get the input value
  area.innerHTML = musicLink; // add the youtube html code
  getLink.style.display = "none"; // hide the link container
  todoContainer.style.marginTop = "100px"; // adjust location
}

music.addEventListener("click", clickMusic); // add functions to buttons
okBtn2.addEventListener("click", clickLink);
