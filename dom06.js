console.log("Hello 06")
//captura referências do DOM
const eP = document.querySelector("p");
const eButton = document.querySelector("button");
function mudaTexto(){ //so declara a função
    console.log("mudaText chamada!");
    eP.textContent = "Ok, funcionou!";
}
function ouvinteClick(event){
    console.log("ouvinteClick ")
    mudaTexto();
}
eButton.addEventListener("click", ouvinteClick);