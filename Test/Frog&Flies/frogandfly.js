function flyConstructor() {
    var randomFly = new Sprite(scene, "fly.png", 20, 20);
    randomFly.setSpeed(10);
    randomFly.move = function() {
        randomFly.changeAngleBy((Math.random() * 90) - 45);
    }
    randomFly.reset = function(){
        newX = Math.random() * this.cWidth;
        newY = Math.random() * this.cHeight;
        this.setPosition(newX, newY);
    }
    randomFly.reset();
    return randomFly;
}

function frogConstructor() {
    var you = new Sprite(scene, "frogIcon.png", 50, 70);
    you.setMoveAngle(360);
    you.maxSpeed = 10;
    you.minSpeed = -3;
    you.setSpeed(0);
    you.catchFly = function() {
        if (keysDown[K_UP]) {
            this.changeSpeedBy(1);
            if (this.speed > this.maxSpeed) {
                this.setSpeed(this.maxSpeed);
            }
        }
        if (keysDown[K_DOWN]) {
            you.changeSpeedBy(-1);
            if (this.speed < this.minSpeed) {
                this.setSpeed(this.minSpeed);
            }
        }
        if (keysDown[K_RIGHT]) {
            you.changeAngleBy(3);
        }
        if (keysDown[K_LEFT]) {
            you.changeAngleBy(-3);
        }
    }
    return you;
}