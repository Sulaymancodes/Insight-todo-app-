import editIcon from './svgs/edit-svgrepo-com.svg';
import deleteIcon from './svgs/delete-filled-svgrepo-com.svg';
import checkIcon from './svgs/check-svgrepo-com.svg';

export default function renderTodo(arr,deleteTodo,editTodo) {
    let checkStatus = false;

    const mainContainer = document.querySelector('#main');

    // Adding dynamic container to keep the elements of the main
    let dynamicContainer = document.querySelector('.dynamic-content');
    if (!dynamicContainer) {
        dynamicContainer = document.createElement('div');
        dynamicContainer.classList.add('dynamic-content');
        mainContainer.appendChild(dynamicContainer);
    }

    // Clear only the dynamic content container
    dynamicContainer.innerHTML = '';

    // Loop through the array and create todo items
    for (let i = 0; i < arr.length; i++) {
        const todoItemContainer = document.createElement('div');
        todoItemContainer.classList.add('todo-item-container');

        const todoItemTitle = document.createElement('h1');
        todoItemTitle.textContent = arr[i].title;

        const todoItemDescription = document.createElement('p');
        todoItemDescription.textContent = `Description: ${arr[i].description}`;

        const todoItemDueDate = document.createElement('p');
        todoItemDueDate.textContent = `Due Date: ${arr[i].dueDate}`;

        const todoItemPriority = document.createElement('p');
        todoItemPriority.textContent = `Priority: ${arr[i].priority}`;

        const div = document.createElement('div');
        div.classList.add('flex');

        const diVEditAndDeleteIconContainer = document.createElement('div');
        const editIconContainer = document.createElement('img');
        editIconContainer.addEventListener('click', (event) =>{
           editTodo(event)
        })
        editIconContainer.classList.add('edit-icon');
        editIconContainer.src = editIcon;

        const checkIconContainer = document.createElement('img');
        checkIconContainer.addEventListener('click', () =>{
            if(checkStatus === false){
                todoItemContainer.classList.add('grey');
                checkIconContainer.classList.add('green');
                checkStatus = true;
            }
            else if(checkStatus === true){
                todoItemContainer.classList.remove('grey');
                checkIconContainer.classList.remove('green');
                checkStatus = false;
            }
            
        })
        checkIconContainer.classList.add('check-icon');
        checkIconContainer.src = checkIcon;

        const deleteIconContainer = document.createElement('img');
        deleteIconContainer.addEventListener('click', (event) =>{
            deleteTodo(event);
        });
        deleteIconContainer.classList.add('delete-icon');
        deleteIconContainer.classList.add('red');
        deleteIconContainer.src = deleteIcon;

        diVEditAndDeleteIconContainer.append(editIconContainer, checkIconContainer, deleteIconContainer);
        div.append(todoItemPriority, diVEditAndDeleteIconContainer);

        todoItemContainer.append(todoItemTitle, todoItemDescription, todoItemDueDate, div);

        // Append the todo item to the dynamic content container
        dynamicContainer.appendChild(todoItemContainer);
    }
}

