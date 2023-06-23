// 04 Web APIs: Code Quiz

// Global variables declaration
    var startBtn = document.getElementById("startBtn");
    var clock = 60;
    var remainTime = true;
    var startTime= false;
    var countDown = document.getElementById("countDown");
    var mainContainer =  document.getElementById("mainContainer");
    var testContainer = document.getElementById("testContainer");
    var testHead = document.getElementById("testHead");
    var optionA = document.getElementById("optionA");
    var optionB = document.getElementById("optionB");
    var optionC = document.getElementById("optionC");
    var optionD = document.getElementById("optionD");
    var rightRespond = document.getElementById("rightRespond");    
    var high_scores= [];
    var output="";
    // Set score = 0 
    var score = 0;
    // test index
    let i = 0;

// Test ARRAY:

var testArray = [
{
    question: "Commonly used data types DO NOT include:",
    imageSrc: "",
    option: ["A) strings", "B) booleans", "C) alerts", "D) numbers"],
    rightRespond: 1
}, 
{
    question: "The condition in as if / else statements is enclosed within _________.",
    imageSrc: "",
    option: ["A) quotes", "B) curly brackets", "C) parentheses", "D) square brackets"],
    rightRespond: 2
},
{
    question: "Arrays in JavaScript can be used to store _________.",
    imageSrc: "",
    option: ["A) numbers and setings", "B) other arrays", "C) booleans", "D) all of the above"],
    rightRespond: 2
}, 
{
    question: "String values must be enclosed within __________ when beig assigned to variables.",
    imageSrc: "",
    option: ["A) commas", "B) curly brackets", "C) quotes", "D) parentheses"],
    rightRespond: 3
},
{
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    option: ["A) JavaScript", "B) terminal / bash", "C) for loops", "D) console.log"],
    rightRespond: 0
}];

//COUNTDOWN TIMER FUNCTION: set countdown timer and interval. Set time-related valiables.

//change the seconds variable every second.
var countdownInter = setInterval(setcountDown, 1000);

//function that changes the time var
function setcountDown() {
        if (startTime)
        clock--;
        if(clock<= 0) {
        end_quiz();
        clock = 0;    
        // clearInterval(countdownTimerInterval);
        //alert user and stop quiz
        }
        document.getElementById("timer").innerHTML = clock;
    }

// START EVENT LISTENER: When user clicks Start button, start the countdown timer and quiz questions. Add an event listener to each button.
startBtn.addEventListener("click", function() {
    testContainer.style.display = "block";
    mainContainer.style.display ="none";
    countDown.style.display= "block";
    document.getElementById("score_keeper").style.display= "block";
    document.getElementById("score").innerHTML = score;
    setcountDown();
    setQuizQuestions();
    startTime= true;
});

// QUESTIONS FUNCTION: display questions and multiple-choice answers

function setQuizQuestions() {
        testHead.textContent = testArray[i].question;
        optionA.textContent = testArray[i].option[0]; 
        optionB.textContent = testArray[i].option[1]; 
        optionC.textContent = testArray[i].option[2]; 
        optionD.textContent = testArray[i].option[3]; 
        };

// When user answers a question: then user is presented with another question

// Store user answer choices. Clear elements and update score count.

// Change to next question
optionA.addEventListener('click', function(event) {
        event.stopPropagation();
        rightRespond = testArray[i].rightRespond;
        console.log("rightRespond " + rightRespond);
        // check answer
        if (0 === rightRespond) { 
            // display message to user for 1  second stating if the answer is correct or incorrect
            document.getElementById("AnswerResponse").innerHTML = "Correct! Nailed it!";
            setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
            // when user answers a question correctly, increase the score
            score++;    
            // display updated score progress
            document.getElementById("score").innerHTML = score;
        } else {
            remainTime -= 5;
            // Answer inccorrect, 5 seconds are subtracted from the clock
            document.getElementById("AnswerResponse").innerHTML = "Incorrect! Better luck in the next one!";
            setTimeout(function() {
                document.getElementById("AnswerResponse").innerHTML = "";
                    },
                    1000
                );
        }
        if (i >= testArray.length -1) {
        end_quiz();
        } else {
            i++ 
            setQuizQuestions();
        };
    });

    optionB.addEventListener('click', function(event) {
    event.stopPropagation();
    rightRespond = testArray[i].rightRespond;
    console.log(rightRespond);
        if (1 === rightRespond) { 
            document.getElementById("AnswerResponse").innerHTML = "Correct! Nailed it!";
            setTimeout(function() {
                document.getElementById("AnswerResponse").innerHTML = "";
                    },
                    1000
                );
            score++;
            document.getElementById("score").innerHTML = score;
        } else {
            remainTime -= 5;
            document.getElementById("AnswerResponse").innerHTML = "Incorrect! Better luck in the next one!";
            setTimeout(function() {
                document.getElementById("AnswerResponse").innerHTML = "";
                    },
                    1000
                );
        }
        if (i >= testArray.length -1) {
        end_quiz();
        } else {
         i++ 
        setQuizQuestions();
        };
    });

    optionC.addEventListener('click', function(event) {
    event.stopPropagation();
    rightRespond = testArray[i].rightRespond;
    console.log(rightRespond);
    if (2 === rightRespond) { 
        document.getElementById("AnswerResponse").innerHTML = "Correct! Nailed it!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
        score++;
        document.getElementById("score").innerHTML = score;
    } else {
        remainTime -= 5;
        document.getElementById("AnswerResponse").innerHTML = "Incorrect! Better luck in the next one!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
    }
    if (i >= testArray.length -1) {
    end_quiz();
    } else {
        i++ 
        setQuizQuestions();
    };
    });

    optionD.addEventListener('click', function(event) {
    event.stopPropagation();
    rightRespond = testArray[i].rightRespond.value;
    console.log(rightRespond);
    if (3 === rightRespond) { 
        document.getElementById("AnswerResponse").innerHTML = "Correct! Nailed it!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
        score++;
        document.getElementById("score").innerHTML = score;
    } else {
        remainTime -= 5;
        document.getElementById("AnswerResponse").innerHTML = "Incorrect! Better luck in the next one!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
    }
    if (i >= testArray.length -1) {
       end_quiz();
    } else {
        i++ 
        setQuizQuestions();
    };
});

        //end quiz
        function end_quiz(){
            document.getElementById("game_over").style.display= "block";
            document.getElementById("testContainer").style.display="none";
            document.getElementById("countDown").style.display= "none";
            document.getElementById("score_keeper").style.display= "none";
            document.getElementById("AnswerResponse").innerHTML="";
            document.getElementById("end_score").innerHTML= score;
            }

        //submit score and initals
            function submit_score() {
             high_scores.push(document.getElementById("initials").value + " " + score);
             view_high_scores();
            }

        // localStorage.setItem("score",JSON.stringify(AnswerResponse));
        // localStorage.setItem("initials", JSON.stringify(initials));
        
        function view_high_scores(){
        
        // changing the screen output
            document.getElementById("testContainer").style.display="none";
            document.getElementById("game_over").style.display= "none";
            document.getElementById("high_scores_page").style.display="block";
        
            output="";
            for(let k=0; k<high_scores.length; k++){
                 output = output + "  " + high_scores[k];
            }
            document.getElementById("high_scores").innerHTML= output;                
             clear_up();
        }

        // refresh the site to the home container page
        function go_home(){	
                document.getElementById("high_scores_page").style.display= "none";
                document.getElementById("mainContainer").style.display= "block";
                clear_up();
        }
        
        // clear the highscore
        function clear_hs(){
            high_scores = [];
            // high_scores.splice(0, high_scores.length);
          }
        
        // refresh the site 
        function clear_up(){
        
        clock=60;
        remainTime=true;
        startTime=false;
        i=0;
        score=0;
        }
