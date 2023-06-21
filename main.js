function preload() {
	world_start = loadSound("world_start.wav");
    mario_die = loadSound("mariodie.wav");
    mario_jump = loadSound("jump.wav");
    mario_kick = loadSound("kick.wav");
    mario_coin = loadSound("coin.wav");
    mario_over = loadSound("gameover.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240, 336);
    canvas.parent("canvas");
	instializeInSetup(mario);
    video = createCapture(VIDEO);
    video.parent("game_console");
    video.size(500, 300);
}

function draw() {
    game();
}






