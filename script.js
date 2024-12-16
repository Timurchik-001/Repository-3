// let arr = [
//     [115, 50, 25],
//     [75, 12, 99],
//     [34, 36, 55],
// ]

let numbers = [115, 50, 25];
let num = 0;
numbers.map((item) => num += item);
console.log(num);

let numbers2 = [75, 12, 99];
let num2 = 0;
numbers2.map((item) => num2 += item);
console.log(num2);


let numbers3 = [34, 36, 55,];
let num3 = 0;
numbers3.map((item) => num3 += item);
console.log(num3);

let prices = [15000, 3200, 10200, 455000, 123000, 7000];
let max = Math.max(15000, 3200, 10200, 455000, 123000, 7000);
console.log(max);

let min = Math.min(15000, 3200, 10200, 455000, 123000, 7000);
console.log(min);

let nums = [12, 3, 57, 34, 90, 1, 10, 9];
let even = nums.map((item) => item % 2 === 0);
let odd = nums.map((item) => item % 2 !== 0);
console.log(even);
console.log(odd);
