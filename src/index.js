import Todo from "./todo";
import './style.css';
import Project from "./project";
import renderTodo from "./renderTodo";
import createSidebarItem from "./sidebar";
import { compareAsc, format } from "date-fns";
format(new Date(11, 1, 2014), "dd-MM-yyyy");
import addTodoIcon from './svgs/add-ellipse-svgrepo-com.svg';
import calenderIcon from './svgs/calender-svgrepo-com.svg'

const addTodoPopup = document.querySelector('#todo-form');
const addTodoForm = document.querySelector('#todo-form');
const closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', () =>{
    addTodoPopup.close();
})

createSidebarItem(addTodoIcon, 'Add Todo', () =>{
    addTodoPopup.showModal();
});

addTodoForm.addEventListener('submit', (event) => {  
    event.preventDefault();  
    
    const newTodoTitle = document.querySelector('#title').value;
    const newTodoDescription = document.querySelector('#description').value;
    const newTodoDueDate = document.querySelector('#due-date').value;
    const newTodoPriority = document.querySelector('#priority').value;

    const newTodo = new Todo(newTodoTitle,newTodoDescription,newTodoDueDate,newTodoPriority);
    todoArrayContainer.push(newTodo);
    renderTodo(todoArrayContainer);

    addTodoPopup.close();  // Optionally close the popup after submission
});



createSidebarItem(calenderIcon, 'Today');
createSidebarItem(calenderIcon, 'Tomorrow');
createSidebarItem(calenderIcon, 'Week');
createSidebarItem(addTodoIcon, 'Project');


const todoArrayContainer = [];
const todo1 = new Todo('game','call of duty',new Date(2014, 0, 11),'high');
const todo2 = new Todo('watch','suits',new Date(2018, 3, 24),'medium');
const todo3 = new Todo('pray','maghrib',new Date(2024, 7, 17),'high');

todoArrayContainer.push(todo1);
todoArrayContainer.push(todo2);
todoArrayContainer.push(todo3);



renderTodo(todoArrayContainer,deleteTodo)


function deleteTodo(event) {
    // Find the index of the clicked delete button
    const todoItemContainer = event.target.closest('.todo-item-container');
    const index = Array.from(todoItemContainer.parentNode.children).indexOf(todoItemContainer);
    
    // Remove the todo item from the array
    todoArrayContainer.splice(index, 1);
    
    // Re-render the todos
    renderTodo(todoArrayContainer,deleteTodo);
}