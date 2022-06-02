const quizData = [
    {
        question: 'How old are you',
        a:'10',
        b:'522',
        c:'54',
        d:'25',
        correct: 'd'
    },{
        question:"What is the most used programing language in 2021",
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct:'d'
    },{
        question: 'Who is the President of US?',
        a:'Florin Pop',
        b:'Donald Trump',
        c: 'Ivan Saldano',
        d: 'Joe Biden',
        correct:'d'
    },{
        question: 'What does HTML stand for',
        a:'Hot Topic Master Language',
        b:'Hypertext Markup Language',
        c:'Hyper Tank Markup Lecture',
        d: 'Hyper Text Marker Lecture',
        correct:'a'
    },{
        question:'What year was JavaScript launched ?',
        a:'1990',
        b:'2018',
        c:'1998',
        d:'none of the above',
        correct:'d'
    }
]
const questionEl =document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById('submit');


let currentQuiz = 0;

loadQuiz();

function loadQuiz()
{
    const currentQuizData=quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;

    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;

}
submitBtn.addEventListener("click", () =>{
    currentQuiz++;
    if(currentQuiz< quizData.length)
    {
        loadQuiz();
    }
    else{
        alert("You finished! Get yourself an Orange ")
    }
    loadQuiz();
});