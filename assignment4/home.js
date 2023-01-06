var check = 0; // variable for checking that all information is correct(0-> ok, 1-> wrong)
var password = ""; // get password from user to compare with checking password

function isUpper(strValue) { // function for checking uppercase
  let firstStrValue = strValue.charAt(0);
  return firstStrValue.match(new RegExp(/^[A-Z]/)) !== null;
}

// functions for buttons
$(function () { // function for click login button
  $("#login").click(function() {
    $("#loginTab").show(); // show login tab and hide other tabs
    $("#signTab").hide();
    $("#upTab").hide();
    $("#login").css("background-image", "linear-gradient(to top, white 90%, #2F558E 10%)"); // set the css for login button and sign button
    $("#sign").css("background-color", "grey");
    $("#sign").css("background-image", "none");
    $("#loginTab").css("animation-name", "wording"); // set the animation for login tab
    $("#loginTab").css("animation-duration", "2s");
    $("#loginTab").css("animation-iteration-count", "1");
    $("#loginTab").css("animation-direction", "alternate");
  })
})

$(function() { // function for click sign button
  $("#sign").click(function() {
    $("#loginTab").hide(); // show sign tab and hide login tab
    $("#signTab").show();
    $("#sign").css("background-image", "linear-gradient(to top, white 90%, #2F558E 10%)"); // set css for sign button and login button
    $("#login").css("background-color", "grey");
    $("#login").css("background-image", "none");
    $("#signTab").css("animation-name", "wording"); // set animation for sign tab
    $("#signTab").css("animation-duration", "2s");
    $("#signTab").css("animation-iteration-count", "1");
    $("#signTab").css("animation-direction", "alternate");
  })
})

// functions for sign tab
$(function() { // function for sign button
  $("#signBtn").click(function() {
    check = 0;

    $("#eFirst").hide(); // hide all the error messages
    $("#eLast").hide();
    $("#eGender").hide();
    $("#eEmail").hide();
    $("#ePw").hide();
    $("#eCheck").hide();

    $("input:text[name=first]").css("border-color", "white"); // intialize border color
    $("input:text[name=last]").css("border-color", "white");
    $("input:text[name=email]").css("border-color", "white");
    $("input:password[name=pw]").css("border-color", "white");
    $("input:password[name=check]").css("border-color", "white");

    if($("input:text[name=first]").val() == "") { // check empty
      $("#eFirst").show();
      $("input:text[name=first]").css("border-color", "red");
      check = 1;
    }
    if($("input:text[name=last]").val() == "") {
      $("#eLast").show();
      $("input:text[name=last]").css("border-color", "red");
      check = 1;
    }
    if($("input:radio[name=male]").is(":checked") == false && $("input:radio[name=female]").is(":checked") == false) { // check both radio buttons are empty
      $("#eGender").show();
      check = 1;
    }
    if($("input:text[name=email1]").val() == "") {
      $("#eEmail").show();
      $("input:text[name=email1]").css("border-color", "red");
      check = 1;
    }
    if($("input:password[name=pw1]").val() == '') {
      $("#ePw").show();
      $("input:password[name=pw1]").css("border-color", "red");
      check = 1;
    }
    if($("input:password[name=check]").val() == '') {
      $("#eCheck").show();
      $("input:password[name=check]").css("border-color", "red");
      check = 1;
    }

    if(check == 0) { // if all the information correctly entered,
      sessionStorage.email = $("input:text[name=email1]").val(); // get email and password and save in session storage
      sessionStorage.pw = $("input:password[name=check]").val();
      $("#signTab").hide(); // hide sign tab and show signed up tab
      $("#upTab").show()
    }
  })
})

$(function() { // function for checking first name
  $("input:text[name=first]").bind("keyup input", function() {

    $("#eNumber1").hide(); // hide error messages
    $("#eFirst").hide();
    $("input:text[name=first]").css("background-color", "#1C2024"); // initialize css
    $("input:text[name=first]").css("color", "white");
    $("input:text[name=first]").css("background-image", "none");

    const regex = /^[a-z|A-Z]+$/; // regext for checking english

    if(regex.test($("input:text[name=first]").val()) == false) { // if there is number or other characters except alphabet
      $("#eNumber1").show(); // show number error message
      $("#eNumber3").hide();
      $("input:text[name=first]").css("border-color", "red"); // make border color red
      check = 1;
    }
    else if(isUpper($("input:text[name=first]").val().substr(0, 1)) == false) // if the first letter is not uppercase
    {
      $("#eNumber3").show(); // show capital error message
      $("#eNumber1").hide();
      $("input:text[name=first]").css("border-color", "red"); // make border color red
      check = 1;
    }
    else { // correct case
      $("input:text[name=first]").css("border-color", "white"); // set border color white
      $("input:text[name=first]").css("background-image", "url('check.png')"); // showing check image
      $("input:text[name=first]").css("background-position", "330px center");
      $("input:text[name=first]").css("background-size", "1em 1em");
      $("input:text[name=first]").css("background-repeat", "no-repeat");
      check = 0; // first name okay
    }
  })
})

$(function() { // function for checking last name
  $("input:text[name=last]").bind("keyup input", function() {

    $("#eNumber2").hide(); // hide error messages
    $("#eLast").hide();
    $("input:text[name=last]").css("background-color", "#1C2024"); //  initialize css
    $("input:text[name=last]").css("color", "white");
    $("input:text[name=last]").css("background-image", "none");

    const regex = /^[a-z|A-Z]+$/; // regex for checking english

    if(regex.test($("input:text[name=last]").val()) == false) { // if there is number or other characters except alphabet
      $("#eNumber2").show(); // show number error message
      $("#eNumber4").hide();
      $("input:text[name=last]").css("border-color", "red"); // set border color
      check = 1;
    }
    else if(isUpper($("input:text[name=last]").val().substr(0, 1)) == false) { // if the first letter is not capital
      $("#eNumber4").show(); // show capital error
      $("#eNumber2").hide();
      $("input:text[name=last]").css("border-color", "red"); //  set border color
      check = 1;
    }
    else { // correct case
      $("input:text[name=last]").css("border-color", "white"); // set border color white
      $("input:text[name=last]").css("background-image", "url('check.png')"); //  showing check image
      $("input:text[name=last]").css("background-position", "330px center");
      $("input:text[name=last]").css("background-size", "1em 1em");
      $("input:text[name=last]").css("background-repeat", "no-repeat");
      check = 0; // last name okay
    }
  })
})

$(function() {
  $("input:radio[name=male]").change(function() {
    if($("input:radio[name=male]").is(":checked") == true) { // if male checked
      $("#eGender").hide(); // hide error message
      $("#checkImg").show(); // show check image
      check = 0; // gender okay
    }
  })
})

$(function() {
  $("input:radio[name=female]").change(function() {
    if($("input:radio[name=female]").is(":checked") == true) {
      $("#eGender").hide();
      $("#checkImg").show();
      check = 0;
    }
  })
})

$(function() {
  $("input:text[name=email1]").bind("keyup input", function() {

    $("#valid").hide();
    $("#eEmail").hide();
    $("input:text[name=email1]").css("background-color", "#1C2024");
    $("input:text[name=email1]").css("color", "white");
    $("input:text[name=email1]").css("background-image", "none");

    let regex1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email

    if(regex1.test($("input:text[name=email1]").val()) == false) {
      $("#valid").show();
      $("input:text[name=email1]").css("border-color", "red");
      check = 1;
    }
    else {
      $("input:text[name=email1]").css("border-color", "white");
      $("input:text[name=email1]").css("background-image", "url('check.png')");
      $("input:text[name=email1]").css("background-position", "330px center");
      $("input:text[name=email1]").css("background-size", "1em 1em");
      $("input:text[name=email1]").css("background-repeat", "no-repeat");
      check = 0;
    }
  })
})

$(function() {
  $("input:password[name=pw1]").bind("keyup input", function() {

    $("#wrong").hide();
    $("#ePw").hide();
    $("input:password[name=pw1]").css("background-color", "#1C2024");
    $("input:password[name=pw1]").css("color", "white");
    $("input:password[name=pw1]").css("background-image", "none");

    let regex1 = /^.*(?=^.{6,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/; // regex for password

    if(regex1.test($("input:password[name=pw1]").val()) == false) {
      $("#wrong").show();
      $("input:password[name=pw1]").css("border-color", "red");
      check = 1;
    }
    else {
      $("input:password[name=pw1]").css("border-color", "white");
      $("input:password[name=pw1]").css("background-image", "url('check.png')");
      $("input:password[name=pw1]").css("background-position", "330px center");
      $("input:password[name=pw1]").css("background-size", "1em 1em");
      $("input:password[name=pw1]").css("background-repeat", "no-repeat");
      password = $("input:password[name=pw1]").val();
      check = 0;
    }
  })
})

$(function() {
  $("input:password[name=check]").bind("keyup input", function() {

    $("#dif").hide();
    $("#eCheck").hide();
    $("input:password[name=check]").css("background-color", "#1C2024");
    $("input:password[name=check]").css("color", "white");
    $("input:password[name=check]").css("background-image", "none");

    let regex1 = /^.*(?=^.{6,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

    if($("input:password[name=check]").val() != password) { // if the password different
      $("#dif").show();
      $("input:password[name=check]").css("border-color", "red");
      check = 1;
    }
    else {
      $("input:password[name=check]").css("border-color", "white");
      $("input:password[name=check]").css("background-image", "url('check.png')");
      $("input:password[name=check]").css("background-position", "330px center");
      $("input:password[name=check]").css("background-size", "1em 1em");
      $("input:password[name=check]").css("background-repeat", "no-repeat");
      check = 0;
    }
  })
})

// functions for login tab
$(function() { // check email
  $("input:text[name=email]").bind("keyup input", function() {

    $("#valid1").hide();
    $("input:text[name=email]").css("background-color", "#1C2024");
    $("input:text[name=email]").css("color", "white");
    $("input:text[name=email]").css("background-image", "none");

    let regex1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(regex1.test($("input:text[name=email]").val()) == false) {
      $("#valid1").show();
      $("input:text[name=email]").css("border-color", "red");
    }
    else {
      $("input:text[name=email]").css("border-color", "white");
      $("input:text[name=email]").css("background-image", "url('check.png')");
      $("input:text[name=email]").css("background-position", "330px center");
      $("input:text[name=email]").css("background-size", "1em 1em");
      $("input:text[name=email]").css("background-repeat", "no-repeat");
    }
  })
})

$(function() { // check password
  $("input:password[name=pw]").bind("keyup input", function() {

    $("#eCheck1").hide();
    $("input:password[name=pw]").css("background-color", "#1C2024");
    $("input:password[name=pw]").css("color", "white");
    $("input:password[name=pw]").css("background-image", "none");

    if($("input:password[name=pw]").val() == " ") {
      $("#eCheck1").show();
      $("input:password[name=pw]").css("border-color", "red");
    }
    else {
      $("input:password[name=pw]").css("border-color", "white");
      $("input:password[name=pw]").css("background-image", "url('check.png')");
      $("input:password[name=pw]").css("background-position", "330px center");
      $("input:password[name=pw]").css("background-size", "1em 1em");
      $("input:password[name=pw]").css("background-repeat", "no-repeat");
    }
  })
})

$(function() { // function for login button
  $("#loginBtn").click(function() {
    $("#valid1").hide(); // hide error messages
    $("#eCheck1").hide();
    $("#message").text("Enter user name and password: "); // show message
    $("#message").css("color", "white"); // initialize css
    if($("input:text[name=email]").val() != sessionStorage.email || $("input:password[name=pw]").val() != sessionStorage.pw) { // if email for password is different
    $("#message").text("Credential do not match"); // set message text and color
    $("#message").css("color", "red");
  }
  else {
    $("#buttons").hide(); // hide buttons and login tab and show final tab
    $("#loginTab").hide();
    $("#finalTab").show();
  }
  })
})
