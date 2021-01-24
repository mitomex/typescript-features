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