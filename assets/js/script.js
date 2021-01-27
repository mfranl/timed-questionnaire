var timeEl = document.querySelector(".time");
var startQuiz = document.getElementById("startQuizButton");
var questionSection = document.getElementById("question-section")
var question = document.getElementById("question");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var secondsLeft = 60;
var currentQuestionIndex = 0


//keeps hidden when first loaded
questionSection.style.display = "none"

startQuiz.addEventListener("click", function(){
    questionSection.style.display = "block"
    startQuiz.style.display = "none"

    beginQuiz()
})



function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            
        }
    }, 1000);
}

setTime();


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
var userChoice = this.getAttribute("data-value")
console.log(userChoice)
}