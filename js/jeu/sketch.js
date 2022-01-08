let logo;
let newRocker;
let bouteille;
let bouteille2;
let lion;
let lampe;
let journal;
let crayon;

let started = false;

let gameStateObject = [];

let indices = 0;
let oneActivated = false;

var moving = false;

let remainingTime = 120;

let min = 2;
let sec = 00;

function preload() {
  logo = loadImage("assets/logo_liste.png");
  bouteille = loadImage("assets/bouteille.png");
  bouteille2 = loadImage("assets/bouteille1.png");
  lion = loadImage("assets/LION.png");
  lampe = loadImage("assets/lampe.png");
  journal = loadImage("assets/journal.png");
  crayon = loadImage("assets/crayon V23.png");
  
  newRocker = loadFont("assets/NewRocker-Regular.ttf");
}

function setup() {
    var canvas = createCanvas(640, 480);
    canvas.parent('sketch-holder');

    loadGameObjects();

    textFont(newRocker);
}

function mousePressed() {
  let rempl = [];
  
  for(let i = gameStateObject.length - 1; i >= 0; i--) {
    let GO = gameStateObject[i];
    
    if(!oneActivated) {
      GO.update();
      if(GO.type != "suppress" && GO.isInside(mouseX, mouseY)) {
        oneActivated = true;
      }
    }
    
    rempl.push(GO);
  }

  oneActivated = false;

  gameStateObject = []
  for(let i = rempl.length - 1; i >= 0; i--) {
    GO = rempl[i];
    if(GO.type != "suppress") {
      gameStateObject.push(GO);
    }
    else {
      indices++;
    }
  }
}

function mouseDragged() {
  for(let i = gameStateObject.length - 1; i >= 0; i--) {
    let GO = gameStateObject[i];
    if(GO.type != "lion") GO.update();
  }
}

function keyPressed() {
  if(started == false) started = true;
}

function draw() {
  if(!started) {
    background(0);
    textSize(32);
    fill(255, 80, 42);
    text("Appuies sur une touche pour commencer", 40, 220, 600, 50);
  } else if(remainingTime >= 0 && indices < 8) {
    background(0);
    for(let i = 0; i < gameStateObject.length; i++) {
      let GO = gameStateObject[i];
      GO.show();
    }

    updateTimer();

    fill(255, 0, 0);
    text(indices, 540, 10, 100, 100);
  }
  else {
    background(0);
    textSize(50);
    fill(255, 80, 42);
    text("Tu as trouvé " + indices + " indices !", 50, 220, 600, 50);
    textSize(15);
    text("Prends ton score en photo et envoie-le à la liste pour recevoir tes indices.", 60, 300, 800, 50);
  }
}


function loadGameObjects() {
  gameStateObject.push(new GameObject(lion, "lion", 566, 370, 26, 26));
  gameStateObject.push(new GameObject(lion, "lion", 439, 382, 26, 26));
  gameStateObject.push(new GameObject(lion, "lion", 303, 292, 26, 26));
  gameStateObject.push(new GameObject(lion, "lion", 189, 418, 26, 26));
  gameStateObject.push(new GameObject(lion, "lion", 334, 400, 10, 10));
  gameStateObject.push(new GameObject(lion, "lion", 571, 465, 26, 26));
  gameStateObject.push(new GameObject(lion, "lion", 393, 305, 18, 18));
  gameStateObject.push(new GameObject(lion, "lion", 588, 314, 14, 14));

  gameStateObject.push(new GameObject(bouteille, "obj", 476, 323, 25, 51));
  gameStateObject.push(new GameObject(bouteille, "obj", 458, 323, 25, 51));
  gameStateObject.push(new GameObject(bouteille, "obj", 441, 323, 25, 51));
  gameStateObject.push(new GameObject(bouteille, "obj", 580, 301, 25, 51));

  gameStateObject.push(new GameObject(lampe, "obj", 531, 101, 103, 307));

  gameStateObject.push(new GameObject(bouteille2, "obj1", 353, 376, 55, 25));
  gameStateObject.push(new GameObject(bouteille2, "obj1", 185, 420, 55, 26));

  gameStateObject.push(new GameObject(journal, "obj", 406, 368, 104, 63));
  gameStateObject.push(new GameObject(journal, "obj", 266, 275, 93, 61));

  gameStateObject.push(new GameObject(bouteille, "obj", 264, 286, 25, 51));

  gameStateObject.push(new GameObject(crayon, "obj", 285, 280, 51, 25));

  gameStateObject.push(new GameObject(logo, "obj", 390, 306, 22, 22));
}

function updateTimer() {
  textSize(32);
  fill(255, 0, 0);
  text(min + ":" + sec, 10, 10, 100, 100);

  remainingTime -= deltaTime / 1000;
  min = int(remainingTime / 60);
  sec = int(remainingTime % 60);
}