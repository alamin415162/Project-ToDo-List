import { TodoLists,Projects,Todo } from "./constructor"
//  this creates a function
function CreateProject(){
    const project = []
    return project
}

// add a project to projects list
function addProjectToProjects(project){
    Projects.push(project)
}


// create a todo by calling class todo
function CreateTodo(title,describtion,dueDate,priority,projectName){
    let todo = new Todo(title,describtion,dueDate,priority,projectName)
    return todo
}

// check task availability
function checkTask(todo, project){
    let ind = project.findIndex(key => key.title === todo.title)
    if(ind === -1){
        console.log('task eligible')
        return true
    }
    console.log('task already existed')
    return false
}


// add to the default project
function addToDefault(todo){
    if(!state){
        TodoLists.push(todo)
        return
    }

}

//adding todo to specific project

function addToProject(todo,project){
    project.push(todo)
}


// a function to complete(remove a todo)
function completeTodo(todo,List){
    let ind = List.findIndex(key => key.title === todo.title)
    if(ind != -1){
        List.splice(ind,1)
    }
}
// change todo's priority
function changePriority(level,todo,project){
    let ind = project.findIndex(key => key.title === todo.title)
    if(ind != -1){
        project[ind].priority = level
    }
}
