let boxes=document.querySelectorAll(".box");
let rst=document.querySelector("#reset")
let body=document.querySelector("body")
let container = document.getElementById("messagecontainer");
let turn="X";
let count=0;

const winpatterns=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]]

const draw=()=>{
    let message = document.createElement("p");
    message.textContent =  "IT'S A DRAW ";
    container.appendChild(message);
}

 const disable_buttons=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }   
 }

const enable_buttons=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText=" ";
    }
}

boxes.forEach((box)=>{
box.addEventListener("click",()=>{
    if(turn==="X")
    {
        box.innerText="O";
        turn="O";
    }
    else
    {
           box.innerText="X";
           turn="X";
    }
    box.disabled="true";
    count++;
    if(checkwinner()==false){
    if(count==9) 
    {
        draw();
    }
    }
  })
})

displaywinner=(winner)=>{
    let message = document.createElement("p");
    message.textContent = `Wohoooo! ${winner} WON 🥳🎉`;
    container.appendChild(message);
}

checkwinner=()=>{
    for(pattern of winpatterns)
    {
       let val1=boxes[pattern[0]].innerText;
       let val2=boxes[pattern[1]].innerText;
       let val3=boxes[pattern[2]].innerText;
         
       if(val1===val2 && val2===val3 && val1!=="")
       {
           disable_buttons();
          displaywinner(val1);
          return true;
        }
    }
    return false;
}

const removemsg=()=>{
      p=container.querySelector("p");
      container.removeChild(p);
}

const resetgame=()=>{
    enable_buttons();
    turn="X";
    count=0;
    removemsg();
 }

rst.addEventListener("click",resetgame);
