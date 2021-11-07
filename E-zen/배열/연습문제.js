// 1)다음의 소스코드는 boolean 데이터를 저장하고 있는 배열에 대한 어떤 처리를 보여준다.
// 실행 결과에서 제시하는 것과 같이 배열에 저장되어 있는 값들을 반전(true는 false로, false는 true로) 변환하는 처리를 완성하시오.
// console.group("1)다음의 소스코드는 boolean 데이터를 저장하고 있는 배열에 대한 어떤 처리를 보여준다. 실행 결과에서 제시하는 것과 같이 배열에 저장되어 있는 값들을 반전(true는 false로, false는 true로) 변환하는 처리를 완성하시오.")

// let trfa = [true, false, false, true, false]

// console.log(trfa)
// for(i = 0; i < trfa.length; i++) {
//     trfa[i] = !trfa[i]
// }
// console.log(trfa);



// console.groupEnd();
// console.group("2)주말에는 7시간, 평일에는 5시간을 일하기로 했지만, 금요일에 다른 직원의 사정으로 대신 근무를 하게 되어 10시간을 일했다.이 학생의 시급이 4,500이었지만 목요일부터는 5,200원으로 올랐다고 할 때 일주일간의 총 급여를 구하 는 프로그램을 작성하시오.");




// let time = [7,5,5,5,5,10,7];
// let money = 0;

// for(i = 0; i < time.length; i++) {
//     if (i < 4){
//         money += time[i] * 4500
//     } else {
//         money += time[i] * 5200
//     }
// }
// console.log(money);






// console.groupEnd();




// console.group("4)상품의 가격을 원소로 갖는 1차 배열 price와 각 상품의 수량을 원소로 갖는 1차 배열 qty를 다음과 같 이 정의하였을 때 이 사람이 총 얼마를 결제해야 하는지 총 결제금액을 구하는 프로그램을 작성하시오.")

// let price = [38000, 20000, 17900, 17900];
// let qty = [6,4,3,5];
// let total = 0;

// for(let i = 0; i < price.length; i++) {
//     total += price[i] * qty[i]
// }

// console.log(total);






// console.group("5)문제 4번의 장바구니 내역에서 상품금액(판매가*수량)이 가장 비싼 항목은 얼마인지 출력하시오.")


// let price = [38000, 20000, 17900, 17900];
// let qty = [6,4,3,5];
// let big = price[0] * qty[0]


// for(let i = 0; i < price.length; i++) {
//     if(big < price[i] * qty[i]){
//         big = price[i] * qty[i]
//     } 
// }

// console.log(big);
console.groupEnd();
console.group("6) 문제4번의 장바구니 내역에서는 모든 장바구니 상품이 개별 배송이라고 한다. 상품금액(판매가*수량)이 8만원 이상인 경우 무료로 배송이 된다고 할 때 무료로 배송되는 항목은 모두 몇 개 인지 구하는 프로그램을 구현하시오.")

// let price = [38000, 20000, 17900, 17900];
// let qty = [6,4,3,5];
// let count = 0;
// // let total = 0;

// for(let i = 0; i < price.length; i++) {
//     if(price[i] * qty[i] >= 80000){
//         count++;
//     } 
// }

// console.log("%d개", count);
console.groupEnd();



// console.group("7)아래의 소스코드는 위의 상품 목록에서 상품의 가격을 원소로 하는 배열 money를 정의하였을 때 “낮은 가격순”버튼이 눌러졌을 때 상품의 가격을 재정렬하기 위한 코드에 대한 일부이다. 빈 칸을 채워넣어 완성하시오");

// let price = [209000, 109000, 119000, 109000, 94000];
// console.log("상품가격 -->" + price);


// for (let i = 0; i < price.length-1; i++) {
//     for(let j = i+1; j < price.length; j++) {
//         if(price[i]>price[j]) {
//             let tmp = price[i];
//             price[i] = price[j];
//             price[j] = tmp;
//         }
//     }
// }


// console.log("낮은가격순 -->" + price);
console.groupEnd();

console.group("9)학생별 총점과 평균점수를 구하기 위한 소스코드를 아래와 같이 작성중이다. 빈 칸을 완성하시오. 단, 평균점수의 경우 toFixed() 함수를 사용하여 소수점 둘째 자리까지만 출력하시오.")



let student = ["둘리", "도우너", "또치", "희동"];

// 성적표 배열
let grade = [
    [78,89,96],
    [62,77,67],
    [54,90,80],
    [100,99,98],
];
let sum = 0;
let avg = 0;

for(let i = 0; i < grade.length; i++) {
    sum = 0;
    for(let j = 0; j < grade[i].length; j++) {
        sum += grade[i][j];
    }
    avg = sum / grade[i].length;
    console.log("%s의 총합은 %s이고, 평균점수는 %s이다.",student[i],sum,avg.toFixed(0))
}




console.groupEnd()