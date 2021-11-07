// ## 문제2.

// 가로(`width`), 세로(`height`)정보를 getter, setter로 관리하는 Rectangle 클래스를 정의하시오.

// 이 클래스는 생성자의 파라미터가 없으며 둘레의 길이를 구해 리턴하는 getAround() 메서드와 넓이를 구해 리턴하는 gerArea() 메서드를 제공합니다.


class Rectangle{
    constructor(){
        this._width = null;
        this._height = null;
    }

    set width(value) {
        this._width = value;
    }

    get width() {
        return this._width;
    }

    
    set height(value) {
        this._height = value;
    }

    get height() {
        return this._height;
    }

    getAround(){
        return (this._height + this._width) * 2;
    }
    getArea(){
        return (this._height * this._width)
    }
}

const c = new Rectangle();
c.width = 100;
c.height = 200;

console.log(c.getArea());
console.log(c.getAround());







