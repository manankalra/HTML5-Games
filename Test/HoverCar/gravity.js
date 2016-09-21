var car;
var city;
var screen;

function carConstructor(){
    var tempCar = new Sprite(screen, "hoverCar.png", 70, 50);
    tempCar.setSpeed(0);
    tempCar.hSpeed = 0;
    tempCar.checkKeys = function(){
        tempCar.changeImage("hoverCar.png");
        if (keysDown[K_RIGHT]) {
            this.hSpeed += 1;
        }
        if (keysDown[K_LEFT]) {
            this.hSpeed -= 1;
        }
        if (keysDown[K_UP]) {
            this.addVector(0, .5);
            this.changeImage("hoverCarThrust.png");
        }
        this.changeXby(this.hSpeed);
    }
    tempCar.checkGravity = function(){
        if (this.y > 580) {
            this.setPosition(this.x, 580);
        } else {
            this.addVector(180, .1);
        }
    }
    return tempCar;
}

function cityConstructor() {
    var tempCity = new Sprite(screen, "city.png", 800, 600);
    tempCity.setSpeed(0);
    tempCity.setPosition(400, 300);
    return tempCity;
}

function init(){
    screen = new Scene();
    car = carConstructor();
    city = cityConstructor();
    screen.start();
}

function update() {
    screen.clear();
    city.update();
    car.checkKeys();
    car.checkGravity();
    car.update();   
}