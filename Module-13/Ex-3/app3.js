/* 
    3) create one p tag using javascript and  add it to the 
    body(p should also have one attribute  'data-class-info' with value 'random class')"
 */   

function addParaToBody() {
    const newParaTag = document.createElement('p');
    newParaTag.dataset.classInfo = 'random class';
    newParaTag.textContent = 'This pragraph is generated using JavaScript when Button is clicked...';

    document.querySelector('body').append(newParaTag);
}

const btn = document.getElementById('btn');
btn.addEventListener('click', addParaToBody);