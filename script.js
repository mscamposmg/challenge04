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
    question: "What's HTML stands for?",
    imageSrc: "",
    option: ["A) High Market Lounge", "B) Hypertext Markup Language", "C) Historical monarchical logic", "D) High Total Mass Limits"],
    rightRespond: 1
}, 
{
    question: "How to initialize an existing directory as a Git repository.",
    imageSrc: "",
    option: ["A) git branche", "B) git clone [url]", "C) git init", "D) git log"],
    rightRespond: 2
},
{
    question: "What's CSS stands for?.",
    imageSrc: "",
    option: ["A) Colour Sensitive Sensor", "B) Completed Script Skills", "C) Cascading Style Sheets", "D) Coding Style Sheets"],
    rightRespond: 2
}, 
{
    question: "What defines the HTML Headings?",
    imageSrc: "",
    option: ["A) <p>", "B) <a>", "C) <p>", "D) <img>"],
    rightRespond: 2
},
{
    question: "Where in between does the JavaScript is inserted in HTML?",
    option: ["A) <script> and </script>", "B) <html> and </head>", "C) <html> and <body>", "D) <Body> and <html>"],
    rightRespond: 0
}];

//  Function DownCounter.

// call the function each 1 second
var countdownInter = setInterval(setcountDown, 1000);

//function that changes the time var
function setcountDown() {
        if (startTime)
        clock--;
        if(clock<= 0) {
        end_quiz();
        clock = 0;    

        }
        document.getElementById("timer").innerHTML = clock;
    }

// Add funcionality to the button.
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

// Display the questions

function setQuizQuestions() {
        testHead.textContent = testArray[i].question;
        optionA.textContent = testArray[i].option[0]; 
        optionB.textContent = testArray[i].option[1]; 
        optionC.textContent = testArray[i].option[2]; 
        optionD.textContent = testArray[i].option[3]; 
        };

// Add funcionality to the answer's buttons
optionA.addEventListener('click', function(event) {
        event.stopPropagation();
        rightRespond = testArray[i].rightRespond;
        console.log("rightRespond " + rightRespond);
        // verify all answers
        if (0 === rightRespond) { 
            // Show correct or incorrect message by 1 second
            document.getElementById("AnswerResponse").innerHTML = "Correct! Nailed it!";
            setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
            // increase the score in case the player makes the right choice
            score++;    
            document.getElementById("score").innerHTML = score;
        } else {
            remainTime -= 5;
            // decrease the clock in 5 seconds in case the player makes the wrong decision
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

        // the quiz is finilized here
        function end_quiz(){
            document.getElementById("game_over").style.display= "block";
            document.getElementById("testContainer").style.display="none";
            document.getElementById("countDown").style.display= "none";
            document.getElementById("score_keeper").style.display= "none";
            document.getElementById("AnswerResponse").innerHTML="";
            document.getElementById("end_score").innerHTML= score;
            }

        // the score is submited
            function submit_score() {
             high_scores.push(document.getElementById("initials").value + " " + score);
             view_high_scores();
            
            }
            

        function view_high_scores(){
        
        // change de screen e show the result of the quiz
            document.getElementById("testContainer").style.display="none";
            document.getElementById("game_over").style.display= "none";
            document.getElementById("high_scores_page").style.display="block";
        
            output="";
            for(let k=0; k<high_scores.length; k++){
                 output = output + "  " + high_scores[k];
            }
            document.getElementById("high_scores").innerHTML= output;                
             clear_up();

            localStorage.setItem("high_score", high_scores);

        }

        // refresh the site to the home container page
        function go_home(){	
                document.getElementById("high_scores_page").style.display= "none";
                document.getElementById("mainContainer").style.display= "block";
                clear_up();
        }
        
        // reset the score
        function clear_hs(){
            high_scores = [];
          }
        
        // reset the webpage
        function clear_up(){
        
        clock=60;
        remainTime=true;
        startTime=false;
        i=0;
        score=0;
        }
