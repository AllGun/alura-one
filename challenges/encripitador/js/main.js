const inputText = document.querySelector(".input-text");
const outputText = document.querySelector(".output-text");

function encryptBtn() {
  const textEncryp = inputText.value;
  console.log(textEncryp);
}

/* As "chaves" de criptografar que utilizaremos são:
    A letra "e" é convertida para "enter"
    A letra "i" é convertida para "imes"
    A letra "a" é convertida para "ai"
    A letra "o" é convertida para "ober"
    A letra "u" é convertida para "ufat"
*/

function messageEncrypt(encryptString) {
  let matrixCode = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  encryptString = encryptString.toLowerCase();

  for (let i=0; i< matrixCode.length; i++) {
    
  }
}

function decryptBtn() {
  console.log("clicou");
}
