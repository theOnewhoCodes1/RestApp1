
const div = document.querySelector('.content');

function Home(){


    const indiv = document.createElement('div');
    indiv.classList.add('myhome');


    const h1 = document.createElement('h1');
    h1.textContent = "Welcome to our Restaurant";

    const h3 = document.createElement('h3');
    h3.textContent = "Check our menu for more details";

    indiv.appendChild(h1);
    indiv.appendChild(h3);
    return indiv ;

    // div.appendChild(Home());
}


//xwris parenthesi
export default Home