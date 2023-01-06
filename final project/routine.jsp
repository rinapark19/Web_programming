<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>DIARY</title>
    <link rel="stylesheet" href="./routine.css">
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap');
    </style>
</head>
<body>
	<div class="header">
      <button class="home"id="home" onclick="location.href='index.jsp'"></button>
      <button class="menu" id="menu" onclick="location.href='index1.html'"></button>
      <button class="music" id="music"></button>
      <div class="tab">
        <button class="tab1" id="todo" onclick="location.href='todo.html'">TO DO LIST</button>
        <button class="tab1" id="monthly" onclick="location.href='monthly.html'">MONTHLY</button>
        <button class="tab1" id="weekly1" onclick="location.href='weekly1.html''">1st WEEK</button>
        <button class="tab1" id="weekly2" onclick="location.href='weekly2.html'">2nd WEEK</button>
        <button class="tab1" id="weekly3" onclick="location.href='weekly3.html'">3rd WEEK</button>
        <button class="tab1" id="weekly4" onclick="location.href='weekly4.html'">4th WEEK</button>
        <button class="tab1" id="weekly5" onclick="location.href='weekly5.html'">5th WEEK</button>
        <button class="tab1" id="daily" onclick="location.href='daily.html'">DAILY</button>
        <button class="tab1" id="memo" onclick="location.href='memo.html'">MEMO</button>
        <button class="tab1" id="memo">ROUTINE</button>
      </div>
    </div><br>
    <div class="getLink" id="getLink">
      <input type="text" name="link" id="link" placeholder="Enter your youtube html link">
      <button class="okBtn" id="okBtn1">OK</button>
    </div>
    <div id="newArea"></div>
	<div class="container">
		<h1>Today's Routine</h1><br>
		<form method="get">
		<input type="checkbox" name="routine" value="Drink water 1L">Drink Water 2L
		<input type="checkbox" name="routine" value="Walk 1H">Walk 1H
		<input type="checkbox" name="routine" value="Read book 30M">Read book 30M
		<input type="checkbox" name="routine" value="Code 1H">Coding 1H<br>
		<input type="checkbox" name="routine" value="Eat healthy breakfast">Eat healthy breakfast
		<input type="checkbox" name="routine" value="Sleep 7H">Sleep 7H 30M
		<input type="checkbox" name="routine" value="Take vitamin">Take vitamin
		<input type="checkbox" name="routine" value="Feed the cat">Feed the cat<br>
		<input type="submit" value="Clear!" class="submit">
		</form></div>
		<%
		String[] routines = request.getParameterValues("routine"); // get the checked routines
		if(routines != null) { // if there is at least one checked routin
		%>
		<div class="container1">
		<h1>You cleared: </h1>
		<ul>
			<%
			for(int i = 0; i < routines.length; ++i) { // show each routine
			%>
			<li><%=routines[i]%></li>
			<%
			}
			%>
		</ul>
		</div>
		<%} %>
</body>
<script src="routine.js" charset="utf-8"></script>
</html>