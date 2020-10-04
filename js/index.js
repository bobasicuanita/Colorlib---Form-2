const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const onSend = document.querySelector('.btn');
const messages = document.querySelectorAll('.message');
const error = document.querySelectorAll('.error');
const input = document.querySelectorAll('.input');
const border = document.querySelectorAll('.border');
const placeholder = document.querySelectorAll('.placeholder');

const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const getMessage = (index, message) => {
    messages[index].innerHTML = `${message} &nbsp; <i class="fas fa-exclamation"></i>`;
}

const clearError = (index) => {
    border[index].style.width = '100%';
    placeholder[index].style.top = '5px';
    error[index].style.display = 'none';
}

const keepEffect = (index, element) => {
    border[index].style.width = '100%';
    placeholder[index].style.top = '5px';

    if (element.value === '') {
        border[index].style.width = '0%';
        placeholder[index].style.top = '30px';       
    }
}

const hasValue = (index, element) => {
    if (element.value === '') {
        border[index].style.width = '0%';
        placeholder[index].style.top = '30px';         
    }
}

onSend.addEventListener('click', () => {
    if (name.value === '') {
        error[0].style.display = 'inline-block';
        getMessage(0, 'Name is required');
    }

    if (email.value === '' || !regex.test(email.value)) {
        error[1].style.display = 'inline-block';
        getMessage(1, 'Valid email is required: ex@abc.xyz');
    }

    if (message.value === '') {
        error[2].style.display = 'inline-block';
        getMessage(2, 'Message is required');
    }
});

input[0].addEventListener('focus', () => clearError(0));
input[1].addEventListener('focus', () => clearError(1));
input[2].addEventListener('focus', () => clearError(2));

input[0].addEventListener('blur', () => hasValue(0, name));
input[1].addEventListener('blur', () => hasValue(1, email));
input[2].addEventListener('blur', () => hasValue(2, message));

['change','keypress'].forEach( event => 
    input[0].addEventListener(event, () => keepEffect(0, name))
);

['change','keypress',].forEach(event => 
    input[1].addEventListener(event, () => keepEffect(1, email))
);

['change','keypress'].forEach( event => 
    input[2].addEventListener(event, () => keepEffect(2, message))
);