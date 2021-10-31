console.group("사용자로부터 5개의 정수를 입력받는다. 이후 사용자가 1을 입력하면 첫번째 입력받는 정수를, 2를 입력하면 두번째로 입력 받는 정수를 출력하는 프로그램을 작성하시오.");

let a = [1,3,5,6,3];
let b = 6;

// 입력 받는 수와 a배열값의 인덱스 값을 맞춰야함
if (b > 5){
    console.log("error")
} else {
    console.log(a[b-1]);
}
console.groupEnd();