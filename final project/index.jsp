<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Diary</title>
<script src="jquery-3.6.1.min.js" charset="EUC-KR"></script>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap');
    </style>
    <link rel="stylesheet" href="./pw.css">
</head>
<body>
<img src="img\1.png" class="img1" id="img1">
    <img src="img\2.png" class="img2" id="img2">
    <img src="img\3.png" class="img3" id="img3">
    <img src="img\4.png" class="img4" id="img4">
    <div class="pwContainer" id="pwContainer">
      <h1>DIARY</h1>
      <h2 id="message">Enter your password</h2>
      <div class="pwSection">
        <span class="dot" id="dot1"></span>
        <span class="dot" id="dot2"></span>
        <span class="dot" id="dot3"></span>
        <span class="dot" id="dot4"></span>
      </div>
      <div class="numberSection">
        <button class="number" id="btn1">1</button>
        <button class="number" id="btn2">2</button>
        <button class="number" id="btn3">3</button>
        <button class="number" id="btn4">4</button>
        <button class="number" id="btn5">5</button>
        <button class="number" id="btn6">6</button>
        <button class="number" id="btn7">7</button>
        <button class="number" id="btn8">8</button>
        <button class="number" id="btn9">9</button>
        <button class="number" id="btn0">0</button>
      </div>
    </div>
    <h3>(Initial password: 1234)</h3>
</body>
<script src="./pw.js" charset="EUC-KR"></script>
</html>