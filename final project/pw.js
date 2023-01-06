// javascript file for index.jsp (initial page)

var input = ""; // input value
var pw = "1234"; // initial password
if(sessionStorage.pw) { // if user changes password
  pw = sessionStorage.pw; // get new password
}
var cnt = 0; // counter

var btn1 = document.getElementById('btn1'); // each number buttons
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');
var btn6 = document.getElementById('btn6');
var btn7 = document.getElementById('btn7');
var btn8 = document.getElementById('btn8');
var btn9 = document.getElementById('btn9');
var btn0 = document.getElementById('btn0');

var dot1 = document.getElementById("dot1"); // each dots
var dot2 = document.getElementById("dot2");
var dot3 = document.getElementById("dot3");
var dot4 = document.getElementById("dot4");

var img1 = document.getElementById("img1"); // background images
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");

var pwContainer = document.getElementById("pwContainer"); // pw input container

var link = "monthly.html";

// all the number functions operate similarly
function click1() { // when click the each number button
  input += "1"; // add number to input value

  if(cnt == 0) { // if user never clicked number -> initialize the dots, img style, locaiton
    dot1.style.background = "#ABD9FF";
    dot2.style.background = "#ABD9FF";
    dot3.style.background = "#ABD9FF";
    dot4.style.background = "#ABD9FF";
    img1.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "none";
    img4.style.display = "none";
    pwContainer.style.marginTop = "3560px";
  }

  cnt++;

  if(cnt == 1) { // each click
    dot1.style.background = "#0D4C92"; // change dot color
    img1.style.display = "block"; // show each background image
    pwContainer.style.marginTop = "-800px"; // adjust location
  }
  if(cnt == 2) {
    dot2.style.background = "#0D4C92";
    img2.style.display = "block";
    pwContainer.style.marginTop = "-860px";
  }
  if(cnt == 3) {
    dot3.style.background = "#0D4C92";
    img3.style.display = "block";
    pwContainer.style.marginTop = "-920px";
  }
  if(cnt == 4) {
    dot4.style.background = "#0D4C92";
    img4.style.display = "block";
    pwContainer.style.marginTop = "-980px";

    if(input == pw) { // if input password is the same with the password
      setTimeout(function() {
        location.href = link; // move to monthly page
      }, 2000);
    }
    else { // if password is wrong
      dot1.style.background = "red"; // change dot color
      dot2.style.background = "red";
      dot3.style.background = "red";
      dot4.style.background = "red";
      input = ""; // initialize input and counter
      cnt = 0;
    }
  }
}

function click2() {
  input += "2";
  if(cnt == 0) {
    console.log("okey");
    dot1.style.background = "#ABD9FF";
    dot2.style.background = "#ABD9FF";
    dot3.style.background = "#ABD9FF";
    dot4.style.background = "#ABD9FF";
    img1.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "none";
    img4.style.display = "none";
    pwContainer.style.marginTop = "3560px";
  }
  cnt++;
  if(cnt == 1) {
    dot1.style.background = "#0D4C92";
    img1.style.display = "block";
    pwContainer.style.marginTop = "-800px";
  }
  if(cnt == 2) {
    dot2.style.background = "#0D4C92";
    img2.style.display = "block";
    pwContainer.style.marginTop = "-860px";
  }
  if(cnt == 3) {
    dot3.style.background = "#0D4C92";
    img3.style.display = "block";
    pwContainer.style.marginTop = "-920px";
  }
  if(cnt == 4) {
    dot4.style.background = "#0D4C92";
    img4.style.display = "block";
    pwContainer.style.marginTop = "-980px";

    if(input == pw) {
      setTimeout(function() {
        location.href = link;
      }, 2000);
    }
    else {
      dot1.style.background = "red";
      dot2.style.background = "red";
      dot3.style.background = "red";
      dot4.style.background = "red";
      input = "";
      cnt = 0;
    }
  }
}

function click3() {
  input += "3";
  if(cnt == 0) {
    console.log("okey");
    dot1.style.background = "#ABD9FF";
    dot2.style.background = "#ABD9FF";
    dot3.style.background = "#ABD9FF";
    dot4.style.background = "#ABD9FF";
    img1.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "none";
    img4.style.display = "none";
    pwContainer.style.marginTop = "3560px";
  }
  cnt++;
  if(cnt == 1) {
    dot1.style.background = "#0D4C92";
    img1.style.display = "block";
    pwContainer.style.marginTop = "-800px";
  }
  if(cnt == 2) {
    dot2.style.background = "#0D4C92";
    img2.style.display = "block";
    pwContainer.style.marginTop = "-860px";
  }
  if(cnt == 3) {
    dot3.style.background = "#0D4C92";
    img3.style.display = "block";
    pwContainer.style.marginTop = "-920px";
  }
  if(cnt == 4) {
    dot4.style.background = "#0D4C92";
    img4.style.display = "block";
    pwContainer.style.marginTop = "-980px";

    if(input == pw) {
      setTimeout(function() {
        location.href = link;
      }, 2000);
    }
    else {
      dot1.style.background = "red";
      dot2.style.background = "red";
      dot3.style.background = "red";
      dot4.style.background = "red";
      input = "";
      cnt = 0;
    }
  }
}

function click4() {
  input += "4";
  if(cnt == 0) {
    console.log("okey");
    dot1.style.background = "#ABD9FF";
    dot2.style.background = "#ABD9FF";
    dot3.style.background = "#ABD9FF";
    dot4.style.background = "#ABD9FF";
    img1.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "none";
    img4.style.display = "none";
    pwContainer.style.marginTop = "3560px";
  }
  cnt++;
  if(cnt == 1) {
    dot1.style.background = "#0D4C92";
    img1.style.display = "block";
    pwContainer.style.marginTop = "-800px";
  }
  if(cnt == 2) {
    dot2.style.background = "#0D4C92";
    img2.style.display = "block";
    pwContainer.style.marginTop = "-860px";
  }
  if(cnt == 3) {
    dot3.style.background = "#0D4C92";
    img3.style.display = "block";
    pwContainer.style.marginTop = "-920px";
  }
  if(cnt == 4) {
    dot4.style.background = "#0D4C92";
    img4.style.display = "block";
    pwContainer.style.marginTop = "-980px";

    if(input == pw) {
      setTimeout(function() {
        location.href = link;
      }, 2000);
    }
    else {
      dot1.style.background = "red";
      dot2.style.background = "red";
      dot3.style.background = "red";
      dot4.style.background = "red";
      input = "";
      cnt = 0;
    }
  }
}

function click5() {
  input += "5";
  if(cnt == 0) {
    console.log("okey");
    dot1.style.background = "#ABD9FF";
    dot2.style.background = "#ABD9FF";
    dot3.style.background = "#ABD9FF";
    dot4.style.background = "#ABD9FF";
    img1.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "none";
    img4.style.display = "none";
    pwContainer.style.marginTop = "3560px";
  }
  cnt++;
  if(cnt == 1) {
    dot1.style.background = "#0D4C92";
    img1.style.display = "block";
    pwContainer.style.marginTop = "-800px";
  }
  if(cnt == 2) {
    dot2.style.background = "#0D4C92";
    img2.style.display = "block";
    pwContainer.style.marginTop = "-860px";
  }
  if(cnt == 3) {
    dot3.style.background = "#0D4C92";
    img3.style.display = "block";
    pwContainer.style.marginTop = "-920px";
  }
  if(cnt == 4) {
    dot4.style.background = "#0D4C92";
    img4.style.display = "block";
    pwContainer.style.marginTop = "-980px";

    if(input == pw) {
      setTimeout(function() {
        location.href = link;
      }, 2000);
    }
    else {
      dot1.style.background = "red";
      dot2.style.background = "red";
      dot3.style.background = "red";
      dot4.style.background = "red";
      input = "";
      cnt = 0;
    }
  }
}

function click6() {
  input += "6";
  if(cnt == 0) {
    console.log("okey");
    dot1.style.background = "#ABD9FF";
    dot2.style.background = "#ABD9FF";
    dot3.style.background = "#ABD9FF";
    dot4.style.background = "#ABD9FF";
    img1.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "none";
    img4.style.display = "none";
    pwContainer.style.marginTop = "3560px";
  }
  cnt++;
  if(cnt == 1) {
    dot1.style.background = "#0D4C92";
    img1.style.display = "block";
    pwContainer.style.marginTop = "-800px";
  }
  if(cnt == 2) {
    dot2.style.background = "#0D4C92";
    img2.style.display = "block";
    pwContainer.style.marginTop = "-860px";
  }
  if(cnt == 3) {
    dot3.style.background = "#0D4C92";
    img3.style.display = "block";
    pwContainer.style.marginTop = "-920px";
  }
  if(cnt == 4) {
    dot4.style.background = "#0D4C92";
    img4.style.display = "block";
    pwContainer.style.marginTop = "-980px";

    if(input == pw) {
      setTimeout(function() {
        location.href = link;
      }, 2000);
    }
    else {
      dot1.style.background = "red";
      dot2.style.background = "red";
      dot3.style.background = "red";
      dot4.style.background = "red";
      input = "";
      cnt = 0;
    }
  }
}

function click7() {
  input += "7";
  if(cnt == 0) {
    console.log("okey");
    dot1.style.background = "#ABD9FF";
    dot2.style.background = "#ABD9FF";
    dot3.style.background = "#ABD9FF";
    dot4.style.background = "#ABD9FF";
    img1.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "none";
    img4.style.display = "none";
    pwContainer.style.marginTop = "3560px";
  }
  cnt++;
  if(cnt == 1) {
    dot1.style.background = "#0D4C92";
    img1.style.display = "block";
    pwContainer.style.marginTop = "-800px";
  }
  if(cnt == 2) {
    dot2.style.background = "#0D4C92";
    img2.style.display = "block";
    pwContainer.style.marginTop = "-860px";
  }
  if(cnt == 3) {
    dot3.style.background = "#0D4C92";
    img3.style.display = "block";
    pwContainer.style.marginTop = "-920px";
  }
  if(cnt == 4) {
    dot4.style.background = "#0D4C92";
    img4.style.display = "block";
    pwContainer.style.marginTop = "-980px";

    if(input == pw) {
      setTimeout(function() {
        location.href = link;
      }, 2000);
    }
    else {
      dot1.style.background = "red";
      dot2.style.background = "red";
      dot3.style.background = "red";
      dot4.style.background = "red";
      input = "";
      cnt = 0;
    }
  }
}

function click8() {
  input += "8";
  if(cnt == 0) {
    console.log("okey");
    dot1.style.background = "#ABD9FF";
    dot2.style.background = "#ABD9FF";
    dot3.style.background = "#ABD9FF";
    dot4.style.background = "#ABD9FF";
    img1.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "none";
    img4.style.display = "none";
    pwContainer.style.marginTop = "3560px";
  }
  cnt++;
  if(cnt == 1) {
    dot1.style.background = "#0D4C92";
    img1.style.display = "block";
    pwContainer.style.marginTop = "-800px";
  }
  if(cnt == 2) {
    dot2.style.background = "#0D4C92";
    img2.style.display = "block";
    pwContainer.style.marginTop = "-860px";
  }
  if(cnt == 3) {
    dot3.style.background = "#0D4C92";
    img3.style.display = "block";
    pwContainer.style.marginTop = "-920px";
  }
  if(cnt == 4) {
    dot4.style.background = "#0D4C92";
    img4.style.display = "block";
    pwContainer.style.marginTop = "-980px";

    if(input == pw) {
      setTimeout(function() {
        location.href = link;
      }, 2000);
    }
    else {
      dot1.style.background = "red";
      dot2.style.background = "red";
      dot3.style.background = "red";
      dot4.style.background = "red";
      input = "";
      cnt = 0;
    }
  }
}

function click9() {
  input += "9";
  if(cnt == 0) {
    console.log("okey");
    dot1.style.background = "#ABD9FF";
    dot2.style.background = "#ABD9FF";
    dot3.style.background = "#ABD9FF";
    dot4.style.background = "#ABD9FF";
    img1.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "none";
    img4.style.display = "none";
    pwContainer.style.marginTop = "3560px";
  }
  cnt++;
  if(cnt == 1) {
    dot1.style.background = "#0D4C92";
    img1.style.display = "block";
    pwContainer.style.marginTop = "-800px";
  }
  if(cnt == 2) {
    dot2.style.background = "#0D4C92";
    img2.style.display = "block";
    pwContainer.style.marginTop = "-860px";
  }
  if(cnt == 3) {
    dot3.style.background = "#0D4C92";
    img3.style.display = "block";
    pwContainer.style.marginTop = "-920px";
  }
  if(cnt == 4) {
    dot4.style.background = "#0D4C92";
    img4.style.display = "block";
    pwContainer.style.marginTop = "-980px";

    if(input == pw) {
      setTimeout(function() {
        location.href = link;
      }, 2000);
    }
    else {
      dot1.style.background = "red";
      dot2.style.background = "red";
      dot3.style.background = "red";
      dot4.style.background = "red";
      input = "";
      cnt = 0;
    }
  }
}

function click0() {
  input += "0";
  if(cnt == 0) {
    console.log("okey");
    dot1.style.background = "#ABD9FF";
    dot2.style.background = "#ABD9FF";
    dot3.style.background = "#ABD9FF";
    dot4.style.background = "#ABD9FF";
    img1.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "none";
    img4.style.display = "none";
    pwContainer.style.marginTop = "3560px";
  }
  cnt++;
  if(cnt == 1) {
    dot1.style.background = "#0D4C92";
    img1.style.display = "block";
    pwContainer.style.marginTop = "-800px";
  }
  if(cnt == 2) {
    dot2.style.background = "#0D4C92";
    img2.style.display = "block";
    pwContainer.style.marginTop = "-860px";
  }
  if(cnt == 3) {
    dot3.style.background = "#0D4C92";
    img3.style.display = "block";
    pwContainer.style.marginTop = "-920px";
  }
  if(cnt == 4) {
    dot4.style.background = "#0D4C92";
    img4.style.display = "block";
    pwContainer.style.marginTop = "-980px";

    if(input == pw) {
      setTimeout(function() {
        location.href = link;
      }, 2000);
    }
    else {
      dot1.style.background = "red";
      dot2.style.background = "red";
      dot3.style.background = "red";
      dot4.style.background = "red";
      input = "";
      cnt = 0;
    }
  }
}

btn1.addEventListener('click', click1); // add each function to button
btn2.addEventListener('click', click2);
btn3.addEventListener('click', click3);
btn4.addEventListener('click', click4);
btn5.addEventListener('click', click5);
btn6.addEventListener('click', click6);
btn7.addEventListener('click', click7);
btn8.addEventListener('click', click8);
btn9.addEventListener('click', click9);
btn0.addEventListener('click', click0);
