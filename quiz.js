const quiz=[
    {
        question:"what is the full form of HTML?",
        a:"Hyper Text MarkUp Language",
        b:"Hyper Text MarkUp Language",
        c:"Hyper Text MarkUp Language",
        d:"Hyper Text MarkUp Language",
        ans:"ans1"
    },
    {
        question:"what is the full form of CSS?",
        a:"Cascading Style Sheeat",
        b:"Cascading Style Seeat",
        c:"Cascading Stle Sheeat",
        d:"Cascading Style Sheet",
        ans:"ans4"
    },
    {
        question:"what is the full form of JS?",
        a:"JavaScript",
        b:"JaaScript",
        c:"Javacript",
        d:"JavaScipt",
        ans:"ans1"
   
    },
    {
        question:"what is the full form of JV?",
        a:"Jva",
        b:"Jav",
        c:"Java",
        d:"Jaa",
        ans:"ans3"
    }
];
   const question=document.querySelector('.question');
  const option1=document.querySelector('#option1');
  const option2=document.querySelector('#option2');
  const option3=document.querySelector('#option3');
  const option4=document.querySelector('#option4');
  const submit=document.querySelector('#submit');
  const answers=document.querySelectorAll('.answer');

  let quizCounter=0;
  let score=0;
 

 const loadQuestion=()=>{
        quizList=quiz[quizCounter];

        question.innerText=quizList.question;
        option1.innerText=quizList.a;
        option2.innerText=quizList.b;
        option3.innerText=quizList.c;
        option4.innerText=quizList.d;

 }
 loadQuestion();
  


 const getCheckAnswer=()=>{
  
    let answer;
 answers.forEach((CurAnsElem)=>{
      if(CurAnsElem.checked){
          answer=CurAnsElem.id;
          
      }
 });
 return answer;
 };
  

 const deselectAll=()=>{
     answers.forEach((curAnsElem) =>curAnsElem.checked=false);
 }
 submit.addEventListener('click',()=>{
    const checkedAnswer= getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer == quiz[quizCounter].ans){
        score++;
      }
      quizCounter++;
      
      deselectAll();
      
  
      if(quizCounter<quiz.length){
           loadQuestion();
      }
      else{
      scoreshow.innerHTML=
        `<h4> your score has ${score} of ${quiz.length}</h4>
        <button class="btn" onclick="location.reload()">play again </button>`;

        scoreshow.classList.remove("scorearea");
    }
});