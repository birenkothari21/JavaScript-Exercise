const newWindowBtn = document.getElementById('newWindowBtn');

const openNewWindow = () => {
    const newWindow = window.open();
    newWindow.document.write('<h1>Hello World...</h1>');
};

newWindowBtn.addEventListener('click', openNewWindow);
