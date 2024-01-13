import './style.css';
import Icon from './rest1.jpg';
import Home from './Home';
import Menu from './Menu';
import conTact from './Contact';
import clearTable from './clearTable';
import Sign from '../SignUp';

const home = document.querySelector('.home');

const menu = document.querySelector('.menu');

const contact = document.querySelector('.contact');

const div = document.querySelector('.content');

const singup = document.querySelector('.signUp');

div.appendChild(Home());

home.addEventListener('click' , () => {
    clearTable();
    div.appendChild(Home());
});

menu.addEventListener('click'  , ()=>{
    clearTable();
    div.appendChild(Menu());
});

contact.addEventListener('click' , ()=>{
    clearTable();
    div.appendChild(conTact());
} );

singup.addEventListener('click' , () => {
    clearTable();
    div.appendChild(Sign());
});
