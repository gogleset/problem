const grade = [
    ["철수",92,81,76],
    ["영희",72,95,84],
    ["민혁",80,86,98],
]

// # 프로토타입 연습문제

// ## 문제1. 

// 국어, 영어, 수학 점수를 생성자 파라미터로 입력받아서 합계와 평균을 구하는 클래스 Student를 작성하시오.

// 이 때 Stuent 프로토타입은 합계를 리턴하는 메서드인 `sum()`과 평균을 리턴하는 `avg()`를 제공합니다.

function Students(kor,eng,math){
    this.kor = kor;
    this.eng = eng;
    this.math = math;
}
// 처음엔 파라미터 생성

Students.prototype = {
    sum: function(){
        return this.kor + this.eng + this.math
    },
    avg: function(){
        return this.sum() / grade.length - 1
    }
}

// 작성된 클래스를 활용하여 아래 표에 대한 학생별 합계 점수와 평균점수를 출력하시오.

for (let item of grade){
    // 배열의 값을 가져옴
    const c = new Students(item[1],item[2],item[3])
    // 객체 c는 스튜던트 프로토타입의 학년 배열값의 1번째 배열, 2번째 배열, 3번째 배열을 가지고 옴
    console.log("%s의 총점은 %s점이고 평균은 %s점입니다.",item[0],c.sum(),c.avg())

}

// #### 출력결과

// ```
// 철수의 총점은 249점 이고 평균은 83점 입니다.
// 영희의 총점은 251점 이고 평균은 83.66666666666667점 입니다.
// 민혁의 총점은 264점 이고 평균은 88점 입니다.
// ```