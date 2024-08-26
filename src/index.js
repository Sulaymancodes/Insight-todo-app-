import Todo from "./todo";
import './style.css';
import Project from "./project";
import renderTodo from "./renderTodo";
import createSidebarItem from "./sidebar";
import formatDate from "./dateFormat";
import addTodoIcon from './svgs/add-ellipse-svgrepo-com.svg';
import calenderIcon from './svgs/calender-svgrepo-com.svg';
import homeIcon from './svgs/home-svgrepo-com (1).svg';
import projectIcon from './svgs/folder-with-files-svgrepo-com.svg';

const addTodoPopup = document.querySelector('#todo-form');
const addTodoForm = document.querySelector('#todo-form');
const addProjectForm = document.querySelector('#project-form');
const todoCloseBtn = document.querySelector('.close-btn');
const projectCloseBtn = document.querySelector('.project-close-btn');

//to handle the state of the app
let isEditMode = false;
let editIndex = null;
let activeProject = null;  
const today = new Date();

function toggleSidebar() {
    document.querySelector('aside').classList.toggle('open');
}

//dom loaded logic for localstorage
document.addEventListener('DOMContentLoaded', () => {
    const savedTodos = JSON.parse(localStorage.getItem(`${activeProject.name}`)) || [];
    todoArrayContainer.projectContainer = savedTodos;
    renderTodo(todoArrayContainer.projectContainer, deleteTodo, editTodo, todoArrayContainer.name);

});
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

createSidebarItem(homeIcon, 'Home',() =>{
    activeProject = todoArrayContainer;
    renderTodo(activeProject.projectContainer, deleteTodo, editTodo,activeProject.name);
});

createSidebarItem(calenderIcon, 'Today', () =>{
    const formattedToday = formatDate(today);
    const todosDueToday = activeProject.projectContainer.filter(todo => todo.dueDate === formattedToday);
    renderTodo(todosDueToday, deleteTodo, editTodo,activeProject.name);
});
createSidebarItem(calenderIcon, 'Tomorrow', () =>{
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const formattedTomorrow = formatDate(tomorrow);
    const todosDueTomorrow = activeProject.projectContainer.filter(todo => todo.dueDate === formattedTomorrow);
    renderTodo(todosDueTomorrow,deleteTodo,editTodo,activeProject.name);
    
});
createSidebarItem(calenderIcon, 'Week', () =>{
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7);
    const formattedNextWeek = formatDate(nextWeek);
    const todosDueNextWeek = activeProject.projectContainer.filter(todo => todo.dueDate === formattedNextWeek);
    renderTodo(todosDueNextWeek, deleteTodo, editTodo,activeProject.name);
});

createSidebarItem(addTodoIcon, 'Project', () =>{
    addProjectForm.showModal();
});

addProjectForm.addEventListener('submit', (event) =>{
    event.preventDefault();
    const newProjectTitle =  document.querySelector('#project-title').value;
    const newProject = new Project(newProjectTitle);
    
    createSidebarItem(projectIcon, newProject.name, ()=>{
        activeProject = newProject;
        const mainContainer = document.querySelector('#main');
        mainContainer.innerHTML = ''; 
        const addIconContainer = document.createElement('div');
        addIconContainer.classList.add('add-icon-container');

        const imgElement = document.createElement('img');
        imgElement.classList.add('add-svg');
        imgElement.src = addTodoIcon;    
        imgElement.addEventListener('click', () =>{
            document.querySelector('#title').value = '';
            document.querySelector('#description').value = '';
            document.querySelector('#due-date').value = '';
            document.querySelector('#priority').value = '';
            addTodoForm.showModal();
            renderTodo(activeProject.projectContainer, deleteTodo, editTodo,activeProject.name);
        })

        addIconContainer.appendChild(imgElement);
        const newProjectH1 = document.createElement('h1');
        newProjectH1.textContent = newProjectTitle;
        const newProjectDescription = document.createElement('p');
        newProjectDescription.textContent = 'Overview of your Pending To-do';
        mainContainer.append(newProjectH1,newProjectDescription,addIconContainer);  
    });
})

addTodoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (isEditMode) {
        // Update the todo in the active project
        activeProject.projectContainer[editIndex].title = document.querySelector('#title').value;
        activeProject.projectContainer[editIndex].description = document.querySelector('#description').value;
        activeProject.projectContainer[editIndex].dueDate = document.querySelector('#due-date').value;
        activeProject.projectContainer[editIndex].priority = document.querySelector('#priority').value;

        isEditMode = false;
        editIndex = null;
        
        // Update local storage
        localStorage.setItem(`${activeProject.name}`, JSON.stringify(activeProject.projectContainer));
    } else {
        // Add a new todo to the active project
        const newTodoTitle = document.querySelector('#title').value.toUpperCase();
        const newTodoDescription = document.querySelector('#description').value;
        const newTodoDueDate = document.querySelector('#due-date').value;
        const newTodoPriority = document.querySelector('#priority').value;

        const newTodo = new Todo(newTodoTitle, newTodoDescription, newTodoDueDate, newTodoPriority);
        activeProject.addTodo(newTodo);

    }
    
    // Update local storage
    localStorage.setItem(`${activeProject.name}`, JSON.stringify(activeProject.projectContainer));

    renderTodo(activeProject.projectContainer, deleteTodo, editTodo, activeProject.name);
    addTodoPopup.close();
});

todoCloseBtn.addEventListener('click', () =>{
    addTodoPopup.close();
})
projectCloseBtn.addEventListener('click', () =>{
    addProjectForm.close();
})


function deleteTodo(event) {
    const todoItemContainer = event.target.closest('.todo-item-container');
    const todoItemContainers = document.querySelectorAll('.todo-item-container');
    const index = Array.from(todoItemContainers).indexOf(todoItemContainer);

    // Remove the todo from the active project
    activeProject.projectContainer.splice(index, 1);

    // Update local storage
    localStorage.setItem(`${activeProject.name}`, JSON.stringify(activeProject.projectContainer));

    // Re-render todos for the active project
    renderTodo(activeProject.projectContainer, deleteTodo, editTodo, activeProject.name);
}

function editTodo(event) {
    const todoItemContainer = event.target.closest('.todo-item-container');
    const todoItemContainers = document.querySelectorAll('.todo-item-container');
    const index = Array.from(todoItemContainers).indexOf(todoItemContainer);

    // Get the current todo from the active project
    const currentTodo = activeProject.projectContainer[index];
    
    // Populate the form with the current todo's details
    document.querySelector('#title').value = currentTodo.title;
    document.querySelector('#description').value = currentTodo.description;
    document.querySelector('#due-date').value = currentTodo.dueDate;
    document.querySelector('#priority').value = currentTodo.priority;

    isEditMode = true;
    editIndex = index;

    addTodoPopup.showModal();
}


const todoArrayContainer = new Project('HOME');
activeProject = todoArrayContainer;

renderTodo(activeProject.projectContainer,deleteTodo,editTodo,activeProject.name);


