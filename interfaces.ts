interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

// summary() しか使わないのであれば
// summary() のみの interface も可能
// 他にプロパティがあっても大丈夫
interface Reportable {
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

// なぜ Reportable という Interface の名前にしたのか？
// の例。全く異なるオブジェクトだが summary() は共通
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
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

// より汎用的な名前に変更
// civic でも drink でも使える
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printViecle(oldCivic);

printSummary(oldCivic);
printSummary(drink);