
// findSmallestElement 함수를 구현해 주세요.

// findSmallestElement 의 arr 인자는 숫자 값으로만 이루어진 배열입니다.

// arr 의 값들 중 가장 작은 값을 리턴 해주세요.

// 만일 arr 가 비어있으면 0을 리턴 해주세요.

// 예를 들어, 다음과 같은 배열이 인자(input)으로 들어왔다면 1이 리턴 되어야 합니다.


let arr = [40,123,513,26,2,3,4];

const findSmallestElement = (arr) => {
    let arr0 = arr[0];

    if (arr.length === 0){
        return 0;
    }
    for (let i = 0; i < arr.length; i++){
        if(arr[i] < arr0){
            arr0 = arr[i] 
        }
    }
    console.log(arr0)
}

findSmallestElement(arr)










// meetAt(2022); // 결과 --> "2022년"
// meetAt(2032, 3); // 결과 --> "2032년 3월"
// meetAt(1987, 10, 28); // 결과 --> "1987/10/28"