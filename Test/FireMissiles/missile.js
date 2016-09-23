var game;
var car;
var missile;

function carConstructor(){
    var tempCar = new Sprite(game, "car.png", 90, 50);
    tempCar.setSpeed(0);
    tempCar.setAngle(135);
    tempCar.checkKeys = function(){
        if (keysDown[K_LEFT]){
            this.changeImgAngleBy(-5);
        }
        if (keysDown[K_RIGHT]){
            this.changeImgAngleBy(5);
        }
        if (keysDown[K_UP]){
            this.addVector(this.getImgAngle(), 2);
        }
        if (keysDown[K_DOWN]) {
            this.addVector(this.getImgAngle(), -2);
        }
        if (keysDown[K_SPACE]) {
            missile.fire();
        }
    }
    return tempCar;
}

function missileConstructor(){
    tempMissile = new Sprite(game, "missile.png", 30, 20);
    tempMissile.hide();
    tempMissile.fire = function(){
        this.show();
        this.setBoundAction(DIE);
        this.setPosition(car.x, car.y);
        this.setAngle(car.getImgAngle());
        this.setSpeed(car.getSpeed() == 0 ? 15 : car.getSpeed()*2);
    }
    return tempMissile;
}

function init() {
    game = new Scene();
    game.setBG("#000066");
    car = carConstructor();
    missile = missileConstructor();
    game.start();
}

function update(){
    game.clear();
    car.checkKeys();
    car.update();
    missile.update();
}