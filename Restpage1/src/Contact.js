const div = document.querySelector('.content');

import clearTable from "./clearTable";

function conTact(){


    clearTable();

    const indiv = document.createElement('div');
    indiv.classList.add('mycontact');
    const h1 = document.createElement('h1');
    h1.textContent = "Contact info";
    const p = document.createElement('p');
    p.textContent = "Tel : 55555555";

    const p1 = document.createElement('p');
    p1.textContent = "Email: ewed@dd.com";

    indiv.appendChild(h1);
    indiv.appendChild(p);
    indiv.appendChild(p1);

    // div.appendChild(indiv);
    return indiv;
}

export default conTact;