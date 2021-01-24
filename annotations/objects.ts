const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

// オブジェクトを分割代入で受け取ったときの Type Annotation
const { age }: { age: number } = profile;

// const { age }: number = profile とはできない。
// なぜなら複数プロパティを受け取る場合があるから

// ネストされたオブジェクトを分割代入で受け取ったときの Type Annotation
const { coords: { lat, lng } }: { coords: { lat: number; lng: number } } = profile;