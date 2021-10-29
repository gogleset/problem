const data = [1,3,5,4,2];
// 이것을 역순으로 배치해라 ex)2,4,5,3,1,

for (let i = 0; i < parseInt(data.length/2); i++) {
    const k = data.length - i - 1;
    
    let tmp = data[i];
    data[i] = data[k];
    data[k] = tmp;
    //  이 안에 있는 로직 외우기
}
console.log(data);