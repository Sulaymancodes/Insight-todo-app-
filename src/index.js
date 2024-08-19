import Todo from "./todo";
import './style.css';
import Project from "./project";
import renderTodo from "./renderTodo";
import createSidebarItem from "./sidebar";
import { compareAsc, format } from "date-fns";
format(new Date(11, 1, 2014), "dd-MM-yyyy");
import addTodoIcon from './svgs/add-ellipse-svgrepo-com.svg';
import calenderIcon from './svgs/calender-svgrepo-com.svg'

createSidebarItem(addTodoIcon, 'Add Todo', () =>{
    alert('hello');
});
createSidebarItem(calenderIcon, 'Today');
createSidebarItem(calenderIcon, 'Tomorrow');
createSidebarItem(calenderIcon, 'Week');
createSidebarItem(addTodoIcon, 'Project');


const todoArrayContainer = [];




const project1 = new Project('School-work');
const todo1 = new Todo('game','call of duty',new Date(2014, 0, 11),'high','checked');
const todo2 = new Todo('watch','suits',new Date(2018, 3, 24),'medium','un-checked');
const todo3 = new Todo('pray','maghrib',new Date(2024, 7, 17),'high','checked');

todoArrayContainer.push(todo1);
todoArrayContainer.push(todo2);
todoArrayContainer.push(todo3);



renderTodo(todoArrayContainer)
