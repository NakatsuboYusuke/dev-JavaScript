// // setTimeout(関数, ミリ秒) => 一定時間後に処理を行う
// console.log('起動時の時刻', new Date().toLocaleTimeString());
// setTimeout(() => {
//   console.log('setTimeout後の時刻', new Date().toLocaleString());
// }, 1000);
// // => 実行結果
// // 起動時の時刻 15:15:37
// // setTimeout後の時刻 2020/2/18 15:15:38

// // clearTimeout(関数, ミリ秒) => setTimeout()メソッドで呼び出した処理をキャンセルする
// const TimerId = setTimeout(Timer, 1000);
// function Timer() {
//   console.log('setTimeout後の時刻', new Date().toLocaleString());
// };
// clearTimeout(TimerId);
// // => 処理はキャンセルされる

// // setInterval(関数, ミリ秒) => 一定時間ごとに処理を実行
// console.log('起動時の時刻', new Date().toLocaleTimeString());
// setInterval(() => {
//   console.log('setTimeout後の時刻', new Date().toLocaleTimeString());
// }, 1000);
// // => 実行結果
// // => 起動時の時刻 15:29:28
// // => setTimeout後の時刻 15:29:29
// // => setTimeout後の時刻 15:29:30
// // => setTimeout後の時刻 15:29:31
// // ...

// // clearInterval(関数, ミリ秒) => setinterval()メソッドで呼び出した処理をキャンセルする
// const IntervalId = setInterval(Timer, 1000);
// let count = 0;
// function Timer() {
//   count += 1;
//   console.log(count, new Date().toLocaleString());
//   if (count === 3) {
//     clearInterval(IntervalId);
//   };
// };
// // => 実行結果
// // => 1 "2020/2/18 15:36:58"
// // => 2 "2020/2/18 15:36:59"
// // => 3 "2020/2/18 15:37:00"

// // 非同期処理 Promise
// const promise = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve();
//   }, 1000);
// });
// promise.then(() => {
//   console.log('次の処理');
// });
// // => 実行結果
// // => 次の処理

// // resolve()メソッドには任意の引数を引き渡せる。その引数をthen()メソッド内で使える。
// const promise = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('orange');
//   }, 1000);
// });
// promise.then((value) => {
//   console.log(value);
// });
// // => 実行結果
// // => orange

// Promiseインスタンス.catch(コールバック関数) => Promiseでの失敗時の処理
let flag = true;
const promise = new Promise((resolve, reject) => {
  if (flag === true) {
    resolve('orange');
  } else {
    reject('apple');
  };
});
promise.then((value) => {
  console.log(value);
});
promise.catch((value) => {
  console.log(value);
});
// => orange
