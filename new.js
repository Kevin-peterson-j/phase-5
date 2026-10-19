const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${taskText}</span>

        <div class="actions">
            <button class="done">Done</button>
            <button class="delete">Delete</button>
        </div>
    `;

    taskList.appendChild(li);

    taskInput.value = "";

    li.querySelector(".done").addEventListener("click", function() {
        li.querySelector("span").classList.toggle("completed");
    });

    li.querySelector(".delete").addEventListener("click", function() {
        li.remove();
    });
}