let turn = "X";
let gameOver = new Audio("gameover.mp3");
let gameSound = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let infoText = document.querySelector(".info-text");
let boxes = Array.from(document.querySelectorAll(".box"));
let button = document.querySelector("button");
let count = 0;
let gif = document.querySelector("img");
let line = document.querySelector(".line");
function changeTurn(turn){
    if(turn === "X") turn = "0";
    else turn = "X";
    return turn;
}
// gameSound.play();
function checkWin(){
    let check = [];
    for(let i=0;i<9;i++){
        let cls = `box${i}`;
        let box = document.querySelector(`.${cls}`);
        let ele = box.querySelector(".text-box");
        check.push(ele.innerText);
    }
    if((check[0]===check[1] && check[0]===check[2] && check[0]===check[2]) && check[0]!=="" && check[1]!=="" && check[2]!==""){
        line.classList.add("first");
        line.style.opacity = 1;
        return true;
    }
    else if((check[0]===check[4] && check[4]===check[8] && check[0] === check[8]) && check[0]!=="" && check[4]!=="" && check[8]!==""){
        line.classList.add("seventh");
        line.style.opacity = 1;
        return true;
    }
    else if((check[3]===check[4] && check[4]===check[5] && check[3] === check[5]) && check[5]!=="" && check[3]!=="" && check[4]!==""){
        line.classList.add("second");
        line.style.opacity = 1;
        return true;
    }
    else if((check[6]===check[7] && check[7]===check[8] && check[6] === check[8]) && check[8]!=="" && check[6]!=="" && check[7]!==""){
        line.classList.add("third");
        line.style.opacity = 1;
        return true;
    }
    else if((check[2]===check[4] && check[4]===check[6] && check[2] === check[6]) && check[6]!=="" && check[2]!=="" && check[4]!==""){
        line.classList.add("eighth");
        line.style.opacity = 1;
        return true;
    }
    else if((check[0]===check[3] && check[3]===check[6] && check[0] === check[6]) && check[6]!=="" && check[0]!=="" && check[3]!==""){
        line.classList.add("fourth");
        line.style.opacity = 1;
        return true;
    }
    else if((check[1]===check[4] && check[4]===check[7] && check[1] === check[7]) && check[7]!=="" && check[1]!=="" && check[4]!==""){
        line.classList.add("fifth");
        line.style.opacity = 1;
        return true;
    }
    else if((check[2]===check[5] && check[5]===check[8] && check[2] === check[8]) && check[8]!=="" && check[2]!=="" && check[5]!==""){
        line.classList.add("sixth");
        line.style.opacity = 1;
        return true;
    }
    return false;
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        let ele = box.querySelector(".text-box");
        if(ele.innerText == ""){
            count++;
            ele.innerText = turn;
            audioTurn.play();
            if(checkWin() === true){
                infoText.innerText = `${turn} Won`;
                gameOver.play();
                gif.style.opacity = 1;
                return;
            }
            if(count == 9){
                infoText.innerText = "DRAW, try again!"
                return;
            }
            turn = changeTurn(turn);
            infoText.innerText = `Turn for ${turn}`;
        }
    });
});

button.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        let ele = box.querySelector(".text-box");
        ele.innerText = "";
    });
    turn = "X";
    infoText.innerText = `Turn for ${turn}`
    gif.style.opacity = 0;
    count = 0;
    line.style.opacity = 0;
    line.classList.remove("first");
    line.classList.remove("second");
    line.classList.remove("third");
    line.classList.remove("fourth");
    line.classList.remove("fifth");
    line.classList.remove("sixth");
    line.classList.remove("seventh");
    line.classList.remove("eighth");
});