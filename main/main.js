import {infoBox,startBtn,infobtn,quizBox,nextBtn,resultBox} from "../Question/function.js";
import questions from  "../Question/question.js"; // all question insertedd
//let [qs1,qs2,qs3,qs4,qs5]=questions;  //destructring Array - All Question and Ans and Option
let totalQ=0;
//strt butn function
startBtn.addEventListener("click",()=>{
    infoBox.style.display="block";
});
//infobox bottom btn
for( let i=0; i<infobtn.length;i++){
    if(i===0){
        infobtn[i].addEventListener("click",()=>{
            infoBox.style.display="none"; 
       });
    }
    else{
        infobtn[i].addEventListener("click",()=>{      //continue btn click then show Question      
            infoBox.style.display="none";  
            showQuetions(0);//sent index to function
            quizBox.style.display="block"; 
       });
    }
}

//next btn
nextBtn.addEventListener("click",()=>{
    if(totalQ < questions.length -1){
        totalQ++;
        showQuetions(totalQ);
    }
    else{
        resultBox.style.display="block";
        quizBox.style.display="none"; 
    }
});


function showQuetions(index){
    qNO.innerText=`${questions[index].numb}`;
    questionName.innerText=`${questions[index].question}`;
    allOption.innerHTML=`
    <div class="optionBox">
        <span>${questions[index].options[0]}</span>
    </div>
    <div class="optionBox" >
        <span>${questions[index].options[1]}</span>
    </div>
    <div class="optionBox">
        <span>${questions[index].options[2]}</span>
    </div>
    <div class="optionBox">
        <span>${questions[index].options[3]}</span>
    </div>
        `;
        let options = document.querySelectorAll(".optionBox");
        for(let i=0; i<options.length;i++){
            options[i].onclick=function(){
                selectOption(this);
            }
        }
       
}

function selectOption(answer){
  let uAns=answer.textContent;
  let CurectAns=questions[totalQ].answer;
  const userAns=uAns.trim();
  let options = document.querySelectorAll(".optionBox");
    for(let o=0; o<options.length; o++){
        let uA=options[o].textContent;
        let ansFilter =uA.trim()==CurectAns;
            if(ansFilter==true){
                answer.style.color="red";
            }
    }
  /*if(userAns==CurectAns){
    answer.style.color="green";
   
  }
  else{
    let options = document.querySelectorAll(".optionBox");
    for(let i=0; i<options.length;i++){
        if(!options[i].textContent==CurectAns){
            options[i].style.color="red";
        }
        else{
            alert("");
        }
    }
  }*/



}


