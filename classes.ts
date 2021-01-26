class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

// クラスの継承
// メソッドをコピペせずに使える
class Car extends Vehicle {
  // メソッドの上書きも可能
  private drive(): void {
    console.log('vroom');
  }

  startDriveProcesses(): void {
    this.drive();
  }

  startHonkProcesses(): void {
    this.honk();
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

// const car = new Car();