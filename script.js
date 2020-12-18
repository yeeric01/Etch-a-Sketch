let divs = document.querySelectorAll(".blocks");
let clear = document.querySelector("button");

clear.addEventListener("click", ()=>{
    for(let i = 0; i < divs.length; i++){
        divs[i].style.backgroundColor="white";
    }
});

let isTrue = false;
let startingColor = "white";
for(let i = 0; i < divs.length; i++){
    divs[i].addEventListener("mousedown", changeColor1);
    divs[i].addEventListener("mousemove", changeColor2);
    divs[i].addEventListener("mouseup", changeColor3);
    divs[i].style.backgroundColor="white";
}
function changeColor1(e){
    isTrue = true;
    startingColor = e.target.style.backgroundColor;
    if(color =="white")
        e.target.style.backgroundColor="black";
    else
        e.target.style.backgroundColor="white"
}
function changeColor2(e){
    if(!isTrue)
        return;
    console.log(isTrue);
    if(startingColor =="white")
        e.target.style.backgroundColor="black";
    else
        e.target.style.backgroundColor="white";
}
function changeColor3(e){
    if(!isTrue)
        return;
    let color = e.target.style.backgroundColor;
    if(startingColor =="white")
        e.target.style.backgroundColor="black";
    else
        e.target.style.backgroundColor="white";
    isTrue = false;
}