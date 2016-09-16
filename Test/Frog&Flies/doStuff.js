var scene;
var flies;
var frog;
var leaves;
var ribbit;
var hits;
var scoreBoard;
var NUM_FLIES = 5;

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
        updateScore();
    }
}

function init() {
    scene = new Scene();
    scene.setBG("green");
    scoreBoard = document.getElementById("board");
    hits = 0;
    leaves = new Sprite(scene, "leaves.png", 1250, 800);
    leaves.setSpeed(0);
    setUpFlies();
    frog = frogConstructor();
    ribbit = new Sound("ribbit.mp3");
    scene.start();
}

function update() {
    scene.clear();
    leaves.update();
    frog.catchFly();
    for (var j = 0; j < NUM_FLIES; j++) {
        flies[j].move();
        checkCollisions(j);
        flies[j].update();
    }
    frog.update();
}

function updateScore() {
    hits += 1;
    scoreBoard.innerHTML = "Hits: " + hits;
}