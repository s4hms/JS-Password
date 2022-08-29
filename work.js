let arr = [...Array(26)];

// console.log(arr);

let a = [1, 2, 3, 4, 5, 6];
let sqr_a = a.map((ele) => ele ** 2);
// console.log(sqr_a);

console.log([...Array(26)].map((ele, i) => String.fromCharCode(97 + i)));
