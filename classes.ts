class Vehicle {
  drive(): void {
    console.log('chugga chugga');
  }

  honk(): void {
    console.log('beep');
  }
}

// クラスの継承
// メソッドをコピペせずに使える
class Car extends Vehicle {
  // メソッドの上書きも可能
  drive(): void {
    console.log('vroom');
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();

const car = new Car();
car.drive();
car.honk();