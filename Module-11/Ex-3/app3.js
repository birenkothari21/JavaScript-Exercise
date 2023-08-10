/* 
    3) write a program create a constructor function using a prototype.
*/

// creating constructor function...
function Car(modalName, modalYear, companyName, price) {
    this.modalName = modalName;
    this.modalYear = modalYear;
    this.companyName = companyName;
    this.price = price;
}

// creating method using prototype...
Car.prototype.printCarDetails = function () {
    const carList = document.getElementById('carList');
    const carItem = document.createElement('li');

    const carDetail = `<b>Modal-Name : </b>${this.modalName} <br> <b>Modal-Year : </b>${this.modalYear} <br> <b>Company-Name : </b>${this.companyName} <br> <b>Price : </b>${this.price}`;

    carItem.innerHTML = carDetail;
    carList.append(carItem);
};

// creating objects & accessing properties and methods of constructor function...
const car1 = new Car('Alto', 2008, 'Suzuki', 300000);
const car2 = new Car('Scorpio', 2003, 'Mahindra', 700000);
const car3 = new Car('Punch', 2015, 'Tata', 600000);

// accessing the method defined in constructor function's prototype...
car1.printCarDetails();
car2.printCarDetails();
car3.printCarDetails();
