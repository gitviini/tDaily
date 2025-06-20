let tasks = []

read()
    .then((data) => {
        tasks = data.content
        set_date(data.date)
        set_tasks(data.content)
    })


function set_date(date) {
    document.querySelector(".date").innerText = date
}

function set_tasks(content) {
    for(let i = 0; i < content.length; i++){
        let task = content[i]
        new_task(task.name, task.checked, task, i)
    }
}

function new_task(name = "", checked = false, instance = null, index) {
    const value = document.querySelector(".name-task").value
    document.querySelector(".name-task").value = ""

    const li = document.createElement("li")
    const container = document.createElement("div")
    container.setAttribute("class","container-checkbox")
    const checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")
    checked ? checkbox.setAttribute("checked", "") : {}
    const span = document.createElement("span")
    span.innerText = name ? name : value
    const div = document.createElement("div")
    div.setAttribute("class","trash")
    div.innerHTML = '<svg fill="currentColor" class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>'

    if (!instance) {
        const new_length = tasks.push({ name: value, checked: false }) - 1
        instance = tasks[new_length]
        index = new_length
    }

    div.onclick = () => {
        tasks.splice(index, 1)
        write(tasks)
        .then(()=>{
            location.reload()
        })
    }

    container.onclick = () => {
        instance.checked = container.children[0].toggleAttribute("checked")
        write(tasks)
    }
    container.appendChild(checkbox)
    container.appendChild(span)
    li.appendChild(container)
    li.appendChild(div)
    document.querySelector(".container-tasks").appendChild(li)
    write(tasks)
}