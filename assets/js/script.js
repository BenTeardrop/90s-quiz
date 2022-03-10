let questionList = [{
    question: 'what car was the time machine in Back to the future?',
    answers: ['Porshe', 'Ford', 'Deloreane'],
    correctAnswer: 'Deloreane'
}, {
    question: 'what model T was the bady in terminator 2?',
    answers: ['T-total', 'T-1000', 'T-2000'],
    correctAnswer: 'T-2000'
}, {
    question: 'What year was forest gump released?',
    answers: ['1991', '1994', '1996'],
    correctAnswer: '1994',
}, {
    question: 'Which artist sang the song “Oh, Pretty Woman” from the film Pretty Woman?',
    answers: ['Roy Orbison', 'Johnny Cash', 'clint Eastwood'],
    correctAnswer: 'Roy Orbison',
}, {
    question: 'Which artist sang the hit “Unchained Melody” from the film Ghost?',
    answers: ['The Righteous Brothers', 'The Isley brothers', 'The Blues Brothers'],
    correctAnswer: 'The Righteous Brothers',
}]

let answerA = document.getElementById('a');
let answerB = document.getElementById('b');
let answerC = document.getElementById('c');
let mainQuestions = document.getElementById('main-questions');
let questionIndex = 0
const answers = document.querySelectorAll('.answer-box');
let next = document.getElementById('next-question-btn');
let back = document.getElementById('return-btn')

// let restart = window.location.reload();


function showQuestion() {
    mainQuestions.innerHTML = questionList[questionIndex].question;
    answerA.innerHTML = questionList[questionIndex].answers[0];
    answerB.innerHTML = questionList[questionIndex].answers[1];
    answerC.innerHTML = questionList[questionIndex].answers[2];
    selectedAnswer.style.color = '#49ff15'
}


function showNextQuestion() {
    if (questionIndex < questionList.length - 1) {
        questionIndex = questionIndex + 1;
        showQuestion();
        
    } else {
        // Game over scenario
        mainQuestions.innerHTML = `Game over! your score is`;
        document.getElementById('answers').style.display = 'none';
        next.style.display = 'none';
        // window.location.reload();
        addEventListener('keypress', reloadGame)
        
    }
    
}

function reloadGame() {

    window.location.reload();

}

function incrementScore () {
    let scoreCount = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = scoreCount + 50;
}

function onOptionClick(event) {
    const eventTarget = event.target;
    const selectedAnswer = eventTarget.innerText;
    if (selectedAnswer === questionList[questionIndex].correctAnswer) {
        incrementScore();
        // eventTarget.style.backgroundColor = "#49ff15";
        // eventTarget.style.color = "black";
    } else {
        eventTarget.style.color = "red";
    }
}

function initEventListeners() {
    // iterate over all answers and add event listener
    answers.forEach(function (answer) {
        // when the element is clicked, do something
        answer.onclick = onOptionClick;
    });

    next.addEventListener('click', showNextQuestion);
    addEventListener('keypress', showNextQuestion);
}

function startGame() {
    initEventListeners();
    showQuestion()
}

startGame();