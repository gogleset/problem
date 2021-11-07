// ## 문제2.

// 1번 문제를 응용하여 같은 파라미터를 받았을 때 별을 역으로 출력하는 `printRevStar(max, current=1)` 을 구현하시오.
// // max는 출력해야 할 최대 라인 수
// // current는 현재 출력중인 라인의 위치

//     // max는 출력해야 할 최대 라인 수
//     // current는 현재 출력중인 라인의 위치


const printRevStar = (max, current=1) => {
    if(current > max){
        return;
    }

    let str = "";
    for (let i = 0; i < max - current + 1; i++){
        str += "*"
    }

    console.log(str);
    printRevStar(max, current+1)
}

printRevStar(4);