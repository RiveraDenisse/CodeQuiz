var startq = document.getElementById('start');
var timer = document.getElementById('timer');
var content = document.getElementById('content');
var questions = document.getElementById('questions');
var options = document.getElementById('options');
const option0 = document.getElementById("options0");
var quizcontainer =document.getElementById("quizcontainer");
var results =document.getElementById("results");
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
var timeLeft = 75;
var showscore =0;
var timeInterval;
let inputInitials = document.getElementById("results");

function start(){

  timeLeft=75;
  document.getElementById('optionbutton').className="";
  //remove start button  
  content.innerHTML = "";
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  timeInterval = setInterval(function() {
    //if timer reaches 0 gameover
    if (timeLeft==0){ 
      console.log(timeLeft)
       //clearInterval(timeInterval);
       timer.innerHTML= "Game Over";
       gameEnd(); 
    }
    else {
      timer.innerHTML= timeLeft + " seconds";
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
    score++;
    //console.log (score);
  }
  //else -X to score && -5seconds to timerLeft
  else {
    alert("incorrect");
    score--;
    timeLeft = (timeLeft-wrongAnswer);
    //console.log(timeLeft);
  }
  if (i<question.length-1)
  //increment by 1 array question
  i++;
  else {
    //timeLeft=0;
    gameEnd ();
  } 
}

function gameEnd (){
  clearInterval(timeInterval);
  quizcontainer.className="hide";
  document.getElementById('results').className="";
};

document.getElementById('submit').addEventListener('click', function(event) {
  event.preventDefault();
  showscore = (score*100) + timeLeft;
  var userInitials = document.querySelector('#userinitials').value;
  
 //console.log(showscore);
  if (userInitials === '') {
    alert("Initials cannot be blank");
  } 
  else {
    alert('Initials submitted successfully');

    // Save email and password to localStorage using `setItem()`
    localStorage.setItem('userinitials', userInitials);
    // Render the last registered email and password
    HighScore();
  }
});

function HighScore() {
  //create variable for results section and hide them
  results.className="hide";
  document.getElementById('highscores').className="";
  // Retrieve highscore from localStorage using `getItem()`
  var highscores = localStorage.getItem('userinitials');
  //show initials and score on page
  document.getElementById('showinitials').innerHTML = highscores +" _score: " + showscore;
  }

function reset(){
  results.className="hide";
  highscores.className="hide";
  quizcontainer.className="";
  //reset score and start again
  score =0;
  showscore = 0;
  i=0;
  start();
  }