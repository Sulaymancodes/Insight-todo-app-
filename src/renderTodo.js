import editIcon from './svgs/edit-svgrepo-com.svg';
import deleteIcon from './svgs/delete-filled-svgrepo-com.svg';
export default function renderTodo(arr){
    for(let i = 0; i < arr.length; i++){
        const mainContainer = document.querySelector('#main');
        const todoItemContainer = document.createElement('div');
        todoItemContainer.classList.add('todo-item-container');
        const todoItemTitle = document.createElement('p');
        todoItemTitle.textContent = `Title: ${arr[i].title}`;
        const todoItemDescription = document.createElement('p');
        todoItemDescription.textContent =`Description: ${arr[i].description}` ;
        const todoItemDueDate = document.createElement('p');
        todoItemDueDate.textContent = `Due Date: ${arr[i].dueDate}`;
        const todoItemPriority = document.createElement('p');
        todoItemPriority.textContent = `Priority: ${arr[i].priority}`;
        const div = document.createElement('div');
        div.classList.add('flex');
        const diVEditAndDeleteIconContainer = document.createElement('div');
        const editIconContainer = document.createElement('img');
        editIconContainer.classList.add('svg');
        editIconContainer.classList.add('edit-icon');
        editIconContainer.src = editIcon;
        const deleteIconContainer = document.createElement('img');
        deleteIconContainer.classList.add('svg');
        deleteIconContainer.classList.add('delete-icon');
        deleteIconContainer.src = deleteIcon;

        diVEditAndDeleteIconContainer.append(editIconContainer,deleteIconContainer);
        div.append(todoItemPriority,diVEditAndDeleteIconContainer);
        todoItemContainer.append(todoItemTitle,todoItemDescription,todoItemDueDate,div);
        mainContainer.appendChild(todoItemContainer);
    }
}