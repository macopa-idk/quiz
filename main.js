const question = document.querySelector("#question");
const option1 = document.querySelector("#op1");
const option2 = document.querySelector("#op2");
const option3 = document.querySelector("#op3");
const option4 = document.querySelector("#op4");
const scoreDisplay = document.querySelector("#score");
const submitBtn = document.querySelector("#submit");
const allOptions = [option1, option2, option3, option4];

let score = 0;
let level = 0;
let answerChosen = true;

const questions = [
    {
        question: "რა არის π-ს პირველი 4 ციფრი?",
        options: [3.141, 3.145, 3.149, 3.111],
        correctAnswer: 3.141,
        completed: false
    },
    {
        question: "რა ქვია ფროდოს მახვილს?",
        options: ['"sting"', '"Glamdring"', '"string"', '"nectar"'],
        correctAnswer: '"sting"',
        completed: false
    },
    {
        question: "რა არის ყველაზე დიდი ცხოველი, რომელსაც დედამიწაზე ოდესმე უცხოვრია?",
        options: ["Supersaurus", "Argentinosaurus", "ლურჯი ვეშაპი", "დედაშენი"],
        correctAnswer: "ლურჯი ვეშაპი",
        completed: false
    },
    {
        question: "რამდენი ნადირი მოინადირეს სულ ავთანდილმა და როსტევანმა?",
        options: [200, 1000, 100, 300],
        correctAnswer: 200,
        completed: false
    },
    {
        question: "მინიმუმ რამდენი ხინკალი უნდა ჭამო, ღორად რომ ჩაითვალო?",
        options: [99, 1000, 100, 2],
        correctAnswer: 100,
        completed: false
    },
    {
        question: 'რას ნიშნავს აბრევიატურა "HTML" ვებ დეველოპმენტში?',
        options: ["HyperText Markup Language", "HyperText Transfer Method", "HyperTech Terminal Module", "Hyperlink and Text Markup Language"],
        correctAnswer: "HyperText Markup Language",
        completed: false
    },
    {
        question: "რა არის სამყაროს ხე სკანდინავიურ მითოლოგიაში?",
        options: ["იგდრასილი", "ცნობიერების ხე", "ბაიფროსტი", "აუდჰუმბლა თუ აუჰუმბა (არ ვიცი, თარგმანი ვერ ვნახე)"],
        correctAnswer: "იგდრასილი",
        completed: false
    },
    {
        question: "რა არის სამი ძირითადი ფერი?",
        options: ["წითელი, ლურჯი, ყვითელი", "წითელი, მწვანე, ლურჯი", "შავი, თეთრი და შავთეთრი", "წითელი, მწვანე, ყვითელი"],
        correctAnswer: "წითელი, ლურჯი, ყვითელი",
        completed: false
    },
    {
        question: "ზევსის რომელი შვილი დაიბადა მისი თავიდან?",
        options: ["ათენა", "ჰეფესტო", "ჰერმესი", "ჰერა"],
        correctAnswer: "ათენა",
        completed: false
    },
    {
        question: "რას უდრის c-სინათლის სიჩქარე ვაკუუმში",
        options: ["299,792,458 მ/წმ" , "300,792,458 მ/წმ", "300,000,000 მ/წმ", "200,792,458 მ/წმ"],
        correctAnswer: "299,792,458 მ/წმ",
        completed: false
    },
    
]
const maxScore = questions.length;

//Next question

const assignOptions = (arr) => arr.splice(Math.floor(Math.random() * arr.length), 1)[0];

function newQuestion(str, options){
    question.textContent = str
    option1.textContent = assignOptions(options);
    option2.textContent = assignOptions(options);
    option3.textContent = assignOptions(options);
    option4.textContent = assignOptions(options);

    allOptions.forEach(function(option){
        option.classList.remove('red', 'green');
    });

    level +=1;
    answerChosen = false;
}

//determine correct answers

function clickHandler(event) {
    if (questions[level - 1].completed === false) {
        questions[level - 1].completed = true;
        let clickedButtonContent = event.target.textContent;

        if (String(clickedButtonContent) === String(questions[level - 1].correctAnswer)) {
            score += 1;
        }

        allOptions.forEach(function(currentValue){
            if(String(currentValue.textContent) === String(questions[level - 1].correctAnswer)){
                currentValue.classList.add('green');
            }else{
                currentValue.classList.add('red');
            }
        });
    }
    answerChosen = true;
    scoreDisplay.textContent = `Score ${score}`;
}

//start the quiz

function start(){
    score = 0;
    level = 0;

    newQuestion(questions[level].question, questions[level].options);

    option1.addEventListener("click", clickHandler);
    option2.addEventListener("click", clickHandler);
    option3.addEventListener("click", clickHandler);
    option4.addEventListener("click", clickHandler);

    submitBtn.addEventListener("click", function() {
        if (answerChosen == true) {
            if (level < questions.length) {
                newQuestion(questions[level].question, questions[level].options);
            } else {
                document.querySelector('#container').style.display = 'none'
                document.querySelector('#end').textContent = `Quiz is finished. Your final score is: ${score}/${questions.length}`
            }
        }else {
            alert("Please pick an answer");
        }
    });

}
start();