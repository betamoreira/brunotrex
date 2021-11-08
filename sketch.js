var trex, trex_correndo;
var solo, soloinvisivel, imagemdosolo;

var nuvem, imagemdanuvem;

var obstaculo, obstaculo1, obstaculo2, obstaculo3, obstaculo4, obstaculo5, obstaculo6;


//carrega as imagens dentro de uma variável
function preload(){
  trex_correndo = loadAnimation("trex1.png","trex3.png","trex4.png");  
  imagemdosolo = loadImage("ground2.png");
  imagemdanuvem = loadImage("cloud.png");

  obstaculo1 = loadImage("obstacle1.png");
 
}

//inicio os elementos do jogo
function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("correndo", trex_correndo);
  trex.scale = 0.5;
  
  solo = createSprite(200,180,400,20);
  solo.addImage("solo",imagemdosolo);
  solo.x = solo.width /2;
  solo.velocityX = -4;
  
  soloinvisivel = createSprite(200,190,400,10);
  soloinvisivel.visible = false;
  
  
}

//funcionamento do jogo
function draw() {
  background(180);
  
  

  //trex pula com o espaço
  if(keyDown("space") && trex.y>=160) {
    trex.velocityY = -12;
  }
  
  //gravidade do trex
  trex.velocityY = trex.velocityY + 0.8
  
  //reinicia a posição do solo
  if (solo.x < 0){
    solo.x = solo.width/2;
  }
  
  //trex colide com o solo
  trex.collide(soloinvisivel);
  
  //chamando uma função externa
  gerarNuvens();
  gerarObstaculos();
  
  drawSprites();
}

function gerarNuvens() {
  //escreva o código aqui para gerar as nuvens
  if (frameCount % 60 === 0) {
    nuvem = createSprite(600,100,40,10);
    nuvem.addImage(imagemdanuvem);
    nuvem.y = Math.round(random(10,60));
    nuvem.scale = 0.4;
    nuvem.velocityX = -3;

    nuvem.lifetime = 250;
    
    //ajuste a profundidade
    nuvem.depth = trex.depth;
    trex.depth = trex.depth + 1;

    
  }
}


function 
