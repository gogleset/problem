let person = {
    name : 'son',


    sayHi: function(){
        console.log("안녕 나는 %s",this.name);
    }
}

person.sayHi(); //안녕 나는 손흥민


let data = { 
    data_array : [1,2,3,4,5] 
    ,
    sum: function(){
        let sum = 0;
        for(let item of this.data_array){
            sum += item
        }
        return console.log(sum);
    }
}

data.sum() //arr에 있는 모든  정수를 더해서 출력

