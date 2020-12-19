let clear = document.querySelector(".button1");
let setGrid = document.querySelector(".button2");
let centerThis = document.querySelector(".centerThis");
let board;
let gridSize = 0;
let divs = document.querySelectorAll("blocks");;

setGrid.addEventListener("click", ()=>{
    if(board)
        centerThis.removeChild(board);
    board = document.createElement("div");
    board.classList.add("board");
    centerThis.appendChild(board);
    let str = "";

    
    gridSize = prompt("Enter Grid Size from 1 to 100");
    if(gridSize > 100)
        gridSize = 100;
    for(let i = 0; i < gridSize; i++){str=str+"1fr ";}
    board.style.setProperty("grid-template-columns", str);

    let tmp = gridSize * gridSize;
    for(let i = 0; i < tmp; i++){
        let newDiv = document.createElement("div");
        newDiv.classList.add("blocks");
        board.appendChild(newDiv);
    }
   
    divs = document.querySelectorAll(".blocks");
    console.log(divs.length);
    for(let i = 0; i < divs.length; i++){
        divs[i].addEventListener("mousedown", changeColor1);
        divs[i].addEventListener("mousemove", changeColor2);
        divs[i].addEventListener("mouseup", changeColor3);
        divs[i].style.backgroundColor="white";
    }
});
clear.addEventListener("click", ()=>{
    centerThis.removeChild(board);
});

let isTrue = false;
let startingColor;
function changeColor1(e){
    isTrue = true;
    startingColor = e.target.style.backgroundColor;
    if(startingColor =="white")
        e.target.style.backgroundColor="black";
    else
        e.target.style.backgroundColor="white"
}
function changeColor2(e){
    if(!isTrue)
        return;
    if(startingColor =="white")
        e.target.style.backgroundColor="black";
    else
        e.target.style.backgroundColor="white";
}
function changeColor3(e){
    if(!isTrue)
        return;
    if(startingColor =="white")
        e.target.style.backgroundColor="black";
    else
        e.target.style.backgroundColor="white";
    isTrue = false;
}