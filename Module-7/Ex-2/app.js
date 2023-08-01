const bodyElement = document.querySelector('body');

const createDiv = document.createElement('div');

const paraText = [
    'This is 1st Paragraph created using DOM',
    'This is 2nd Paragraph created using DOM',
    'This is 3rd Paragraph created using DOM',
];

const paraTextColor = ['red', 'green', 'blue'];

for (let i = 0; i < 3; i++) {
    const para = document.createElement('p');
    para.textContent = paraText[i];
    para.style.color = paraTextColor[i];
    para.style.fontSize = '30px';
    para.style.fontWeight = 'bold';

    createDiv.append(para);
}

bodyElement.append(createDiv);
console.log(bodyElement.innerHTML);
console.log(bodyElement.innerText);
console.log(bodyElement.textContent);
