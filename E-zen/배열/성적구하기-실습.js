const students = [
    ["종규",79,89,92,100,100],
    ["진",81,83,79,100,99],
    ["진혁",79,68,100,82,97],
    ["준",100,90,80,70,65],
    ["진영",92,90,78,87,65]
];
let sum = 0;
// 총점
let avg = 0;
// 평균
let max = 0;
// 최고점수



for(i = 0; i < students.length; i++) {
    // 5이하로 반복
    max = 0;
    let someOne = students[i][1]
    for(j = 1; j < students[i].length; j++) {
        sum += students[i][j];
        if (someOne < students[i][j]) {
            max = students[i][j];
        } else {
            max = someOne;
        }
    }
    avg = sum / students[i].length - 1;
    sum = 0;


    console.log("%s의 평균점수는 %d, 최고점수는 %d이다.",students[i][0],avg.toFixed(1),max);
}


