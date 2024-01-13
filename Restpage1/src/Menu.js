const div = document.querySelector('.content');

import chicken from './chicken.jpg';
import salmon from './salmon.jpg';

function Menu(){

    const indiv = document.createElement('div');
    indiv.classList.add('mymenu')
    
    const p = document.createElement('p');
    const h1 = document.createElement('h1');
    // const img = document.createElement('img');
    h1.textContent = "Honey mustard";
    p.textContent = 'Ingridients:.....';
    // img.src = "chicken.jpg";
    // img.height = "300";
    // img.width = "300" ;
    const mychicken = new Image();
    mychicken.src = chicken;
    mychicken.width = 300;
    mychicken.height = 300;

    indiv.appendChild(mychicken);
    indiv.appendChild(h1);
    indiv.appendChild(p);

    const p1 = document.createElement('p');
    const h2 = document.createElement('h1');
    // const img1 = document.createElement('img');
    h2.textContent = "Healthy salmon";
    p1.textContent = 'Ingridients:.....';
    // img1.src = "salmon.jpg";
    // img1.height = "300";
    const mysalmon = new Image();
    mysalmon.src = salmon ;
    mysalmon.width = 300;
    mysalmon.height = 300;
    indiv.appendChild(mysalmon);
    indiv.appendChild(h2);
    indiv.appendChild(p1);

    // div.appendChild(indiv);
    return indiv;
}
export default Menu