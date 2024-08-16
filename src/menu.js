import egg from './images/egg-cooking-svgrepo-com.svg';
import gyoza from './images/gyoza-dumpling-japanese-food-steamed-svgrepo-com.svg';
import naruto from './images/naruto-japanese-cuisine-japan-ramen-japanese-food-food-svgrepo-com.svg';
import noodles from './images/ramen-box-noodle-svgrepo-com.svg';
import sushi from './images/sushi-japanese-food-japanese-japan-japanese-cuisine-svgrepo-com.svg';
import yakitori from './images/yakitori-skewered-chicken-grilled-japanese-satay-japanese-cuisine-svgrepo-com.svg';

export default function menu(){
    const contentDiv = document.querySelector('#content');
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    const eggContainer =  document.createElement('div');
    eggContainer.classList.add('egg-container');
    const gyozaContainer =  document.createElement('div');
    gyozaContainer.classList.add('gyoza-container');
    const narutoContainer =  document.createElement('div');
    narutoContainer.classList.add('naruto-container');
    const noodlesContainer =  document.createElement('div');
    noodlesContainer.classList.add('noodles-container');
    const sushiContainer =  document.createElement('div');
    sushiContainer.classList.add('sushi-container');
    const yakitoriContainer =  document.createElement('div');
    yakitoriContainer.classList.add('yakitori-container');


    const eggImage = new Image();
    eggImage.src = egg;
    eggImage.classList.add('egg-image');
    const gyozaImage = new Image();
    gyozaImage.src = gyoza;
    gyozaImage.classList.add('gyoza-image');
    const narutoImage = new Image();
    narutoImage.src = naruto;
    narutoImage.classList.add('naruto-image');
    const noodlesImage = new Image();
    noodlesImage.src = noodles;
    noodlesImage.classList.add('noodles-image');
    const sushiImage = new Image();
    sushiImage.src = sushi;
    sushiImage.classList.add('sushi-image');
    const yakitoriImage = new Image();
    yakitoriImage.src = yakitori;
    yakitoriImage.classList.add('yakitori-image');

    eggContainer.appendChild(eggImage);
    gyozaContainer.appendChild(gyozaImage);
    narutoContainer.appendChild(narutoImage);
    sushiContainer.appendChild(sushiImage);
    noodlesContainer.appendChild(noodlesImage);
    yakitoriContainer.appendChild(yakitoriImage);

    menuContainer.append(noodlesContainer,gyozaContainer,narutoContainer,eggContainer,sushiContainer,yakitoriContainer);
    contentDiv.innerHTML = '';
    contentDiv.appendChild(menuContainer);
    return contentDiv;
}