var startq = document.getElementById('start');
var timer = document.getElementById('timer');
var content = document.getElementById('content');
var questions = document.getElementById('questions');
var options = document.getElementById('options');
const question = [ 
  {q: "What does HTML stand for?",
  option:[ "Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Test Markup Language"],
  correct: "Hyper Text Markup Language"
  },
  {q: "In HTML, onblur and onfocus are:",
  option:[ "Event attributes", "Style attributes", "HTML elements"],
  correct: "Event attributes"
  },
  {q: "Where in an HTML document is the correct place to refer to an external style sheet?",
  option:[ "In the <head> section", "In the <body> section", "At the end of the document"],
  correct: "In the <head> section"
  },
  ]; 
  var i=0;
//score var

function start(){
    //timer TODO: change timeLeft value 
    var timeLeft = 15;
  
    content.innerHTML = "";
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
     if (timeLeft<=0){ //if timer reaches 0 gameover
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

function nextquestion() {
  i++;
}