var questions = [
    {
        question: 'Css stand for_____',
        options: ['css', "Cascade styling sheet", "CSS"],
        correctAnswer: 'Cascade styling sheet',
    },
    {
        question: 'Js stand for_____',
        options: ['css', 'JavaScript', 'Js'],
        correctAnswer: 'JavaScript',
    },
    {
        question: 'Html stand for_____',
        options: ['css', 'HTML', 'jS'],
        correctAnswer: 'HTML',
    },
    {
        question: 'HTML stand for_____',
        options: ['css', 'HTML', 'jS'],
        correctAnswer: 'HTML',
    },
    {
        question: 'Dom stand for_____',
        options: ['css', 'HTML', 'Document Object Model'],
        correctAnswer: 'Document Object Model',
    },
];



var question = document.getElementById("question")
var currentQuestion = document.getElementById("currentQuestion")
var totalQuestions = document.getElementById("totalQuestions")
var answerParent = document.getElementById("answerParent")
var indexNumber = 0;
var Score = 0;

function startQuiz(){
    question.innerHTML = questions[indexNumber].question;
    answerParent.innerHTML ="";
    for (var i=0; i < questions[indexNumber].options.length; i++) {
        answerParent.innerHTML += `<div class="col-md-6 py-2">
        <button onclick="checkQuestion(this,${questions[indexNumber].options[i]},${questions[indexNumber].correctAnswer})" class="btn w-100 btn-info">${questions[indexNumber].options[i]}</button>
        </div>`;
    }
    totalQuestions.innerHTML = questions.length;
    currentQuestion.innerHTML = indexNumber + 1;
}

startQuiz();

function nextQuestion(){
    if (indexNumber == questions.length -1) {
        alert("quiz completed");
    } else {
        indexNumber = indexNumber + 1 ;
        startQuiz();
    }
}

function checkQuestion(userOption, correctoption) {
    var userOption = elem.innerHTML;
    if (userOption == correctOption) {
        Score = Score + 1;
    }

    console.log(Score);
    var allOptionBtns = answerParent.getElementsByTagName("BUTTON");
    for (var i = 0; i < allOptionBtns.length; i++) {
        allOptionBtns[i].disabled = true;
        if (allOptionBtns[i].innerHTML == correctOption){
            allOptionBtns[i].className += "bg-success";
        } else{
            allOptionBtns[i].className += "bg-danger";
        }
    }
}

