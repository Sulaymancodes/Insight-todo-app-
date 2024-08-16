import Todo from "./todo";
import Project from "./project";
import { compareAsc, format } from "date-fns";
format(new Date(11, 1, 2014), "dd-MM-yyyy");

const project1 = new Project('School-work');
project1.addTodo('Hello');
console.log(project1.name);
console.log(project1.projectContainer[0]);
const todo1 = new Todo('game','hjsnsk',new Date(2014, 0, 11),'high','checked');

console.log(todo1.priority);
console.log(todo1.dueDate)