console.log("Hello World");

var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");

pincel.fillStyle = "white";
pincel.fillRect(0, 0, 1530, 757);

// Variáveis de escopo global
var xAleatorio, yAleatorio;

function limpaTela() {
  pincel.clearRect(0, 0, 1530, 757);
}

function allPosition(max) {
  return Math.floor(Math.random() * max);
}

function desenhaAlvo(x, y) {
  pincel.fillStyle = "blue";
  pincel.beginPath();
  pincel.arc(x, y, 30, 0, 2 * Math.PI);
  pincel.fill();

  pincel.fillStyle = "white";
  pincel.beginPath();
  pincel.arc(x, y, 20, 0, 2 * Math.PI);
  pincel.fill();

  pincel.fillStyle = "blue";
  pincel.beginPath();
  pincel.arc(x, y, 10, 0, 2 * Math.PI);
  pincel.fill();
}

function atualizaTela() {
  xAleatorio = allPosition(1500);
  yAleatorio = allPosition(727);
  limpaTela();
  desenhaAlvo(xAleatorio, yAleatorio);
}
setInterval(atualizaTela, 2000);

function dispara(evento) {
  var x = evento.pageX - tela.offsetLeft,
    y = evento.pageY - tela.offsetTop;

  console.log("x = " + x);
  console.log("xAleatorio = " + xAleatorio);
  console.log("y = " + y);
  console.log("yAleatorio = " + yAleatorio);

  if (
    x > xAleatorio - 10 &&
    x < xAleatorio + 10 &&
    y > yAleatorio - 10 &&
    y < yAleatorio + 10
  ) {
    alert("Acertou miserável!!!");
  }
}

tela.onclick = dispara;
