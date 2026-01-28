// Lists the hold the todo and list of todos
const TodoLists = []
const Projects = []


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


// a class that creates a project
class Project{
    constructor(name){
        this.name = name

        this.project = []
    }

    addTo(todo){
        this.project.push(todo)
    }
}

let todo1 = CreateTodo('Odin','self paced learning',23,2)
let todo2 = CreateTodo('Physics','self paced learning',23,1)
let project1 = new Project('study')
project1.addTo(todo2)
addProjectToProjects(project1)
addToProject(todo1,'study')
addToProject(todo1,'physics')





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
        TodoLists.push(todo)
        return

}

//adding todo to specific project

function addToProject(todo,projectName){
    let folder = Projects.find(folder => folder.name === projectName)
    if(folder){
        folder.addTo(todo)
        console.log('succesfully added')
    }
    else{
        let folder = new Project(projectName)
        folder.addTo(todo)
        Projects.push(folder)
        console.log('succesfulyy created and added')
    }
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





export {TodoLists,Projects,Todo,Project,addProjectToProjects,CreateTodo,checkTask,addToDefault,addToProject,completeTodo,changePriority}