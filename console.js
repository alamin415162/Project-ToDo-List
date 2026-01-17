
// default project to hold todos
const TodoLists = []
const Projects = []

// a function to call instance and class and make it empty list

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
        this.projectName = projectName
    }
}

// create a todo
function CreateTodo(title,describtion,dueDate,priority,projectName){
    let todo = new Todo(title,describtion,dueDate,priority,projectName)
    return todo
}

// check task existance
const state = 0
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

function changePriority(level,todo,List){
    let ind = List.findIndex(key => key.title === todo.title)
    if(ind != -1){
        List[ind].priority = level
    }
}

let project1 = CreateProject()
let project2 = CreateProject()


addProjectToProjects(project1)
addProjectToProjects(project2)


let task1 = CreateTodo('Odin','self paced',34,1,)
let task2 = CreateTodo('Odin','self paced',34,2)

//checkTask(task2)

console.log(Projects)
addToProject(task1,project2)
changePriority(3,task1,project2)

console.log(Projects)
//addToDefault(task2)
