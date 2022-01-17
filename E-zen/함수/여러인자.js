// ndex.js에서 meetAt 함수를 만들어주세요.

// 인자를 세개 받습니다.
// 첫번째 인자는 년도에 해당하는 숫자입니다.
// 두번째 인자는 월에 해당하는 숫자입니다.
// 세번째 인자는 일에 해당하는 숫자입니다.
// 년도 인자만 받았을 경우 → "1234년" 과 같은 형식의 문자열을 리턴 해주세요.
// 년도,월 인자를 받았을 경우 → 년도와 월을 조합해서 "1234년 5월" 과 같은 형식의 문자열을 리턴 해주세요.
// 년도,월,일 인자를 전부 받았을 경우 → 년도,월,일을 조합해서 "1234/5/6" 과 같은 형식의 문자열을 리턴 해주세요..


const meetAt = (year, month, day) => {
    if(day){return year + "/" + month + "/" + day ;} 
    if (month){return year + '년' + month + '월';} 
    if(year){return year + '년';}
};

console.log(meetAt(1997,11));


// findSmallestElement 함수를 구현해 주세요.

// findSmallestElement 의 arr 인자는 숫자 값으로만 이루어진 배열입니다.

// arr 의 값들 중 가장 작은 값을 리턴 해주세요.

// 만일 arr 가 비어있으면 0을 리턴 해주세요.

// 예를 들어, 다음과 같은 배열이 인자(input)으로 들어왔다면 1이 리턴 되어야 합니다.

// [20, 200, 23, 1, 3, 9]

const findSmallestElement = (arr) => {
    let result = null;
    if(arr.length > 0) {
        let arr1 = arr.sort();
        result = arr[0]
    } else if (arr.length = 0){
        result = 0
    }
    return result;
}

let arr = [1];
console.log(findSmallestElement(arr));