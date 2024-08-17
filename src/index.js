import Todo from "./todo";
import './style.css';
import Project from "./project";
import renderTodo from "./renderTodo";
import { compareAsc, format } from "date-fns";
format(new Date(11, 1, 2014), "dd-MM-yyyy");

const todoContainer = [];

const project1 = new Project('School-work');
const todo1 = new Todo('game','call of duty',new Date(2014, 0, 11),'high','checked');
const todo2 = new Todo('watch','suits',new Date(2018, 3, 24),'medium','un-checked');
const todo3 = new Todo('pray','maghrib',new Date(2024, 7, 17),'high','checked');
const todo4 = new Todo('Gym','maghrib',new Date(2024, 7, 17),'high','checked');
todoContainer.push(todo1);
todoContainer.push(todo2);
todoContainer.push(todo3);
project1.addTodo(todo4);

todoContainer[1].priority = 'high'
console.table(todoContainer)



renderTodo(todoContainer)
renderTodo(project1.projectContainer)