let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newGame=document.querySelector("#New");
let msgCont=document.querySelector(".msg-cont");
let msg=document.querySelector("#msg");

let turnO= true;
let win=[[0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
    [0,4,8],
    [2,5,8],
    [2,4,6],
    [1,4,7]
    ];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;

        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
        
    });
});

function resetGame(){
    turnO=true;
    enableBoxes();
    msgCont.classList.add("hide");
}

function disableBoxes(){
    for(let box of boxes){
        box.disabled=true;
    }
}

function enableBoxes(){
      for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
function showWinner(winner){
    msg.innerText=`Congrats, Winner is ${winner} `;
    msgCont.classList.remove("hide");
    disableBoxes();
}
  
function checkWinner(){
    for(pattern of win){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                // console.log("winner ",pos1);

                showWinner(pos1);
            }
        }

    }
}

newGame.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);