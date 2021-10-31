console.group("거스름돈에 동전의 단위마다 몇개의 동전이 필요한지 출력해주세요.")
// ex) 거스름돈 : 2860원 / 500원 : 5개 / 100원 : 3개 / 50원 : 1개 / 10원 : 1개


let money = 10340;
let coins = [500,100,50,10];
let a = [0,0,0,0];
let z = money;
for (let i = 0; i < coins.length; i++) {
    // 출력은 몫을 해야하는데 계산은 나머지로 해야함
    a[i] = Math.floor(z / coins[i]);
    z = z % coins[i];
}

console.log("거스름돈 : %d원 / 500원 : %d개 / 100원 : %d개 / 50원 : %d개 / 10원 : %d개",money,a[0],a[1],a[2],a[3])


console.groupEnd();


