let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let a = parseInt(input[0]);
// 문자열을 분석하여 정수값을 받아오는 ParseInt
let b = parseInt(input[1]);
console.log(+(a / b).toFixed(9)); // '0.3'

