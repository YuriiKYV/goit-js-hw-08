import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = "feedback-form-state";
const dataObject = {};

const form = document.querySelector('.feedback-form');

chekKey();

form.addEventListener('input', throttle(addKey, 500));
form.addEventListener('submit', submit);

function addKey() {
    dataObject.email = form.elements.email.value;
    dataObject.message = form.elements.message.value;

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataObject));
};



function submit(event) {
    event.preventDefault();
    console.log(dataObject.email);
    console.log(dataObject.message);
    localStorage.removeItem(LOCALSTORAGE_KEY);
    form.reset();
    
};

function chekKey() {
    const dataParse = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    if (!dataParse === false) {
        if (dataParse.email) {
            form.elements.email.value = dataParse.email;
        }
        if (dataParse.message) {
            form.elements.message.value = dataParse.message;
        }
    }
};


