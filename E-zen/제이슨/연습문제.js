// ## 문제1.

// 다음은 10명의 학생들에 대한 혈액형 데이터이다.


// ['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O']


// 아래와 같은 JSON을 정의하고, 각 혈액형별 학생수를 아래의 json의 각 key에 대한 value에 저장하시오. (혈액형별 학생 수를 for문을 활용하여 산출해야 합니다.)


// let a = ['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O'];
// const result = {"A" : 0, "B" : 0, "AB" : 0, "O" : 0};

// for(let i = 0; i<a.length; i++) {
//     if(a[i] === 'A'){
//         result.A += 1
//     } else if (a[i] === 'B'){
//         result.B += 1
//     } else if (a[i] === 'AB'){
//         result.AB += 1
//     } else if (a[i] === 'O'){
//         result.O += 1
//     }
// }

// console.log(result);


const exam = {
        "철수": [89, 82, 79, 91],
        "민영": [91, 95, 94, 89],
        "남철": [65, 57, 71, 64],
        "혜진": [82, 76, 81, 83]
    }
    
    let sum = 0;
    let avg = 0;


for(let key in exam){
    sum = 0;
    for (let item of exam[key]){
        sum += item
    }
    avg = sum / exam.철수.length;
    console.log("%s의 총합은 %s이고, 평균점수는 %s이다.",key,sum,avg)
}

