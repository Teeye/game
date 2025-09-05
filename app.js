let user=0;
let comp=0;
let btn=document.querySelector("button");

let userScore=document.querySelector("#user-score");
let compScore=document.querySelector("#comp-score");

let choice=document.querySelectorAll(".in-box");

let generate=()=>{
    let options=["rock","paper","scissor"];
let random=Math.floor(Math.random()*3);
return options[random];
}

let play=(userChoice)=>{
    console.log("userChoice= ", userChoice);
    let compChoice=generate();
    console.log("compChoice=" , compChoice);


     if(userChoice=="rock" && compChoice=="scissor" || userChoice=="scissor" && compChoice=="paper" || userChoice=="paper" && compChoice=="rock"){
        user++;
        userScore.innerText=user;
        btn.innerText="user won"
        btn.style.backgroundColor="green"
     }
      else if(userChoice==compChoice){
    btn.innerText="game draw, play again!"
    btn.style.backgroundColor="black"
}
     else{
        comp++;
        compScore.innerText=comp;
        btn.innerText="comp won, play again!"
        btn.style.backgroundColor="red"
     }

}



choice.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
         let userChoice=choice.getAttribute("id");
   play(userChoice);
    })
   
})