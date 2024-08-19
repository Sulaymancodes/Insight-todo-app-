export default function createSidebarItem(icon, textContent,onClickHandler) {
    const sidebarContainer = document.querySelector('.sidebar-container');
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('sidebar-assets');

    const imgElement = document.createElement('img');
    imgElement.classList.add('svg');
    imgElement.src = icon;

    itemContainer.addEventListener('click', onClickHandler);
    const textElement = document.createElement('p');
    textElement.classList.add('sidebar-text');
    textElement.textContent = textContent;

    itemContainer.appendChild(imgElement);
    itemContainer.appendChild(textElement);
    sidebarContainer.appendChild(itemContainer);
}