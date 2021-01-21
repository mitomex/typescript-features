const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number) => {
  a - b; // 本当は return するつもりがミス。だけど返り値に type annotatio をつけていないためエラーは出ない。
};