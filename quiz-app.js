//Questions database
const STORE = [
    {
        question: "What is Lily's Patronus?",
        choices: [
            'Stag',
            'Doe',
            'Otter',
            'Jack Russel Terrier'
        ],
        correctAnswer:
            'Doe'
    },
    {
        question: 'Who was the first character casted in the Harry Potter Series?',
        choices: [
            'Harry Potter',
            'Dumbledore',
            'Hagrid',
            'Voldemort'
        ],
        correctAnswer: 'Hagrid'
    },
    {
        question: 'What was the name of the jokster poltergiest who roams Hogwarts messing with students?',
        choices: [
            'Nearly Headless Nick',
            'Peeves',
            'Bloody Baron',
            'Fat Friar'
        ],
        correctAnswer: 'Peeves'    
    },
    {
        question:'Which one is NOT one of the Unforgivable Curses?',
        choices: [
            'Crucio',
            'Repressio',
            'Imperio',
            'Avada Kedavra',
        ],
        correctAnswer: 'Repressio',
    },
    {
        question: "How old was Voldemort when he was defeated in the Battle of Hogwarts?",
        choices: [
            '80',
            '71',
            '53',
            '46'
        ],
        correctAnswer: '71'
    }
]

//STORING:
let score = 0;
let counter = 0;

//When first open the page
function firstQuizDisplay() {
    $('#quiz').hide();
}

//Start Quiz
function startQuiz() {
    $(".start-button").on('click', function (event) {
        console.log("start quiz button clicked")
        event.preventDefault();
        $('.start-button').hide();
        counter = 0;
        $('#questionNumber').text(counter+1);
        score = 0;
        $('.score').text(score);
        startQuizCounter();
    })
}

function startQuizCounter() {
    item = STORE[counter];
    populateQuestion();
}

// Populate questions
function populateQuestion() {
    console.log('Question ready for display');
    $('#quiz').show().html(`<p>${item.question}</p>
        <section class="quiz-display">
             <label for="options">
                <form action="submit">
                <input type="radio" name="Choice" value="${item.choices[0]}">${item.choices[0]}<br>
                <input type="radio" name="Choice" value="${item.choices[1]}">${item.choices[1]}<br>
                <input type="radio" name="Choice" value="${item.choices[2]}">${item.choices[2]}<br>
                <input type="radio" name="Choice" value="${item.choices[3]}">${item.choices[3]}<br>
                </form>
            </label>
            <br>
            <button type="button" class= "submit-button">Submit</button>
        </section>`);
    console.log('Question displayed');
    checkAnswer();
}

function updateCounter() {
    $(".next-button").on('click', function (event) {
        console.log('button clicked');
        counter +=1;
        if (counter < STORE.length) {
            $('#questionNumber').text(counter+1);
        }
        else if (counter === STORE.length) {
            finalResult();
            return
        } 
        console.log(counter);    
    startQuizCounter();  
    })
}

function checkAnswer() {
    $("input[type='radio']").on('click', function (event) {
        console.log('Radio button selected');
        choice = ($('input[name="Choice"]:checked').val());
        console.log(choice);
    });
    $('.submit-button').on('click', function (event) {   
        if (choice === item.correctAnswer) {
            correctAnswerFeedback();
        }
        else {
            incorrectAnswerFeedback();
        }
    });
}

function correctAnswerFeedback() {
    $('#quiz').show().html(`<p>RIGHT ANSWER!<p>
    <button type="button" class="next-button">Next</button>`)
    score +=1;
    $('.score').text(score);
    console.log(score);
    updateCounter();
}

function incorrectAnswerFeedback() {
    $('#quiz').show().html(`<p>WRONG ANSWER!<p>
    <button type="button" class="next-button">Next</button>`)
    updateCounter();
}

function finalResult() {
    $('#quiz').hide()
    $('.start-button').show().html(`<p>You're done! Wanna try again?<p>`);
    startQuiz();
}
    
//Reset Quiz

//Feedback (Correct and Incorrect)

//Next Question
function makeQuiz() {
    firstQuizDisplay();
    startQuiz();
}

makeQuiz();