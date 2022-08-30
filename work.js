// let arr = [...Array(26)];

// // console.log(arr);

// let a = [1, 2, 3, 4, 5, 6];
// let sqr_a = a.map((ele) => ele ** 2);
// // console.log(sqr_a);

// console.log([...Array(26)].map((ele, i) => String.fromCharCode(97 + i)));

// let lowCa = [...Array(26)].map((ele, i) => String.fromCharCode(97 + i));
// console.log(lowCa);
// console.log(lowCa.toString().toUpperCase().split(","));

// console.log(0.5 - Math.random());

// let lowCa = [...Array(26)].map((ele, i) => String.fromCharCode(97 + i));
// console.log(lowCa);

// const selLowCa = function (arr, n) {
//   let lowCaArr = [];
//   for (let i = 0; i < n; i++) {
//     lowCaArr.push(arr[Math.floor(Math.random() * 26)]);
//   }
//   return lowCaArr.join("");
// };

// console.log(selLowCa(lowCa, 10));

let a = "Sarfaraz";
let b = "Ahmed";
let c = (a + b).split("");

let d = [];

let length_C = c.length;

while (length_C) {
  randIndex = Math.floor(Math.random() * length_C);
  d.push(c.splice(randIndex, 1));
  length_C--;
}

console.log(d.join(""));

// let lengthA = a.length;
// let b = [];

// while (lengthA) {
//   let randomIndex = Math.floor(Math.random() * lengthA);
//   b.push(a.splice(randomIndex, 1).toString());
//   lengthA--;
// }

// console.log(b.join(""));
