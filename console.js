
// Lists the hold the todo and list of todos
const TodoLists = []
const Projects = []

//  this creates a function
function CreateProject(){
    const project = []
    return project
}

// add a project to projects list
function addProjectToProjects(project){
    Projects.push(project)
}

// a class to generate a todo objects with the inputs
class Todo{
    constructor(title,describtion,dueDate,priority,projectName){
        this.title = title;
        this.describtion = describtion;
        this.dueDate = dueDate;
        this.priority = priority;
        if(projectName){
            this.projectName = projectName
        }
        
    }
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
