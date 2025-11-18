class Car {

    private brand : string;
    private model : string;
    private speed : number;

    constructor(brand : string,model : string){
        this.brand = brand;
        this.model = model;
        this.speed = 0;
    }


    public accelerate(): void{
        this.speed += 10
    }

    public breake(): void{
        this.speed -= 10
    }

    public getSpeed():number {
        return this.speed
    }

}


const car = new Car('toyota' ,'Fortuner')
car.accelerate()
car.accelerate()
car.breake()
console.log(car.getSpeed())
