// ## 문제2.

// 가로(`width`), 세로(`height`)정보를 getter, setter로 관리하는 Rectangle 클래스를 정의하시오.

// 이 클래스는 생성자의 파라미터가 없으며 둘레의 길이를 구해 리턴하는 getAround() 메서드와 넓이를 구해 리턴하는 gerArea() 메서드를 제공합니다.

// 클래스는 JSON 형식으로 작성되어야 합니다.


function Rectangle () {
    this._width = null;
    this._height = null;
}
// 어떤값을 저장해서 대입해야 하는 경우 


Rectangle.prototype = {
    get width() {
        return this._width;
    },
    set width(value) {
        return this._width = value;
    },

    get height() {
        return this._height;
    },
    set height(value) {
        return this._height = value;
    },

    getAround: function(){
        return (this._height + this._width) * 2
    },

    getArea: function(){
        return (this._height * this._width)
    }
}

const c = new Rectangle();
c.width = 100;
c.height = 100;
console.log(c.getArea());