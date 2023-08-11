/* 
    2) Write a program to get the volume of a Cylinder with four decimal places using object classes.                       
*/

class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    calcVolme() {
        const pi = 3.14;
        this.volume = pi * this.radius * this.radius * this.height;
        this.volume = this.volume.toFixed(4);
        return this.volume;
    }
}

const btnAddBook = document.getElementById('btn');

btnAddBook.addEventListener('click', function () {
    let radius = parseInt(prompt('Enter Radius : '));
    let height = parseInt(prompt('Enter Height : '));

    if (!isNaN(radius) && !isNaN(height)) {
        const cylinder = new Cylinder(radius, height);
        alert(`Volume of Cylinder : ${cylinder.calcVolme()}`);
    } else {
        alert('Please, Enter Valid Inputs...');
    }
});
