const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

const pepsi: [string, boolean, number] = ['brown', true, 40];
pepsi[0] = 40; // Type Annotation が無いと壊れてしまう
// 配列ではなく、Tuple。順番が重要。

// Type Alias で指定する方法
type Drink = [string, boolean, number]; // 配列ではない
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];