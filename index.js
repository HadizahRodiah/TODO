//backend code for the clock
function updateClock(){
    const now = new Date();
    const hours = now.getHours().toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const year= now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();
    const timeString = `${hours}:${minutes}:${seconds}`;
    const dateString = `${year}/${month}/${date}`;
    document.getElementById("clock").textContent=timeString;
    document.getElementById("date").textContent=dateString;
}
updateClock();
setInterval(updateClock,1000);
// backend codes for the todo list
const inputTask = document.getElementById("input-task");
const Box = document.getElementById("box2");

function addTask(){
    if(inputTask.value ===''){
        alert("Write what to do!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputTask.value;
        Box.appendChild(li);
        let input= document.createElement("input");
        input.type="checkbox";
        li.appendChild(input);
        let button = document.createElement("button");
        button.innerHTML="Delete";
        li.appendChild(button);
    }
    inputTask.value= '';
    storeData();
}
Box.addEventListener("click", function(e){
   if(e.target.tagName==="BUTTON"){
        e.target.parentElement.remove();
        storeData();
    }
}, false);

function storeData(){
    localStorage.setItem("data",Box.innerHTML);
}
function showTask(){
    Box.innerHTML = localStorage.getItem("data");
}
showTask();


//backend codes for the counter
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const decrease = document.getElementById("decrease");
const labcount= document.getElementById("labcount");
let count=0;

increase.onclick = function(){
    count++;
    labcount.textContent=count;
};
decrease.onclick = function(){
    count--;
    labcount.textContent=count;
};
reset.onclick = function(){
    count=0;
    labcount.textContent=count;
};
