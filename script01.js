

  var response = prompt("what's your name?");
  alert("Hellow "+response+" Nice to meet you. I want to share a story with you:D ");


  function enterAnswer(){
    var answer = prompt("1+1=?");
    if (answer) {
      document.getElementById("answers").innerHTML = "Your answer is:_____" + answer;
    }
    if (answer === "2"){
      alert("yes!!!   Go ahead and press the left button:D!!!")
    }
    else{
      alert("It seems that you can only press the button on the right : (")
    }
  }
  function enterAnswer01(){
alert("Okay... The answer is 2; )");
  }
