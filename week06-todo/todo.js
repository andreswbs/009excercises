const task1 = {
    description: "make coffe",
    isCompleted: false,
    priority: 6
}

const task2 = {
    description: "walk the dog",
    isCompleted: false,
    priority: 8
}

const task3 = {
    description: "make breakfast",
    isCompleted: true,
    priority: 8
}

const tasksArray = [task1, task2, task3]

function makeTaskHTML(taskObj, index) {
    let isChecked = ""
    if (taskObj.isCompleted) {
        isChecked = 'checked'
    }

    return `
        <div>
            <input type="checkbox" onclick="rowClicked(${index})" class="form-check-input" ${isChecked}>
            ${taskObj.description} ( ${taskObj.priority} )
        </div>
    `
}

function renderTasks() {
    const outputElement = document.getElementById("output")
    outputElement.innerHTML = ''
    tasksArray.forEach((task, rowIndex) => {
        console.log(task)
        outputElement.innerHTML += makeTaskHTML(task, rowIndex)
    })

    const doneTasks = tasksArray.filter((taskObj)=>{
        return taskObj.isCompleted
    })

    outputElement.innerHTML += `
        <div class="mt-2">
            Done tasks: ${doneTasks.length}
        </div>
    `
    console.log(doneTasks)
}

function rowClicked(rowIndex) {
    const taskObj = tasksArray[rowIndex]
    taskObj.isCompleted = !taskObj.isCompleted
    renderTasks()
}

function addTask() {
    const inputElement = document.getElementById("todoDescription")
    if (!inputElement.value) {
        //alert("Empty value not allowed")
        document.getElementById("message").innerText = "Empty value not allowed"
        document.getElementById("message").style.display = "block"
        return
    }

    const newTask = {
        description: inputElement.value,
        isCompleted: false,
        priority: 6
    }

    tasksArray.push(newTask)
    inputElement.value = ""
    document.getElementById("message").innerText = ""
    document.getElementById("message").style.display = "none"
    renderTasks()
}



renderTasks()