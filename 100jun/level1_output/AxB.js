let fs = require('fs');
// 파일시스템을 불러온다
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
// 파일시스템중, 백준 파일시스템에 접근하고, 이것을 문자열을 만들고,스프릿을 통해 배열화
let a = parseInt(input[0]);
let b = parseInt(input[1]);
console.log(a*b);