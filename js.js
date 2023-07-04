let input = document.getElementById("input-task");
let taskBtn = document.querySelector(".btn");
let tasks = document.querySelector(".tasks");

taskBtn.addEventListener("click",function(){
    if(input.value.trim() != 0){
        let listItem = document.createElement("div");
        listItem.classList.add("task");
        listItem.innerHTML = `
        <p>${input.value}</p>
        <div class="icon">
            <i class="fas fa-pen-to-square" title="Done"></i>
            <i class="fas fa-trash" title="Delete"></i>
        </div>`;
        tasks.appendChild(listItem)
        input.value= "";
        saveTask()

    }else{
        alert("Please enter a task");
    }
})

tasks.addEventListener("click", function(e){
     if(e.target.classList.contains("fa-trash")){
        e.target.parentElement.parentElement.remove();
     }
     saveTask()

})
tasks.addEventListener("click", function(e){
     if(e.target.classList.contains("fa-pen-to-square")){
    e.target.parentElement.parentElement.classList.toggle("complete");
     }
     saveTask()

})

function saveTask(){
    localStorage.setItem("data", tasks.innerHTML);
}
function showTask(){
    tasks.innerHTML = localStorage.getItem("data");
}
showTask()