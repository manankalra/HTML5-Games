var boat;
var scene;
var speed;

function boatConstructor(){
    var tempBoat = new Sprite(scene, "boat.png", 90, 50);
    tempBoat.checkKeys = function(){
        if (keysDown[K_LEFT]){
            this.changeImgAngleBy(-5);
        }
        if (keysDown[K_RIGHT]){
            this.changeImgAngleBy(5);
        }
        if (keysDown[K_UP]){
            this.addVector(this.getImgAngle(), 2);
        }
        //vector-addition happens every frame
        this.addVector(this.getImgAngle(), (this.speed/20));
    }
    tempBoat.checkDrag = function(){
        speed = this.getSpeed();
        speed *= .95;
        this.setSpeed(speed);
    }
    return tempBoat;
}

function init() {
    scene = new Scene();
    scene.setBG("#000066");
    boat = boatConstructor();
    scene.start();
}

function update(){
    scene.clear();
    boat.checkKeys();
    boat.checkDrag();
    boat.update();
}