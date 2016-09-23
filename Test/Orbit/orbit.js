var ship;
var planet;
var scene;

function shipConstructor(){
    var tempShip = new Sprite(scene, "ship.png", 25, 25);
    tempShip.setSpeed(3);
    tempShip.setBoundAction(CONTINUE);
    tempShip.setPosition(400, 200);
    tempShip.checkKeys = function(){
        if (keysDown[K_LEFT]){
            this.changeImgAngleBy(-5);
        }
        if (keysDown[K_RIGHT]){
            this.changeImgAngleBy(5);
        }
        if (keysDown[K_UP]){
            this.addVector(this.getImgAngle(), .1);
        }
    }
    return tempShip;
}

function checkGravity(){
    var PLANET_MASS = 1000;
    var SHIP_MASS = 1;
    var dist = ship.distanceTo(planet);
    var dir = planet.angleTo(ship);
    var force = (PLANET_MASS * SHIP_MASS) / (dist * dist);
    ship.addVector(dir, force);
}

function init() {
    scene = new Scene();
    scene.setBG("black");
    ship = shipConstructor();
    planet = new Sprite(scene, "planet.png", 50, 50);
    planet.setSpeed(0);
    planet.setPosition(400, 300);
    scene.start();
}

function update(){
    scene.clear();
    ship.checkKeys();
    checkGravity();
    planet.update();
    ship.update();
}