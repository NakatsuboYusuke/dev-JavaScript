// JSONをパースする
const jsonString = `{ "students": 40, "grade": 4, "name": "C組" }`;
// 文字列をJSONオブジェクトに変換
const data = JSON.parse(jsonString);
console.log(data);
// => Object
console.log(data.students);
// => 40
console.log(data.grade);
// => 4
console.log(data.name);
// => C組