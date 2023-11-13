class Car{
    constructor(price,speed){
        this.price = price;
        this.speed = speed;
    }
    accelerate(speed){
        this.speed += speed;
    }
    static compare(car1,car2){
        car1.price - car2.price;
    }
}
class HeroCar extends Car{
    constructor(brand,price,speed,isFlable=false){
        super(price,speed);
        this.brand = brand;
        this.isFlable = isFlable;
    }
    setbrand(brand='MIU'){
        this.newbrand = brand;
    }
    getbrand(){
        return this.newbrand;
    }
    fly(){
        return this.isFlable;
    }
    static compare(car1,car2){
        car1.speed - car2.speed;
    }
}

const hero = new HeroCar('MIU MSD',100000, 0, true);