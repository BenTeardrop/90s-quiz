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
let y = 0
let submitAnswer = document.getElementById('submit-btn');
let answerBox = document.getElementsByClassName('answer-box');
let correctAnswer = questionList[y].correctAnswer;

function showQuestion() {


    mainQuestions.innerHTML = questionList[y].question;
    answerA.innerHTML = questionList[y].answers[0];
    answerB.innerHTML = questionList[y].answers[1];
    answerC.innerHTML = questionList[y].answers[2];
}

let next = document.getElementById('next-question-btn')

function nextQuestion() {

    if (y < questionList.length - 1) {
        y = y + 1;
        showQuestion();
    } else {
        y = 0
        showQuestion();
    }

}

next.addEventListener('click', nextQuestion);
next.addEventListener('keypress', nextQuestion);

const answers = document.querySelectorAll('.answer-box');

// iterate over all answers and add event listener
answers.forEach(function (answer) {
    // when the element is clicked, do something 
    answer.onclick = function (event) {

        const text = event.target.innerText;
        if (text === questionList[y].correctAnswer) {
            alert('correct answer');
            addScore ()
            nextQuestion()
        } else {
            // answerBox.style.backgroundColor = 'red'
            alert('wrong answer');
            nextQuestion()
            answerA.innerHTML.style.backgroundColor = "red";
            
        }
    }
})

function addScore () {

    let scoreCount = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = scoreCount + 50;

}

showQuestion()