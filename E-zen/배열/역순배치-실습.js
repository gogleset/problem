let a = [1,3,5,7,9];

for(let i = 0; i < parseInt(a.length/2); i++){
    let k = a.length - i - 1;

    let tmp = a[i];
    a[i] = a[k];
    a[k] = tmp;
}
console.log(a);