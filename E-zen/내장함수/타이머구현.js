let count = 0;

// const c = setTimeout(() => {
//     count++
//     console.log(count);
// },5000)

// const b = setTimeout(() => {
//     count--
//     console.log(count);
// },6000)

const d = setInterval(() => {
    count++
    console.log("타이머1 %d", count);
    if (count == 5) {
        clearInterval(d);
        console.log("타이머1 종료")
    }
},1000)

module.exports = e = setInterval(() => {
    count--
    console.log("타이머2 %d",count)
    if (count == 0) {
        clearInterval(e);
        console.log("타이머2 종료")
    }
},3000);
