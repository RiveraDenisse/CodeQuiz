var startq = document.getElementById('start');
var timer = document.getElementById('timer');
var content = document.getElementById('content');
var questions = document.getElementById('questions');
var options = document.getElementById('options');
const option0 = document.getElementById("options0");
const question = [ 
  {q: "What does HTML stand for?",
  option:[ "Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Test Markup Language"],
  correct: "options0"
  },
  {q: "In HTML, onblur and onfocus are:",
  option:[ "Event attributes", "Style attributes", "HTML elements"],
  correct: "options0"
  },
  {q: "Where in an HTML document is the correct place to refer to an external style sheet?",
  option:[ "In the <body> section", "In the <head> section", "At the end of the document"],
  correct: "options1"
  },
  ]; 
var i=0;
var score = 0;
const wrongAnswer = 5;
var timeLeft = 15;

function start(){
    //timer TODO: change timeLeft value 
   
  
    content.innerHTML = "";
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
     if (timeLeft<=0){ //if timer reaches 0 gameover
      console.log(timeLeft)
       clearInterval(timeInterval);
       timer.innerHTML= "Game Over"; 
     }
     else {
        timer.innerHTML= timeLeft + " seconds";
        //start quiz
        var displayQuestion = question[i].q;      
        questions.innerHTML = displayQuestion;
        //display options
        var displayOption = question[i].option;
        //will display options on each div accordingly (options0,options1..)
        for (var q=0; q<displayOption.length; q++){
          document.getElementById("options"+q).innerHTML=displayOption[q];

        }
        //create an eventListener
        document.getElementById("option")
        //once element is clicked then it will move to next question
     }
     timeLeft--;
    },1000)
}

function nextquestion(answer) {
 
  
  //if selected option is correct then add X to score
  if (answer==question[i].correct){
    alert("correct");
    score ++;
    console.log (score);
  }
   //else -X to score && -5seconds to timerLeft
  else {
    alert("incorrect");
    score --;
    //TODO: make variable to reduce timer by 5seconds
    timeLeft = (timeLeft-wrongAnswer);
    console.log(timeLeft);
  }
  //increment by 1 array question
  i++;
  console.log(i)
}