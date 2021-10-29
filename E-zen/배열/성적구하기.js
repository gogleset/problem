//          국어, 수학, 영어, 사회, 과학
//  철수     90    50    90   70    30
//  짱구     50    90    60   60    90 
//  유리     70    80    70   80    70 
// 각자 성적의 평균과 총합을 구하시오. 

let myClass = [
    [90,50,90,70,30],
    [50,90,60,60,90],
    [70,80,70,80,70]
];
let students = ["철수", "짱구", "유리"]
let sum = 0;
let avg = 0;

for(let i = 0; i < students.length; i++){
    for(let j =0; j < myClass[i].length; j++) {
        // console.log(myClass[i][j]);
        sum += myClass[i][j];
    }
    avg = sum / myClass[i].length;
    console.log("%s의 총합은 %d, 평균은 %d",students[i],sum,avg);
    sum = 0;
}