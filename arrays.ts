const carMakers = ['food', 'toyota', 'chevy'];
// Type Inference できるから Annotation は要らない

const carmakersEmpty: string[] = [];
// 空の配列を代入したときは Type Annotation が必要

const dates = [new Date(), new Date()];
// オブジェクトの配列も同様。 Date[] となる

const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
];

const carsByMakeEmpty: string[][] = [];
// ネストした配列の Type Annotation

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);  // Number はエラーになる

// Help with `map`
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates = [new Date(), '2030-10-10'];
// Type は `(string | Date)[]` となる

const importantDatesOne: (string|Date)[] = [new Date()];
// 初期化時には Type はひとつだが、あとで別の Type が入る可能性がある場合は
// Type Annotation が必要