var scene;
var flies;
var frog;
var leaves;
var ribbit;
var hits;
var scoreBoard;
var timer;
var time;
var NUM_FLIES = 5;
var MAX_TIME = 10;

function setUpFlies() {
    flies = new Array(NUM_FLIES);
    for (var i = 0; i < NUM_FLIES; i++) {
        flies[i] = flyConstructor();
    }
}

function checkCollisions(flyNum) {
    if (frog.collidesWith(flies[flyNum])) {
        flies[flyNum].reset();
        ribbit.play();
        hits += 1;
        updateScore();
        if (hits == 5) {
            scene.stop();
            scoreBoard.innerHTML = "You've got 5 hits. Hurray!!";
        }
    }
}

function init() {
    scene = new Scene();
    scene.setBG("green");
    scoreBoard = document.getElementById("board");
    hits = 0;
    timer = new Timer();
    leaves = new Sprite(scene, "leaves.png", 1250, 800);
    leaves.setSpeed(0);
    setUpFlies();
    frog = frogConstructor();
    ribbit = new Sound("ribbit.mp3");
    scene.start();
}

function update() {
    scene.clear();
    checkTime();
    leaves.update();
    frog.catchFly();
    for (var j = 0; j < NUM_FLIES; j++) {
        flies[j].move();
        checkCollisions(j);
        flies[j].update();
    }
    frog.update();
}
function checkTime(){
    time = timer.getElapsedTime();
    updateScore();
    if (time > MAX_TIME) {
        scene.stop();
        scoreBoard.innerHTML = "Time Over!";
    }
}
function restart(){
    document.location.href = "";
}
function updateScore() {
    scoreBoard.innerHTML = "Hits: " + hits + "<br/>Time: " + time;
}