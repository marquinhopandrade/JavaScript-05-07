console.log("Hello 07")
const eSpans = document.querySelectorAll("span");
const eA = eSpans[0];
const eB = eSpans[1];
const eC = eSpans[2];

const eButtons = document.querySelectorAll("button");
const eButtonSoma = eButtons[0];
const eButtonMultiplica = eButtons[1];

eButtonSoma.addEventListener("click", somaListener);
eButtonMultiplica.addEventListener("click", multiplicaListener);
//opera os dados

function somaListener(event)
{
    console.log("Soma Listener");
    soma();
}
function multiplicaListener(event)
{
    console.log("Multiplica Listener");
    multi();
}
function soma(){ 
    console.log("Soma!");
    const A = Number (eA.textContent);
    const B = Number (eB.textContent);
    const C = A+B;
    eC.textContent = C;

}
function multi(){ 
    const A = Number (eA.textContent);
    const B = Number (eB.textContent);
    const C = A*B;
    eC.textContent = C;
}
function ouvinteClick(event){
    console.log("ouvinteClick ")
    soma();
    multi();
}