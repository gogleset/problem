


// 이 코드는 fruitArray의 데이터들("banana", "orange", "apple")의 순서가 달라져도 잘 작동해야 합니다.

// 연습문제(19-1)
console.group("연습문제(19-1)")
let fruitArray = ["banana", "orange", "apple", "banana"];
// 위 배열에서 banana를 찾아서 빼버리는 코드를 만들어 봅시다

fruitArray.forEach((v,i) => {
    if(v == "banana"){
        // splice는 배열의 인덱스주소와 값을 다 삭제하고, delete는 배열의 값만 삭제하고 빈공간으로 놔둔다.
        fruitArray.splice(i, 1);
    }
})

console.log(fruitArray);
console.groupEnd();


// 연습문제(19-2)
console.group("연습문제(19-2)")
let fruitArray1 = ["apple", "orange", "banana"];
let fruitArray2 = ["pear", "melon", "peach", "cherry"];
// 위 두 배열에서 각각 마지막 2개의 데이터를 잘라내고 잘라낸 두 배열을 합쳐 새로운 변수 fruitArray3에 대입하는 코드를 만들어 봅시다.
// 이 코드는 fruitArray1, fruitArray2의 데이터가 바뀌더라도 잘 작동해야 합니다. (fruitArray1, fruitArray2는 항상 2가지 이상의 문자열 데이터를 가지고 있는 배열입니다.)
// console.log(fruitArray1.length-2);
// fruitArray1.splice(fruitArray1.length-2, 2)
// fruitArray2.splice(fruitArray2.length-2, 2)

fruitArray1.length = fruitArray1.length - 2;
fruitArray2.length = fruitArray2.length - 2;

console.log(fruitArray1);
console.log(fruitArray2);

const fruitArray3 = fruitArray1.concat(fruitArray2)
console.log(fruitArray3);
console.groupEnd();


// 연습문제(19-3)
console.group(`연습문제(19-3)`);
// 배열과 Math.random함수를 사용하여 "가위", "바위", "보" 중 하나의 값을 return하는 getRockScissorPapperValue 함수를 만들어 봅시다

// 두 수 사이 랜덤값을 정해주는 함수
function random(n1, n2){
    return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
}
// console.log(random(0,2));

const getRockScissorPapperValue = () => {
    const RockScissorPapper = ["가위", "바위", "보"]
    // 인덱스 번호로 리턴 
    // console.log(random(0,2));
    return RockScissorPapper[random(0,2)];
}

console.log(getRockScissorPapperValue());

// console.log(Math.floor(Math.random()*3));
console.groupEnd();
