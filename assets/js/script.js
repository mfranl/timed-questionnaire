//variables save dto global memory
var timeEl = document.querySelector(".time");
var startQuiz = document.getElementById("startQuizButton");
var questionSection = document.getElementById("question-section")
var question = document.getElementById("question");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var rightWrong = document.getElementById("right-wrong");
var userDetails = document.getElementById("user-details");
var userName = document.getElementById("username");
var saveUser = document.getElementById("saveuser");
var scoreDisplay = document.getElementById("score-display");
var secondsLeft = 60;
var currentQuestionIndex = 0
var correctAnswer = 0
var incorrectAnswer = 0
var timerInterval;


option1.addEventListener("click", checkOption)
option2.addEventListener("click", checkOption)
option3.addEventListener("click", checkOption)
option4.addEventListener("click", checkOption)

saveUser.addEventListener("click", saveUserInfo)



//keeps hidden when first loaded
questionSection.style.display = "none"

userDetails.style.display = "none"

startQuiz.addEventListener("click", function(){
    questionSection.style.display = "block"
    startQuiz.style.display = "none"
        setTime()
    beginQuiz()
})


//function saves info to make a timer start when start button is pressed
function setTime() {
    timerInterval = setInterval(function() {
        secondsLeft--;
        //makes the time appear on screen
        timeEl.textContent = secondsLeft;

        if(secondsLeft <= 0) {
            endQuiz();
            
        }
        //makes sure the time is in seconds
    }, 1000);
}




var questions = [
    {
        title: "What color is best?",
        choices: ["Blue", "Orange", "Yellow", "Pink"],
        answer: 0
    },

    {
        title: "What is the best month?",
        choices: ["July", "October", "December", "March"],
        answer: 1
    },

    {
        title: "The answer is really big.",
        choices: ["Really Big", "THE ANSWER", "idk man", "a cow"],
        answer: 0
    }
]

//
function beginQuiz() {
    question.textContent = questions [currentQuestionIndex].title
    option1.textContent = questions [currentQuestionIndex].choices[0]
    option2.textContent = questions [currentQuestionIndex].choices[1]
    option3.textContent = questions [currentQuestionIndex].choices[2]
    option4.textContent = questions [currentQuestionIndex].choices[3]

}


function checkOption() {
var userChoice = this.getAttribute("data-value");



if (userChoice == questions[currentQuestionIndex].answer) {
    correctAnswer++;
    rightWrong.textContent = "Correct!!"

}else {
    incorrectAnswer++;
    secondsLeft = secondsLeft - 15;
    rightWrong.textContent = "Wrong!!";
}

if (currentQuestionIndex < questions.length-1) {
    currentQuestionIndex++;
    beginQuiz();
} else {
    console.log("right answer", "correct answer")
endQuiz()
}

}

function endQuiz() {
    clearInterval(timerInterval);
    questionSection.style.display = "none";
    
    userDetails.style.display = "block";
    scoreDisplay.textContent = "You got a score of " + secondsLeft
    //multiple the correct answer with the time remaining --- after i get the timer set up
}

function saveUserInfo() {
    console.log(saveUser)
}