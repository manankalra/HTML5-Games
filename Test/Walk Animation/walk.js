var game;
var background;
var character;

function init() {
    game = new Scene();
    background = new Sprite(game, "rpgMap.png", 800, 600);
    background.setSpeed(0, 0);
    background.setPosition(400, 300);
    character = new Sprite(game, "rpg_sprite_walk.png", 192, 128);
    character.loadAnimation(192, 128, 24, 32);
    character.generateAnimationCycles();
    character.renameCycles(new Array("down", "up", "left", "right"));
    character.setAnimationSpeed(500);
    character.setPosition(440, 380);
    character.setSpeed(0);
    character.pauseAnimation();
    character.setCurrentCycle("down");
    game.start();
}

function checkKeys() {
    if (keysDown[K_LEFT]) {
        character.setSpeed(1);
        character.playAnimation();
        character.setMoveAngle(270);
        character.setCurrentCycle("left");
    }
    if (keysDown[K_RIGHT]) {
        character.setSpeed(1);
        character.playAnimation();
        character.setMoveAngle(90);
        character.setCurrentCycle("right");
    }
    if (keysDown[K_UP]) {
        character.setSpeed(1);
        character.playAnimation();
        character.setMoveAngle(0);
        character.setCurrentCycle("up");
    }
    if (keysDown[K_DOWN]) {
        character.setSpeed(1);
        character.playAnimation();
        character.setMoveAngle(180);
        character.setCurrentCycle("down");
    }
    if (keysDown[K_SPACE]) {
        character.setSpeed(0);
        character.pauseAnimation();
        character.setCurrentCycle("down");
    }
}

function update() {
    game.clear();
    checkKeys();
    background.update();
    character.update();
}