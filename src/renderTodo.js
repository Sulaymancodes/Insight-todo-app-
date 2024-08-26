import editIcon from './svgs/edit-svgrepo-com.svg';
import deleteIcon from './svgs/delete-filled-svgrepo-com.svg';
import checkIcon from './svgs/check-svgrepo-com.svg';
import addTodoIcon from './svgs/add-ellipse-svgrepo-com.svg';
const addTodoForm = document.querySelector('#todo-form');

export default function renderTodo(arr, deleteTodo, editTodo, title) {
    const mainContainer = document.querySelector('#main');
    mainContainer.innerHTML = '';

    const titleOfContainer = document.createElement('h1');
    titleOfContainer.innerText = title;

    const descriptionOfContainer = document.createElement('p');
    descriptionOfContainer.innerText = 'Overview of your Pending To-do';

    const addIconContainer = document.createElement('div');
    addIconContainer.classList.add('add-icon-container');
    addIconContainer.addEventListener('click', () =>{
        document.querySelector('#title').value = '';
        document.querySelector('#description').value = '';
        document.querySelector('#due-date').value = '';
        document.querySelector('#priority').value = '';
        addTodoForm.showModal();
    })

    const imgElement = document.createElement('img');
    imgElement.classList.add('add-svg');
    imgElement.src = addTodoIcon;   

    addIconContainer.appendChild(imgElement);
    mainContainer.append(titleOfContainer, descriptionOfContainer, addIconContainer);

    arr.forEach((todo) => {
        const todoItemContainer = document.createElement('div');
        todoItemContainer.classList.add('todo-item-container');

        const todoItemTitle = document.createElement('h2');
        todoItemTitle.textContent = todo.title;

        const todoItemDescription = document.createElement('p');
        todoItemDescription.textContent = `Description: ${todo.description}`;

        const todoItemDueDate = document.createElement('p');
        todoItemDueDate.textContent = `Due Date: ${todo.dueDate}`;

        const todoItemPriority = document.createElement('p');
        todoItemPriority.textContent = `Priority: ${todo.priority}`;

        const div = document.createElement('div');
        div.classList.add('flex');

        const diVEditAndDeleteIconContainer = document.createElement('div');
        const editIconContainer = document.createElement('img');
        editIconContainer.addEventListener('click', (event) => {
            editTodo(event, arr);
        });
        editIconContainer.classList.add('edit-icon');
        editIconContainer.src = editIcon;

        const checkIconContainer = document.createElement('img');
        checkIconContainer.addEventListener('click', () => {
            todoItemContainer.classList.toggle('grey');
            checkIconContainer.classList.toggle('green');
        });
        checkIconContainer.classList.add('check-icon');
        checkIconContainer.src = checkIcon;

        const deleteIconContainer = document.createElement('img');
        deleteIconContainer.addEventListener('click', (event) => {
            deleteTodo(event, arr);
        });
        deleteIconContainer.classList.add('delete-icon', 'red');
        deleteIconContainer.src = deleteIcon;

        diVEditAndDeleteIconContainer.append(editIconContainer, checkIconContainer, deleteIconContainer);
        div.append(todoItemPriority, diVEditAndDeleteIconContainer);

        todoItemContainer.append(todoItemTitle, todoItemDescription, todoItemDueDate, div);

        mainContainer.appendChild(todoItemContainer);
    });
    
}
