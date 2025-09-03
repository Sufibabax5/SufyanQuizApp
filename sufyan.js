 let questions = [
    {
        question:"Which HTML tag is used to define the largest heading?",
        option:["heading","h6","h1","head"],
        correctAnswer:"h1",
        time:60,
        marks:2
    },
    {
        question:"Which attribute is used in HTML to add a link?",
        option:["src","href","link","ref"],
        correctAnswer:"href",
        time:60,
        marks:2
    },
    {
        question:"Which CSS property is used to change text color?",
        option:["font-style","text-color","color","bg-color"],
        correctAnswer:"color",
        time:60,
        marks:2
    },
    {
        question:"In JavaScript, which keyword is used to declare a constant variable?",
        option:["var","let","const","constant"],
        correctAnswer:"const",
        time:60,
        marks:2
    },
    {
        question:"React is mainly used for:",
        option:["Backend development","Database management","Building user interfaces","Operating system design"],
        correctAnswer:"Building user interfaces",
        time:60,
        marks:2
    },
    {
        question:"Which symbol is used for comments in JavaScript (single-line)?",
        option:["!-- comment --","// comment","/* comment */","** comment **"],
        correctAnswer:"// comment",
        time:60,
        marks:2
    },
    {
        question:"CSS stands for:",
        option:["Computer Style Sheets","Creative Style Sheets","Cascading Style Sheets","Colorful Style Sheets"],
        correctAnswer:"Cascading Style Sheets",
        time:60,
        marks:2
    },
    {
        question:"Which function is used to print something in the browser console in JavaScript?",
        option:["alert()","document.write()","console.log()","print()"],
        correctAnswer:"console.log()",
        time:60,
        marks:2
    },
    {
        question:"Which hook is commonly used in React for handling side effects?",
        option:["useEffect","useState","useContext","useReducer"],
        correctAnswer:"useEffect",
        time:60,
        marks:2
    },
    {
        question:"Which of the following is the correct way to declare an array in JavaScript?",
        option:["var colors = 'red', 'green', 'blue'","var colors = [\'red\', \'green\', \'blue\']"," var colors = (1:\'red\', 2:\'green\', 3:\'blue\')","var colors = {\'red\', \'green\', \'blue\'}"],
        correctAnswer:"var colors = [\'red\', \'green\', \'blue\']",
        time:60,
        marks:2
    }
]

let currentQuestionIndex = 0;
let score = 0;
let countdown;   // global variable ban gaya

let question1 = document.getElementById("question")
let option1 = document.getElementById("options")
let nextbtn = document.getElementById("next-btn")
let restartBtn = document.getElementById("restartBtn");

restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;

    loadQuestions();
    nextbtn.style.display = "none";
    clearInterval(countdown); 
    startTimer(10);
});

function loadQuestions () {
let currentQuestion = questions[currentQuestionIndex]
question1.textContent = currentQuestion.question
options.innerHTML = ""

currentQuestion.option.forEach(options=>{
    let button = document.createElement("button")
    button.textContent = options
    button.onclick = () => selectAnswer(options)
    option1.appendChild(button)
})
}
function selectAnswer(option){
    let correct = questions[currentQuestionIndex].correctAnswer
    if(option ===  correct){
        score ++ ;
    }else {
    }
     nextbtn.style.display = "block";
}
loadQuestions();

nextbtn.addEventListener("click",()=>{
    currentQuestionIndex ++
    if (currentQuestionIndex < questions.length){
        loadQuestions()
        nextbtn.style.display = "none";
    }else{
        showResult();
    }
})

function showResult(){
    question1.textContent = `Quiz Completed Successsfully`
    option1.innerHTML = `Score:${score} / ${questions.length}`
    nextbtn.style.display = "none";
}
function startTimer(durationInMinutes) {
  let time = durationInMinutes * 60;
  let timerEl = document.getElementById("timer");

  let countdown = setInterval(() => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (seconds < 1) {
      seconds = "0" + seconds;
    }

    timerEl.textContent = `Time Left: ${minutes}:${seconds}`;
    time--;

    if (time < 0) {
      clearInterval(countdown);
      timerEl.textContent = "Time Over ⏰";
      showResult();
    }
  }, 1000);
}
clearInterval(countdown);
startTimer(10);