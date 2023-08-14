/* 
    2) make div inside div in html and get the distance of parent div from top by using 
    element of child div(inside div) after that make one scrollable box (with help of css) and  
    add one <p>  also perform scrollTo and scrollBy on that p tag 
*/

const outerDiv = document.getElementById('divOuter');
const innerDic = document.getElementById('divInner');
console.log(divInner.offsetTop);


const para = document.createElement('p');
para.textContent = 'For those who are interested in finding random paragraphs, thats exactly what this webpage provides. If both a random word and a random sentence arent quite long enough for your needs, then a random paragraph might be the perfect solution. Once you arrive at this page, youll see a random paragraph. If you need another one, all you need to do is click on the "next paragraph" button. If you happen to need several random paragraphs all at once, you can use this other paragraph generator. Below you can find a number of ways that this generator can be used.';
para.style.alignContent = 'justify';

const scrollableBox = document.createElement('div');
scrollableBox.style.position = 'absolute';
scrollableBox.style.height = '200px';
scrollableBox.style.width = '300px';
scrollableBox.style.top = '300px';
scrollableBox.style.left = '100px';
scrollableBox.style.padding = '10px';
scrollableBox.style.overflow = 'scroll';
scrollableBox.style.border = '1px solid black';

const scrDn = document.createElement('button');
const scrUp = document.createElement('button');
const scrTo = document.createElement('button');

scrDn.textContent = 'Scroll Down';
scrUp.textContent = 'Scroll Up';
scrTo.textContent = 'Scroll To';

scrDn.addEventListener('click',() => {
    scrollableBox.scrollBy(0, 30);
});

scrUp.addEventListener('click',() => {
    scrollableBox.scrollBy(0, -30);
});

scrTo.addEventListener('click',() => {
    scrollableBox.scrollTo(0, 30);
});

scrollableBox.append(para);
document.querySelector('body').append(scrollableBox , scrDn, scrUp, scrTo);

