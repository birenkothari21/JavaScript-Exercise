/* 
    1) print the current page in javascript and after that make example to load another javascript file dynamically
 */

function loadFile() {
    const addScriptFile = document.createElement('script');
    addScriptFile.src = 'app1_1.js';
    addScriptFile.defer = true;
    document.head.append(addScriptFile);
}

const clickBtn = document.getElementById('btn');
clickBtn.addEventListener('click', loadFile);