import Todo from "./todo";
import './style.css';
import Project from "./project";
import renderTodo from "./renderTodo";
import createSidebarItem from "./sidebar";
import addTodoIcon from './svgs/add-ellipse-svgrepo-com.svg';
import calenderIcon from './svgs/calender-svgrepo-com.svg';
import homeIcon from './svgs/home-svgrepo-com (1).svg';
import projectIcon from './svgs/folder-with-files-svgrepo-com.svg';

const addTodoPopup = document.querySelector('#todo-form');
const addTodoForm = document.querySelector('#todo-form');
const addProjectForm = document.querySelector('#project-form');
const todoCloseBtn = document.querySelector('.close-btn');
const projectCloseBtn = document.querySelector('.project-close-btn');

//side-bar Items
createSidebarItem(addTodoIcon, 'Add Todo', () =>{
    const todoTitle = document.querySelector('.todo-title')
    todoTitle.textContent = 'ADD TODO';
    const addTodoBtn =  document.querySelector('#submit');
    addTodoBtn.value = 'Add';
    document.querySelector('#title').value = '';
    document.querySelector('#description').value = '';
    document.querySelector('#due-date').value = '';
    document.querySelector('#priority').value = '';
    addTodoPopup.showModal();
});

createSidebarItem(homeIcon, 'Home', (event) =>{
    const homeDiv = event.target.closest('.sidebar-assets');
    homeDiv.classList.add('hover-color');
    renderTodo(todoArrayContainer, deleteTodo, editTodo);
});

createSidebarItem(calenderIcon, 'Today');
createSidebarItem(calenderIcon, 'Tomorrow');
createSidebarItem(calenderIcon, 'Week');

createSidebarItem(addTodoIcon, 'Project', () =>{
    addProjectForm.showModal();
});


todoCloseBtn.addEventListener('click', () =>{
    addTodoPopup.close();
})
projectCloseBtn.addEventListener('click', () =>{
    addProjectForm.close();
})



let isEditMode = false;
let editIndex = null;

addProjectForm.addEventListener('submit', (event) =>{
    event.preventDefault();
    const newProjectTitle =  document.querySelector('#project-title').value;
    const newProject = new Project(newProjectTitle);
    const projectTodo = new Todo('PLAYSTATION','call of duty','2024-08-12','high');
    newProject.addTodo(projectTodo);
    createSidebarItem(projectIcon, newProject.name, ()=>{
        // renderTodo(newProject.projectContainer, deleteTodo, editTodo);
        const mainContainer = document.querySelector('#main');
        const mainContainerTitle = document.querySelector('#main-title');
        const addIconContainer = document.createElement('div');
        addIconContainer.classList.add('add-icon-container');
        const imgElement = document.createElement('img');
        imgElement.classList.add('add-svg');
        imgElement.src = addTodoIcon;    
        mainContainerTitle.textContent = newProjectTitle;
        addIconContainer.appendChild(imgElement);
        mainContainer.append(addIconContainer);
    });

})

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
        const newTodoTitle = document.querySelector('#title').value.toUpperCase();
        const newTodoDescription = document.querySelector('#description').value;
        const newTodoDueDate = document.querySelector('#due-date').value;
        const newTodoPriority = document.querySelector('#priority').value;

        const newTodo = new Todo(newTodoTitle, newTodoDescription, newTodoDueDate, newTodoPriority);
        todoArrayContainer.push(newTodo);
    }

    renderTodo(todoArrayContainer, deleteTodo, editTodo);
    addTodoPopup.close(); // Optionally close the popup after submission
});






const todoArrayContainer = [];
const todo1 = new Todo('PLAYSTATION','call of duty','2024-08-12','high');
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
    todoTitle.textContent = 'EDIT TODO';

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