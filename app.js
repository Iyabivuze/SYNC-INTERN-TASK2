// Questions 
const questionData = [
        {
            question:"Who is the current president of Rwanda?",
            a:"Kaguta Museveni",
            b:"Owulu Kenyata",
            c:"Paul kagame",
            d:"Donard Trump",
            correct: "c"
            
        },
        {
            question:"Who invented Computer",
            a:"Dieudonne Iyabivuze",
            b:"Henry Fischel",
            c:"Henry Matterson",
            d:"Jane Brian",
            correct: "b"
        },
        {
            question:"What is the best programming language?",
            a:"C",
            b:"C++",
            c:"JavaScript",
            d:"Java",        
            correct: "d"
        },
        {
            question:"What is the first cleanest city in Africa",
            a:"Johannesburg",
            b:"Accra",
            c:"Kigali",
            d:"Windhoek",        
            correct: "c"
        },
        {
            question:"Who is the top millionaire in India?",
            a:"Mukesh Ambani",
            b:"Lakshmi Mittal",
            c:"Shiv Nadar",
            d:"Gautam Adani",        
            correct: "a"
        },
        {
            question:"What is the biggest software company in the world?",
            a:"Microsoft",
            b:"Apple",
            c:"Google",
            d:"None",        
            correct: "a"
        },
    ]


const myQuiz = document.querySelector('.my-questions')
const question = document.getElementById('qns')
const nextBtn = document.getElementById('next')
const a_text = document.getElementById('a-text')
const b_text = document.getElementById('b-text')
const c_text = document.getElementById('c-text')
const d_text = document.getElementById('d-text')
const scoresEl = document.getElementById('score-content')
const restartBtn = document.getElementById('start-quiz')
const scoreBoard = document.querySelector('.scores')
const answerBtns = document.querySelectorAll('.answers')
const quizStatus = document.getElementById('comment')

    let currentQuizDataIndex = 0
    let scores = 0

    // Loading the quiz
    const loadQuiz = () => {
        const currentQuiz = questionData[currentQuizDataIndex]
        question.innerText = currentQuiz.question
        a_text.innerText = currentQuiz.a
        b_text.innerText = currentQuiz.b
        c_text.innerText = currentQuiz.c
        d_text.innerText = currentQuiz.d
    }
    loadQuiz()


    // Keeping account of the scores
    answerBtns.forEach((button) => {
        button.addEventListener('click', (event) => {
            const clickedButton = event.target
            const currentQuiz = questionData[currentQuizDataIndex]
            if(clickedButton.innerText === currentQuiz[currentQuiz.correct]){
                scores++
                console.log(scores)
            }
    })})
        
    // Checking if question is answered and
      let answeredCurrentQuestion = false; 
        answerBtns.forEach((button) => {
            button.addEventListener('click', () => {
                answeredCurrentQuestion = true;
            });
        });

        // Going to the next question
    nextBtn.addEventListener('click', () => {
        // Checking if question is selected before going to the next question
        if(answeredCurrentQuestion === false){
            alert("Provide an answer")
            return
        }
        // Checking if it is the last question
        if(currentQuizDataIndex < questionData.length-1){
            currentQuizDataIndex++
            loadQuiz()
        }else{
            myQuiz.style.display = "none"
            scoreBoard.style.display = "block"
            scoresEl.innerText = `You ansered correct ${scores}/${questionData.length} questions`

            if(scores > (1/2)*questionData.length){
                quizStatus.style.color = "#90EE90"
                quizStatus.style.textAlign = "center"
                quizStatus.innerText = "Hurrah... You are winning :)"
            }else{
                quizStatus.style.color = "red"
                quizStatus.style.textAlign = "center"
                quizStatus.innerText = "Oops... You are loosing ):  Try again!!!"
            }
        }
    })

    // Restarting the quiz
    restartBtn.addEventListener('click', () => {
        currentQuizDataIndex = 0
        scores = 0
        loadQuiz()
        myQuiz.style.display = "block"
        scoreBoard.style.display = "none"
    })
