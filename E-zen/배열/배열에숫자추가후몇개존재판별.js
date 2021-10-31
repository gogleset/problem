console.group("3.사용자로부터 5개의 정수를 받은 후 숫자 하나를 추가로 입력받아 그 수가 배열에 몇 개 존재하는지 출력하는 프로그램을 작성하시오.");
let x = 1;
let a = [1,1,6,3,2,x];
let b = 0;

for(let i = 0; i < a.length-1; i++) {
    if (x === a[i]){
        b++;
    }
}
console.log(b);
console.groupEnd();