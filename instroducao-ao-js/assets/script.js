const button = document.getElementById('task-button')
const newTask = document.getElementById('new-task')
const tasks = document.getElementById(`tasks`)
console.log(newTask.value)

button.addEventListener(`click`, createNewTask)
document.addEventListener('keypress', function(e) {
    if(e.which == 13) {
        createNewTask()
    };
});

function createNewTask() {
    let newDiv = document.createElement(`div`)
    
    if (newTask.value === "") {
        alert(`Insira tarefa`)
        return
    }


    newDiv = `<div id="${idGenerator()}"><input type="checkbox" id=""><label for=""> ${replaceText()}</label>
    <button onclick=deleteTask(this) style= "font-size: 0.8rem, height: 15px", border-radius: 50%>X</button>
    </div>
    `
    tasks.innerHTML += newDiv

    newTask.value = ""
}

function deleteTask(element) {
    console.log(element.parentElement)
    element.parentElement.remove()
}


function idGenerator() {
    let id = Math.random()
    return id
}

function replaceText() {
    let value = newTask.value
    return value
}