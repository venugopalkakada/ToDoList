const saveData=[];
let inputTask= document.getElementById("input")
let listContainer= document.getElementById("tasks")
// let list= document.getElementById("addTask")
// list?.addEventListener("click" ,

function addlist(){
    console.log(listContainer);
    if (inputTask.value ===""){
  alert("please type something");
}
else{
    let span1= document.createElement("input");
    span1.type="checkbox"
    let li= document.createElement("div");
    let span2= document.createElement("span");
    span2.innerHTML= inputTask.value;
    saveData.push(inputTask.value); 
    console.log(saveData);
    li.appendChild(span1);
    li.appendChild(span2);
    listContainer.appendChild(li);
    let span= document.createElement("img");
    span.src="trash-can.png"
     li.appendChild(span);
    }
    inputTask.value="";

}    
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "DIV"){
        e.target.classList.toggle("checked")
    }
    else if (e.target.tagName==="IMG"){
    e.target.parentElement.remove();
    }
},false);
