// 이 배열에서 최댓값을 찾아라.
const a = [31,13,53,22,13];

data = a[0];
// 비교할 대상을 찾는 것이 중요하다.

for (let i = 0; i < a.length; i++) {
    // 반복을 비교할 범위 지정, 반복 동작은 a의 배열의 길이보다 1 작아야함.

    // 최댓값을 찾는 방법은 비교이다.
    if (data < a[i]){
        data = a[i];
    }
}
console.log(data)