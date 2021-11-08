// let ssn = "0503214"
// let year = 2021;
// let age = 0;
// let sex = "";
// let ssw = Number(ssn.substring(0,2)); 

// // 0이하면 무조건 1900 + ssw

// if(Number(ssn[0]) < 10 && ssn[6] == "1"){
//     age = 1900 + ssw;
//     age = year - age+1;
//     sex = "남자"
// } else if(Number(ssn[0]) < 10 && ssn[6] == "2"){
//     age = 1900 + ssw;
//     age = year - age+1;
//     sex = "여자"
// } else if(ssn[6] == '3'){
//     age = 2000 + ssw;
//     age = year - age+1;
//     sex = "남자"
// } else if(ssn[6] == '4') {
//     age = 2000 + ssw;
//     age = year - age+1;
//     sex = "여자"
// }
// console.log("당신은 %d세 %s입니다.", age, sex);



// 당신은 30세 남자입니다.


// 100~200사이의 임의의 숫자를 number 라는 변수에 저장하고, 1부터 number까지의 수 중에서 3의 배수에 대한 총 합을 구하시오.

// let number = 140;
// sum = 0;
// for(let i = 1; i < number + 1; i++){
//     if(i % 3 === 0){
//         sum += i;
        
//     }
// }
// console.log(sum);



// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 한다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수이다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성하여 아래의 테스트 코드에 대한 출력 결과를 만드시오. (30분/20점)


// const solution = (x) => {
//     this._x = x;

//     let sum = 0;
//     let haShad = String(this._x)

//     for (let i = 0; i < haShad.length; i++) {
//         sum += Number(haShad[i])
//     }
//     if(this._x % sum === 0){
//         console.log("%s의 모든 자릿수의 합은 %s입니다. %s(은)는 %s로 나누어 떨어지므로 %s(은)는 하샤드수 입니다.",this._x, sum, this._x, sum, this._x)
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(solution(63));


// 동수는 제과점에 과자를 사러 가는데 현재 가진 돈이 모자랄 경우 부모님께 모자란 돈을 받으려고 한다. 과자 한 개의 가격이 K, 사려고 하는 과자의 개수가 N, 현재 가진 돈의 액수를 M이라 할 때 여러분은 동수가 부모님께 받아야 하는 모자란 돈을 계산하려고 한다.
// 예를 들어,
// 과자 한 개의 가격이 30원, 사려고 하는 과자의 개수가 4개, 현재 동수가 가진 돈이 100원이라 할 때, 동수가 부모님께 받아야 하는 돈은 20원이다.
// 과자 한 개의 가격이 250원, 사려고 하는 과자의 개수가 2개, 현재 동수가 가진 돈이 140원이라 할 때, 동수가 부모님께 받아야 하는 돈은 360원이다.
// 과자 한 개의 가격이 20원, 사려고 하는 과자의 개수가 6개, 현재 동수가 가진 돈이 120원이라 할 때 동수가 부모님께 받아야 하는 돈은 0원이다.
// 과자 한 개의 가격이 20원, 사려고 하는 과자의 개수가 10개, 현재 동수가 가진 돈이 320원이라 할 때 동수가 부모님께 받아야 하는 돈은 역시 0원이다.
// 과자 한 개의 가격, 사려고 하는 과자의 개수와 동수가 현재 가진 돈의 액수가 주어질 때 동수가 부모님께 받아야 하는 돈의 액수를 리턴하는 함수 solution을 작성하고 리턴값을 출력하시오. (30분/20점)

// const solution = (k,n,m) => {
//     this._k = k;
//     // 과자 한개 가격
//     this._n = n;
//     // 과자를 사려고 하는 개수
//     this._m = m;
//     // 지금 가진 돈
//     let total_money = this._k * this._n

//     if(total_money < this._m){
//         return console.log("동수가 부모님께 받아야 하는 돈은 0원입니다.");
//     } else {
//         return console.log("동수가 부모님께 받아야 하는 돈은 %d원입니다.", total_money-this._m);
//     }
// }

// solution(20,10,320)

class Student {
    constructor(){
        this.grade = [];
    }

    set some(value){
        this.grade.push(value);
    }

    getSumAvg(){
       let sum = 0;
       let avg = 0;
       for(let i = 0; i < this.grade.length; i++){
           sum += this.grade[i];
       }
       avg = sum / this.grade.length;
       console.log("총점: %s, 평균: %s",sum,avg);
       return avg, sum;
    }

    getMinMax(){
        let json1 = {
            "최솟값": 0,
            "최댓값": 0
        }
        for(let i = 0; i < this.grade.length-1; i++){
            for(let j = i+1; j < this.grade.length; j++){
                if(this.grade[i] > this.grade[j]){
                    let tmp = this.grade[i];
                    this.grade[i] = this.grade[j];
                    this.grade[j] = tmp;
                }
            }
        }
        // console.log("최솟값:%s, 최댓값:%s",this.grade[0],this.grade[this.grade.length-1]);
        json1.최댓값 = this.grade[this.grade.length-1];
        json1.최솟값 = this.grade[0];
        return console.log(json1);
    }
    getVar(){
        // 분산(variance)은 관측값(한 원소에 대해서 변수가 가지는 값)에서 평균을 뺀 값을 제곱하고, 그것을 모두 더한 후 전체 개수로 나눠서 구한다. 즉, 차이값의 제곱의 평균이다. 관측값에서 평균을 뺀 값인 편차를 모두 더하면 0이 나오므로 제곱해서 더한다.
        let sum = 0;
        let avg = 0;
        let sum1 = 0;
        let avg1 = 0;
        let pp = [];
        for(let i = 0; i < this.grade.length; i++){
           sum += this.grade[i];
        }
        avg = sum / this.grade.length;
        // 총점,평균

        for(let i = 0; i < this.grade.length; i++){
            pp.push(((this.grade[i] - avg) ** 2))
        }
        for(let i = 0; i < pp.length; i++){
            sum1 += pp[i]
            
        }   
        avg1 = sum1 / pp.length;   
        console.log("분산: %d",avg1)
        
    }
    getStd(){
        // 분산(variance)은 관측값(한 원소에 대해서 변수가 가지는 값)에서 평균을 뺀 값을 제곱하고, 그것을 모두 더한 후 전체 개수로 나눠서 구한다. 즉, 차이값의 제곱의 평균이다. 관측값에서 평균을 뺀 값인 편차를 모두 더하면 0이 나오므로 제곱해서 더한다.
        let sum = 0;
        let avg = 0;
        let sum1 = 0;
        let avg1 = 0;
        let sqrt = 0;
        let pp = [];
        for(let i = 0; i < this.grade.length; i++){
           sum += this.grade[i];
        }
        avg = sum / this.grade.length;
        // 총점,평균
        for(let i = 0; i < this.grade.length; i++){
            pp.push(((this.grade[i] - avg) ** 2))
        }
        for(let i = 0; i < pp.length; i++){
            sum1 += pp[i]
        }   
        avg1 = sum1 / pp.length;   
        // 분산
        sqrt = Math.sqrt(avg1);
        console.log("표준편차: %d",sqrt.toFixed(2));
    }
}



const c = new Student();
c.some = 60;
c.some = 70;
c.some = 60;
c.some = 100;

// c.getSumAvg();
// c.getMinMax();
// c.getVar();
c.getStd();
