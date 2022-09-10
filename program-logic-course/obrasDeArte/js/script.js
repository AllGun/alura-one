console.log("Hello World!!");

function desenhaQuadrado(x, y, tamanho, cor) {
  pincel.fillStyle = cor;
  pincel.fillRect(x, y, tamanho, tamanho);
  pincel.fill();
}

function desenhaCirculo(x, y, raio, cor) {
  pincel.fillStyle = cor;
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2 * 3.14);
  pincel.fill();
}

function desenhaPaletaDeCores() {
  desenhaQuadrado(xVermelho, yQuadrados, tamanhoQuadrados, "red");
  desenhaQuadrado(xVerde, yQuadrados, tamanhoQuadrados, "green");
  desenhaQuadrado(xAzul, yQuadrados, tamanhoQuadrados, "blue");
  desenhaQuadrado(xPink, yQuadrados, tamanhoQuadrados, "pink");
  desenhaQuadrado(xOrange, yQuadrados, tamanhoQuadrados, "orange");
}

var x, y;

function lidaComMovimentosDoMouse(evento) {
  x = evento.pageX - tela.offsetLeft;
  y = evento.pageY - tela.offsetTop;

  if (x > 0 && x < 250 && y <= 52.5) {
    desenha = false;
  }

  if (desenha) {
    desenhaCirculo(x, y, 5, corAtual);
  }
}

function habilitaDesenhar() {
  desenha = true;
}

function desabilitaDesenhar() {
  desenha = false;
}

var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");

pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 1530, 757);

var desenha = false,
  corAtual = "red",
  xVermelho = 0,
  xVerde = 50,
  xAzul = 100,
  xPink = 150;
xOrange = 200;
(yQuadrados = 0), (tamanhoQuadrados = 50);

function trocaCor(evento) {
  var x = evento.pageX - tela.offsetLeft,
    y = evento.pageY - tela.offsetTop;

  if (x > 0 && x < 50 && y > 0 && y < 50) {
    corAtual = "red";
  } else if (x > 50 && x < 100 && y > 0 && y < 50) {
    corAtual = "green";
  } else if (x > 100 && x < 150 && y > 0 && y < 50) {
    corAtual = "blue";
  } else if (x > 150 && x < 200 && y > 0 && y < 50) {
    corAtual = "pink";
  } else if (x > 200 && x < 250 && y > 0 && y < 50) {
    corAtual = "orange";
  }

  console.log("x = " + x);
  //console.log("xAleatorio = " + xAleatorio);
  console.log("y = " + y);
  // console.log("yAleatorio = " + yAleatorio);
}

desenhaPaletaDeCores();

tela.onmousemove = lidaComMovimentosDoMouse;
tela.onmousedown = habilitaDesenhar;
tela.onmouseup = desabilitaDesenhar;
tela.onclick = trocaCor;
