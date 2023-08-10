/* 
    2) write a program create a constructor function with parameter and create object and accessing properties.
*/

// creating constructor function...
function Car(modalName, modalYear, companyName, price) {
    this.modalName = modalName;
    this.modalYear = modalYear;
    this.companyName = companyName;
    this.price = price;

    this.printCarDetails = function () {
        const carList = document.getElementById('carList');
        const carItem = document.createElement('li');

        const carDetail = `<b>Modal-Name : </b>${this.modalName} <br> <b>Modal-Year : </b>${this.modalYear} <br> <b>Company-Name : </b>${this.companyName} <br> <b>Price : </b>${this.price}`;

        carItem.innerHTML = carDetail;
        carList.append(carItem);
    };
}

// creating objects & accessing properties and methods of constructor function...
const car1 = new Car('Alto', 2008, 'Suzuki', 300000);
const car2 = new Car('Scorpio', 2003, 'Mahindra', 700000);
const car3 = new Car('Punch', 2015, 'Tata', 600000);

car1.printCarDetails();
car2.printCarDetails();
car3.printCarDetails();
