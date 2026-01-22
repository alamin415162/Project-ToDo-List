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


export {TodoLists,Projects,Todo}