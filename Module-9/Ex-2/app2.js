const addPropertyBtn = document.getElementById('addProperty');
const list = document.getElementById('list');
const objKey = document.getElementById('pName');
const objKeyValue = document.getElementById('pVal');

const ul = document.createElement('ul');
list.append(ul);

const car = {};

const addPropertyHandler = () => {
    car[objKey.value] = objKeyValue.value;

    const li = document.createElement('li');
    li.textContent = `${objKey.value} : ${objKeyValue.value}`;
    ul.append(li);

    console.log(car);
    objKey.value = '';
    objKeyValue.value = '';
};

addPropertyBtn.addEventListener('click', addPropertyHandler);
