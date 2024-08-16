import Icon from './images/noodles-svgrepo-com.svg';
export default function navigationBar(){
    const navBar = document.querySelector('nav');
    const logoContainer = document.createElement('div');
    logoContainer.classList.add('logo-container');
    const h1 = document.createElement('h1');
    const myIcon = new Image();
    myIcon.classList.add('svg');
    myIcon.src = Icon;
    h1.textContent = 'Ramen Bowl ';

    logoContainer.append(h1,myIcon);
    navBar.append(logoContainer);
    return navBar;
}