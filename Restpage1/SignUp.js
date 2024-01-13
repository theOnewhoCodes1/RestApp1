
import User from "./myclass";
import users from "./listforobj";
function Sign(){


       const myform = template();

       return myform;

}


function template(){

        const forma = document.createElement('form');
        forma.noValidate = "true";

        const mytemplate = document.createElement('div');
        mytemplate.classList.add('mytemplate');

        const myinputs = document.createElement('div');
        myinputs.classList.add('myinputs');

        const mybutton = document.createElement('div');
        mybutton.classList.add('mybutton');

        const myhead = document.createElement('div');
        myhead.classList.add('myhead');
        
        const username = document.createElement('input');
        username.placeholder = 'username';
        username.type = 'text';
        username.id = 'username';
        username.required = true ;

        const mail = document.createElement('input');
        mail.placeholder = 'email';
        mail.type = 'email';
        mail.id = 'email';
        mail.required = true ;
        
        const pass = document.createElement('input');
        pass.placeholder = 'password';
        pass.type = 'password';
        pass.id = 'pass';
        pass.required = true ;

        const userask = askUser();

        const h1 = myHeader();
        myhead.appendChild(h1);


        const button = document.createElement('button');
        button.textContent = 'Sign In';
        button.id = 'signUp';
        button.addEventListener('click' , (e) => {
                
                e.preventDefault();
                const user = new User( username , mail , pass);
                users.push(user);
                console.log('ok')
                console.log(users);

        });
    
        mybutton.appendChild(button);
        myinputs.appendChild(username);
        myinputs.appendChild(mail);
       
        myinputs.appendChild(pass);

        mytemplate.appendChild(myhead);
        mytemplate.appendChild(myinputs);
        mytemplate.appendChild(userask);
        mytemplate.appendChild(mybutton);

        forma.appendChild(mytemplate);

        return forma;
}


function askUser(){

        const askuser = document.createElement('div');
        askuser.classList.add('ask');

        const label = document.createElement('label');
        label.textContent = "Already have an account ?";

        const spanYes = document.createElement('span');
        spanYes.textContent = "Yes"

        const labelOr = document.createElement('label');
        labelOr.textContent = "or";

        const spanNo = document.createElement('span');
        spanNo.textContent = "No"

        askuser.appendChild(label);
        askuser.appendChild(spanYes);
        askuser.appendChild(labelOr);
        askuser.appendChild(spanNo);

        return askuser;
}

function myHeader(){

        const head = document.createElement('div');
        head.classList.add('myheader');

        const h1 = document.createElement('h1');
        h1.textContent = "Sign-Up for more features."

        head.appendChild(h1);

        return head;
}


export default Sign