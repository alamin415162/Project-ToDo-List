const TodoLists = []



// a class to generate a todo objects with the four inputs
class CreateTodo {
    constructor(title,describtion,dueDate,priority,projectName){
        this.title = title;
        this.describtion = describtion;
        this.dueDate = dueDate;
        this.priority = priority;
        this.projectName = projectName;
    }
    TodoList(name){
        TodoLists.push(name)
        
    }
}


function addToProject(title,describtion,dueDate,priority,projectName){
    const todo = new CreateTodo(title,describtion,dueDate,priority,projectName)
    todo.TodoList({
        title: todo.title,
        describtion: todo.describtion,
        dueDate: todo.dueDate,
        priority: todo.priority
    })
    return TodoLists
}


const task = addToProject('Odin','todo list project',23,2,'inbox')
const task2 = addToProject('physics','final',45,2,'inbox')
console.log(task)




// function createToDoList(todo){
//     TodoLists.push(todo)
// }

class Project{
    constructor(name,details){
        this.name = name;
        this.details = details;
    }

}



