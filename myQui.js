

 const questions = [
      {
        question : "when was Reethu born?",
        options :[
            {text : "21/09/2004" , correct : false},
            {text : "21/08/2003" , correct : false},
            {text : "21/08/2004" , correct : true},
            {text : "21/09/2003" , correct : false},

        ]
      },
      
      {
        question : "what is Reethu's favorite food?",
        options :[
            {text : "Biriyani" , correct : true},
            {text : "chicken" , correct : false},
            {text : "mutton" , correct : false},
            {text : "fish" , correct : false},
        ]
      },
      {
        question : "what is Reethu's favorite sport?",
        options :[
            {text : "cricket" , correct : false},
            {text : "football" , correct : false},
            {text : "tennis" , correct : false},
            {text : "none" , correct : true},
        ]
      },
      {
        question : "what is Reethu's favorite movie?",
        options :[
            {text : "pushpa" , correct : false},
            {text : "RRR" , correct : false},
            {text : "darling" , correct : true},
            {text : "3 idiots" , correct : false},
        ]
      },
      {
        question : "what is Reethu's favorite hobby?",
        options :[
            {text : "cooking" , correct : true},
            {text : "drawing" , correct : false},
            {text : "sleep" , correct : false},
            {text : "dance" , correct : false},
        ]
      },
      {
        question : "what is Reethu's favorite place?",
        options : [
            {text : "forest" , correct : false},
            {text : "home" , correct : false},
            {text : "hill-stations" , correct : false},
            {text : "beach" , correct : true},
        ]
      },
      {
        question : "what is Reethu's favorite dessert?",
        options :[
            {text : "waffle" , correct : true},
            {text : "icecream" , correct : false},
            {text : "cake" , correct : false},
            {text : "pastry" , correct : false},
        ]
      },
      {
        questions : "what is reethu's favorite cartoon",
        options :[
            {text : "shinchan" , correct : false},
            {text : "tom and jerry" , correct : true},
            {text : "doremon" , correct : false},
            {text : "magic wonderland" , correct : false},
        ]
      },
      {
        question : "what was Reethu's Birth place",
        options : [
            {text : "srikakulam" , correct : false},
            {text : "harayana" , correct : false},
            {text : "vijiyanagaram" , correct : true},
            {text : "vizag" , correct : false},
        ]
      }
    ] 
    
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("ans-btn");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0 ;
let score = 0 ;


function startQuiz(){

    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
    
}
function showQuestion(){
   resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1 ;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

   currentQuestion.options.forEach(answer => {
    const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
          button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    
   });

}

function resetState(){
  nextButton.style.display = "none";
  while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild)
  }
}
  function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
      selectedBtn.classList.add("correct");
      score++;
    }else{
      selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
      if(button.dataset.correct === "true"){
        button.classList.add("correct");
      }
      button.disabled = true;
    });
    nextButton.style.display = "block";
  }
function showScore(){
  resetState();
  questionElement.innerHTML = `you scored ${score} out of ${questions.length} !`;
  nextButton.innerHTML = "finish!";
  nextButton.style.display = "block";
}

 function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
      showQuestion();
    }else{
      showScore();
    }
  }

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
      handleNextButton();
    }
    // else{
    //   startQuiz();
    // }
  })

startQuiz();




 