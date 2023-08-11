/* 
    1) write a program create car class and properties like name,model,weight,color and method start(),drive(),brake(),stop()    
*/

class Car {
    constructor(carName, carModel, carWeight, carColor) {
        this.carName = carName;
        this.carModel = carModel;
        this.carWeight = carWeight;
        this.carColor = carColor;

        this.start();
        this.drive();
        this.brake();
        this.stop();
    }

    start() {
        console.log('Car start() Method Called...');
    }

    drive() {
        console.log('Car drive() Method Called...');
    }

    brake() {
        console.log('Car brake() Method Called...');
    }

    stop() {
        console.log('Car stop() Method Called...');
    }
}

const punch = new Car('Punch', 2022, 2000, 'Green');
