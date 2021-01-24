const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true
};

// 引数にオブジェクトを受け取る場合、 Type Annotation が長くなりみづらい
const printViecle = (vehicle: { name: string; year: number; broken: boolean }): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
};

printViecle(oldCivic);