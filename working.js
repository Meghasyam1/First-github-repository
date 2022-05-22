let user_score = 0;
let computer_score = 0;
const user_board = document.querySelector(".user_score_board");
const computer_board = document.querySelector(".computer_score_board");
const message_box = document.querySelector(".message_box");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const choices = ["rock","paper","scissor"];
 const generateComputerResponse = ()=>{
     const index = ((Math.random() * 10).toFixed(0))%3
     return choices[index]
 }
 const result = (winner,userResponse,ComputerResponse)=>{
     switch(winner){
         case "user":
             message_box.innerHTML=`User Wins ${userResponse} beats ${ComputerResponse}`
             user_board.innerHTML=++user_score;
             break
         case "computer":
             message_box.innerHTML=`Computer wins ${ComputerResponse} beats ${userResponse}`
             computer_board.innerHTML=++computer_score;
             break
         default:
             window.alert("Something went wrong");
     }
 }
 const playgame = (userResponse)=>{
     const ComputerResponse = generateComputerResponse()
     if(userResponse === ComputerResponse) return message_box.innerHTML="Tie";
     switch(userResponse) {
         case "rock":
             switch(ComputerResponse){
                 case "paper":
                     result("computer",userResponse,ComputerResponse)
                     break
                 case "scissor":
                    result("user",userResponse,ComputerResponse)
                    break   
             }
             break
         case "paper":
             switch(ComputerResponse){
                case "rock":
                     result("user",userResponse,ComputerResponse)
                     break
                case "scissor":
                    result("computer",userResponse,ComputerResponse)
                    break
             }
             break
        case "scissor":
            switch(ComputerResponse){
                case "paper":
                     result("user",userResponse,ComputerResponse)
                     break
                 case "rock":
                    result("computer",userResponse,ComputerResponse)
                    break
            }
            break
        // default:
        //     window.alert("invalid enter");
     }
 }
 rock.addEventListener('click',(e)=>playgame(e.target.id));
 paper.addEventListener('click',(e)=>playgame(e.target.id));
 scissor.addEventListener('click',(e)=>playgame(e.target.id));
