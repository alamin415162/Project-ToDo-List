import { TodoLists, Projects, Todo, Project, addProjectToProjects, CreateTodo, checkTask, addToDefault, addToProject, completeTodo, changePriority } from "./functionality.js"

// gettinga and creating elements
const mainPage = document.getElementById('main-page')
const sideBar = document.getElementById('side-bar')
const taskInbox = document.createElement('div')
const projectInbox = document.createElement('div')
const addFolder = document.getElementById('add-project')
const addTask = document.getElementById('add-task')
const dialog = document.getElementById('myDialog')
const taskForm = document.getElementById('taskForm')
const returnTo = document.getElementById('returnTo')
const selection = document.getElementById('folder')
sideBar.appendChild(projectInbox)
mainPage.appendChild(taskInbox)

projectInbox.addEventListener('click', function(event){
    if(event.target.tagName === 'DIV'){
        const folder = Projects.find(folders=> folders.name === event.target.textContent.trim())
        displayProject(folder.project)
        
    }
})





console.log(Projects)

let todo2 = CreateTodo('Physics', 'Undergrad study', 43, 1,)


// let project1 = CreateProject()
// addToProject(todo2, project1)
// addProjectToProjects(project1)
// console.log(Projects)
// console.log(project1)



// functions in to manipulate the dom

function dataSubmit() {
    if (dialog.returnValue === 'submit') {
        const title = document.getElementById('title').value;
        const describtion = document.getElementById('description').value;
        const dueDate = document.getElementById('dueDate').value;
        const priority = document.getElementById('priority').value;
        const todo = CreateTodo(title, describtion, dueDate, priority)
        addToDefault(todo)
        const task = document.createElement('div')
        task.append(`   ${todo.title}   |   ${todo.describtion}   |   ${todo.dueDate}   |   ${todo.priority}   `)
        taskInbox.append(task)
        
    }
    else {
        console.log('dialog not submitted')
    }
    console.log(selection.value)
    if(selection.value){
        const folder = Projects.find(file => file.name === selection.value.trim())
        
    }
    
    
    
    
    taskForm.reset()
    selection.options.length = 1
    

    
}


function domLoad() {
    taskInbox.innerHTML = ''
    projectInbox.innerHTML = ''
    for (let todo of TodoLists) {
        const task = document.createElement('div')
        task.append(`   ${todo.title}   |   ${todo.describtion}   |   ${todo.dueDate}   |   ${todo.priority}   `)
        taskInbox.appendChild(task)
    }
   
    
    for (let project of Projects) {
        const folder = document.createElement('div')
        folder.append(`${project.name} `)
        projectInbox.append(folder)
    }
    
}



function handleProject() {
    let folderName = prompt('Enter Project Name')
    let project = new Project(folderName)
    const folder = document.createElement('div')
    folder.append(`${project.name}`)
    folder.addEventListener('click',displayProject(project.project))
    projectInbox.appendChild(folder)
    addProjectToProjects(project)
    console.log('project added')
    console.log(Projects)
}




function displayProject(folder){
    taskInbox.innerHTML = ''
    for(let task of folder){
        const div = document.createElement('div')
        div.append(`   ${task.title}   |   ${task.describtion}   |   ${task.dueDate}   |   ${task.priority}   `)
        taskInbox.appendChild(div)
    }
}


function folderSubmit(){
    for(let folder of Projects){
        const option = document.createElement('option')
        option.append(`${folder.name}`)
        option.value = folder.name
        selection.append(option)
    }
}





const choosed = document.getElementById('choosedFolder')
choosed.addEventListener('click',handleProject)


// app controllers and eventListeners


document.addEventListener('DOMContentLoaded', domLoad);


addFolder.addEventListener('click', handleProject)


addTask.addEventListener('click', (e) => {
    e.preventDefault()
    dialog.showModal()
    folderSubmit()

})


returnTo.addEventListener('click', domLoad)
dialog.addEventListener('close', dataSubmit)







