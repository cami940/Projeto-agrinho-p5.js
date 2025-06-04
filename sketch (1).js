let truckX = 0;

function setup() {
  createCanvas(800, 400);
  textFont('Georgia');
}

function draw() {
  background(220);

  // Fundo: metade campo, metade cidade
  noStroke();
  fill(144, 238, 144); // Verde - campo
  rect(0, 0, width / 2, height);

  fill(200); // Cinza - cidade
  rect(width / 2, 0, width / 2, height);

  // Sol no campo
  fill(255, 204, 0);
  ellipse(100, 80, 80, 80);

  // Tratores no campo
  drawTractor(150, 300);
  drawTractor(250, 320);

  // Prédios na cidade
  drawBuildings();

  // Caminhão indo do campo para a cidade
  drawTruck(truckX, 360);
  truckX += 2;
  if (truckX > width) {
    truckX = -100;
  }

  // Comunicação (balões de fala)
  fill(255);
  stroke(0);
  rect(700, 50, 130, 50, 10);
  fill(0);
  textSize(12);
  text("Do campo vem o alimento!", 250, 80);

  fill(255);
  rect(800, 50, 130, 50, 10);
  fill(0);
  text("Obrigado, trabalhadores rurais!", 500, 80);

  // Título
  noStroke();
  fill(50);
  textSize(20);
  textAlign(CENTER);
  text("Festejando a Comunicação Campo-Cidade", width / 2, 30);
}

// Função para desenhar o caminhão
function drawTruck(x, y) {
  fill(255, 0, 0);
  rect(x, y, 100, 40);
  fill(0);
  ellipse(x + 20, y + 40, 20);
  ellipse(x + 80, y + 40, 20);
  fill(255);
  rect(x + 60, y - 20, 40, 20); // cabine
}

// Função para desenhar tratores
function drawTractor(x, y) {
  fill(0, 100, 0);
  rect(x, y, 50, 30);
  fill(0);
  ellipse(x + 10, y + 30, 20);
  ellipse(x + 40, y + 30, 30);
}

// Função para desenhar prédios
function drawBuildings() {
  fill(100);
  rect(450, 250, 50, 150);
  rect(520, 200, 60, 200);
  rect(600, 220, 40, 180);
  fill(255);
  for (let x = 455; x < 640; x += 20) {
    for (let y = 260; y < 380; y += 20) {
      rect(x, y, 10, 10);
    }
  }
}

