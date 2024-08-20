import Todo from "./todo";
import './style.css';
import Project from "./project";
import renderTodo from "./renderTodo";
import createSidebarItem from "./sidebar";
import addTodoIcon from './svgs/add-ellipse-svgrepo-com.svg';
import calenderIcon from './svgs/calender-svgrepo-com.svg'

const addTodoPopup = document.querySelector('#todo-form');
const addTodoForm = document.querySelector('#todo-form');
const closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', () =>{
    addTodoPopup.close();
})

createSidebarItem(addTodoIcon, 'Add Todo', () =>{
    const todoTitle = document.querySelector('.todo-title')
    todoTitle.textContent = 'ADD Todo';
    const addTodoBtn =  document.querySelector('#submit');
    addTodoBtn.value = 'Add';
    const newTodoTitle = document.querySelector('#title').value = '';
    const newTodoDescription = document.querySelector('#description').value = '';
    const newTodoDueDate = document.querySelector('#due-date').value = '';
    const newTodoPriority = document.querySelector('#priority').value = '';
    addTodoPopup.showModal();
});

let isEditMode = false;
let editIndex = null;

addTodoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (isEditMode) {
        // Update the existing todo
        todoArrayContainer[editIndex].title = document.querySelector('#title').value;
        todoArrayContainer[editIndex].description = document.querySelector('#description').value;
        todoArrayContainer[editIndex].dueDate = document.querySelector('#due-date').value;
        todoArrayContainer[editIndex].priority = document.querySelector('#priority').value;

        isEditMode = false; // Reset the flag
        editIndex = null; // Reset the index
    } else {
        // Add a new todo
        const newTodoTitle = document.querySelector('#title').value;
        const newTodoDescription = document.querySelector('#description').value;
        const newTodoDueDate = document.querySelector('#due-date').value;
        const newTodoPriority = document.querySelector('#priority').value;

        const newTodo = new Todo(newTodoTitle, newTodoDescription, newTodoDueDate, newTodoPriority);
        todoArrayContainer.push(newTodo);
    }

    renderTodo(todoArrayContainer, deleteTodo, editTodo);
    addTodoPopup.close(); // Optionally close the popup after submission
});



createSidebarItem(calenderIcon, 'Today');
createSidebarItem(calenderIcon, 'Tomorrow');
createSidebarItem(calenderIcon, 'Week');
createSidebarItem(addTodoIcon, 'Project');


const todoArrayContainer = [];
const todo1 = new Todo('PlayStation','call of duty','2024-08-12','high');
const todo2 = new Todo('NETFLIX','suits','2024-09-25','medium');
const todo3 = new Todo('PRAYER','maghrib','2024-18-16','high');

todoArrayContainer.push(todo1);
todoArrayContainer.push(todo2);
todoArrayContainer.push(todo3);



renderTodo(todoArrayContainer,deleteTodo,editTodo)


function deleteTodo(event) {
    const todoItemContainer = event.target.closest('.todo-item-container');
    const index = Array.from(todoItemContainer.parentNode.children).indexOf(todoItemContainer);
    
    todoArrayContainer.splice(index, 1);
    
    renderTodo(todoArrayContainer,deleteTodo,editTodo);
}

function editTodo(event) {
    // Find the container and its index
    const todoItemContainer = event.target.closest('.todo-item-container');
    const index = Array.from(todoItemContainer.parentNode.children).indexOf(todoItemContainer);

    // Update the form UI for editing
    const todoTitle = document.querySelector('.todo-title');
    todoTitle.textContent = 'EDIT Todo';

    const addTodoBtn = document.querySelector('#submit');
    addTodoBtn.value = 'Update Todo';

    // Populate the form with the current todo's data
    document.querySelector('#title').value = todoArrayContainer[index].title;
    document.querySelector('#description').value = todoArrayContainer[index].description;
    document.querySelector('#due-date').value = todoArrayContainer[index].dueDate;
    document.querySelector('#priority').value = todoArrayContainer[index].priority;

    // Set the flag and index for edit mode
    isEditMode = true;
    editIndex = index;

    // Open the dialog
    addTodoPopup.showModal();
}