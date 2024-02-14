const container = document.getElementById('container');

//p 
const element1 = document.createElement('p');
element1.textContent = 'Hey I\'m red!';
element1.style.color = "red";

container.appendChild(element1);

//h3
const element2 = document.createElement('h3');
element2.textContent = 'I\'m a blue h3';
element2.style.color = "blue";

container.appendChild(element2);

//div container add
const element3 = document.createElement('div');
const element4 = document.createElement('p');
const element5 = document.createElement('h3');
element4.textContent = 'I\'m in a div';
element5.textContent = 'me too';
element3.appendChild(element4);
element3.appendChild(element5);

container.appendChild(element3);
