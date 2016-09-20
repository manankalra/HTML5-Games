var screen;
var dragCar;
var speed;

function carConstructor(){
    tempCar = new Sprite(screen, "car.png", 50, 30);
    tempCar.setSpeed(0);
    tempCar.setMoveAngle(90);
    tempCar.checkKeys = function(){
        if (keysDown[K_RIGHT]) {
            this.changeAngleBy(5);
        }
        if (keysDown[K_LEFT]) {
            this.changeAngleBy(-5);
        }
        if (keysDown[K_UP]) {
            this.addVector(this.getImgAngle(), 1);
        }
    }
    tempCar.checkDrag = function(){
        speed = this.getSpeed();
        speed *= .95;
        this.setSpeed(speed);
    }
    return tempCar;
}

function init() {
    screen = new Scene();
    screen.setBG("#666666");
    dragCar = carConstructor();
    screen.start();
}

function update(){
    screen.clear();
    dragCar.checkKeys();
    dragCar.checkDrag();
    dragCar.update();
}