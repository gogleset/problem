// String의 slice() 는 자주 사용 되는 문자열 메소드 중 하나 입니다.
// 먼저 slice 에 대한 설명을 가볍게 읽어봅시다 👉 slice설명

// 그 후 sliceCityFromAddress 함수를 구현해 주세요.

// sliceCityFromAddress 함수는 address 를 인자로 받습니다.

// address 는 주소를 나타내는 string 입니다.

// 주어진 주소가 어느 도시 인지를 찾아 해당 주소에서 도시 부분만 삭제한 새로운 주소를 리턴해 주세요.

// 도시는 무조건 "시" 로 끝납니다. 예를 들어, "서울시".

// "도" 와 "시" 는 주소에 한번 밖에 포함되어 있지 않습니다.

// 예를 들어, 다음과 같은 주소가 주어졌다면;
// "경기도 성남시 분당구 중앙공원로 53"
// "경기도 분당구 중앙공원로 53"


const sliceCityFromAddress = (address) => {
    let find = address.indexOf("시");
    let slice = address.slice(find-3, find);
    
    
    return console.log(address)
}
sliceCityFromAddress("경기도 의정부시 분당구 중앙공원로 53")



