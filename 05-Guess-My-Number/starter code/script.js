'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let labelScore = 20;
let highscore = 0;

// document.querySelector(".number").textContent = secretNumber;
console.log(secretNumber);

document.querySelector(".check").addEventListener("click",function(){
    const guessNumber = Number(document.querySelector(".guess").value);
    console.log(guessNumber);

    // when the player does not choose the number
    if(!guessNumber){
        document.querySelector(".message").textContent = 'No Number Please Enter Again';
    // when the player guess the number is right 
    }else if(guessNumber === secretNumber){

        document.querySelector(".message").textContent = 'Correct Number';
        document.querySelector(".number").textContent = secretNumber;   
        document.querySelector("body").style.backgroundColor = 'green';
        document.querySelector(".number").style.width = '30rem';

        if(labelScore>highscore){
            highscore = labelScore;
            document.querySelector(".highscore").textContent = labelScore;
        }


        
    // when guess is too height 
    }else if(guessNumber > secretNumber){
        if(labelScore > 0){
            document.querySelector(".message").textContent = 'Too Height';
            labelScore -- ;
            document.querySelector(".score").innerHTML = labelScore;
        }else{
            document.querySelector(".message").textContent = 'Lose the Game!';
            document.querySelector(".score").innerHTML = '0';
        }

    // when guess is too low
    }else if(guessNumber < secretNumber){
        if(labelScore > 0){
            document.querySelector(".message").textContent = 'Too Low';
            labelScore -- ;
            document.querySelector(".score").innerHTML = labelScore;
        }else{
            document.querySelector(".message").textContent = 'Lose the Game!';
            document.querySelector(".score").innerHTML = '0';

        }
    }
}
);

document.querySelector(".again").addEventListener("click",function(){
    labelScore = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber)
    document.querySelector("body").style.backgroundColor = '#222';
    document.querySelector(".number").style.width = '15rem';
    document.querySelector(".guess").value = '';

    document.querySelector(".score").textContent = labelScore;
    document.querySelector(".message").textContent = 'Start Guessing .... ';
    document.querySelector(".number").textContent = '?';

});