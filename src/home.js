import ramenicon from './images/ramen-box-japanese-cuisine-svgrepo-com.svg';
export default function home(){
    const contentDiv = document.querySelector('#content');
    const homeContainer =  document.createElement('div');
    homeContainer.classList.add('home-container');
    const ramenIconContainer =  document.createElement('div');
    ramenIconContainer.classList.add('ramen-icon-container');
    const ramenInfo = document.createElement('p');
    ramenInfo.classList.add('home-info');
    const ramenIcon = new Image();
    ramenIcon.src = ramenicon;
    ramenIcon.classList.add('home-icon');
    ramenInfo.innerText = 'Ramen Bowl is a japanese themed restaurant that sell different types of ramen and also offer a wide variety of japanese fast food';

    ramenIconContainer.appendChild(ramenIcon);
    homeContainer.append(ramenIconContainer,ramenInfo);
    contentDiv.innerHTML = '';
    contentDiv.appendChild(homeContainer);

    return contentDiv;

}