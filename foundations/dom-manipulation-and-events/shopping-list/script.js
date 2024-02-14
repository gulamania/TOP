const list = document.querySelector('ul');
const message = document.querySelector('input');
const addbutton = document.querySelector('button');

addbutton.addEventListener('click', () => {
    const name = message.value;
    message.value = '';

    const item = document.createElement('li');
    const text = document.createElement('span');
    const rmbutton = document.createElement('button');

    text.textContent = name;
    rmbutton.textContent = 'delete';

    item.appendChild(text);
    item.appendChild(rmbutton);

    list.appendChild(item);

    rmbutton.addEventListener('click', () =>{
        list.removeChild(item);
    });
    message.focus();
});