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
    question: 'Which artist sang the song "Oh, Pretty Woman" from the film Pretty Woman?',
    answers: ['Roy Orbison', 'Johnny Cash', 'clint Eastwood'],
    correctAnswer: 'Roy Orbison',
}, {
    question: 'Which artist sang the hit "Unchained Melody" from the film Ghost?',
    answers: ['The Righteous Brothers', 'The Isley brothers', 'The Blues Brothers'],
    correctAnswer: 'The Righteous Brothers',
}, {
    question: 'In the 1991 film "Boyz n the Hood", which famous rapper starred alongside Cuba Gooding Jnr?',
    answers: ['Ice-T', 'Ice Cube', 'Vanilla Ice'],
    correctAnswer: 'Ice Cube',
}, {
    question: 'Which colored pill does Neo take in the "Matrix"?',
    answers: ['Red', 'Green', 'Blue'],
    correctAnswer: 'Red',
}, {
    question: 'What date is "Groundhog Day"?',
    answers: ['March 31st', 'July the 14th', 'February 2nd'],
    correctAnswer: 'February 2nd',
}, {
    question: 'Which box office smash about nuns starred Whoopi Goldberg?',
    answers: ['Sister Act', 'ghost', 'the color purple'],
    correctAnswer: 'Sister Act',
}, {
    question: '90s smash hit film Cruel Intentions is loosely based on which French novel?',
    answers: ['Intense Liaisons', 'Dangerous Liaisons', 'Forbidden Liaisons'],
    correctAnswer: 'Dangerous Liaisons',
}]

let answerA = document.getElementById('a');
let answerB = document.getElementById('b');
let answerC = document.getElementById('c');
let mainQuestions = document.getElementById('main-questions');
let questionIndex = 0
const answers = document.querySelectorAll('.answer-box');
let next = document.getElementById('next-question-btn');
let back = document.getElementById('return-btn')



function showQuestion() {
    mainQuestions.innerHTML = questionList[questionIndex].question;
    answerA.innerHTML = questionList[questionIndex].answers[0];
    answerB.innerHTML = questionList[questionIndex].answers[1];
    answerC.innerHTML = questionList[questionIndex].answers[2];
    resetOptionStyle() 
}

function resetOptionStyle() {
    let answerBoxes = document.getElementsByClassName('answer-box')
    for (var i=0; i < answerBoxes.length; i++) {
        answerBoxes[i].style.backgroundColor = "transparent";
        answerBoxes[i].style.pointerEvents = "auto";
        answerBoxes[i].style.color = "#49ff15";
    }
}


function showNextQuestion() {

    if (questionIndex < questionList.length - 1) {
        questionIndex = questionIndex + 1;
        showQuestion();

    } else {
        // Game over scenario
        mainQuestions.innerHTML = "<h1 id='game-over'>Game over!</h1>";
        document.getElementById('answers').style.display = 'none';
        next.style.display = 'none';
        addEventListener('keypress', reloadGame)

    }

}

function reloadGame() {
    window.location.reload();
}

function incrementCorrectAnswer () {
    let addScoreCount = parseInt(document.getElementById("right_answers").innerText);
    document.getElementById("right_answers").innerText = addScoreCount + 1;
}

function incrementWrongAnswer () {
    let wrongAnswerCount = parseInt(document.getElementById("wrong_answers").innerText);
    document.getElementById("wrong_answers").innerText = wrongAnswerCount + 1;

}

function disableOptions() {
    let answerBoxes = document.getElementsByClassName('answer-box')
    for (var i=0; i < answerBoxes.length; i++) {
        answerBoxes[i].style.pointerEvents = "none";
    }
}

function onOptionClick(event) {
    disableOptions();
    const eventTarget = event.target;
    const selectedAnswer = eventTarget.innerText;
    if (selectedAnswer === questionList[questionIndex].correctAnswer) {
        incrementCorrectAnswer();
        eventTarget.style.backgroundColor = "#49ff15";
        eventTarget.style.color = "black";
    } else {
        incrementWrongAnswer()
        eventTarget.style.backgroundColor = "red";
    }
}

function initEventListeners() {
    answers.forEach(function (answer) {
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