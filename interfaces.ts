interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

// 引数にオブジェクトを受け取る場合、 Type Annotation が長くなりみづらい
// const printViecle = (vehicle: { name: string; year: number; broken: boolean }): void => {
//   console.log(`Name: ${vehicle.name}`);
//   console.log(`Year: ${vehicle.year}`);
//   console.log(`Broken? ${vehicle.broken}`);
// };

// interface を使うことによって見やすくなる
const printViecle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};

printViecle(oldCivic);