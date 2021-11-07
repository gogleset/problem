
// ## 문제1.

// 아래의 형태로 출력하는 재귀함수를 구현하시오.

// ```js
// // max는 출력해야 할 최대 라인 수
// // current는 현재 출력중인 라인의 위치

//     // max는 출력해야 할 최대 라인 수
//     // current는 현재 출력중인 라인의 위치

const printStar = (max = 0, current = 1) => {
    if(current > max){
        return;
    }
    let str = "";
    for (let i = 0; i < current; i++) {
        str += "*"
    }
    console.log(str)
    printStar(max, current+1)
}

printStar(4)