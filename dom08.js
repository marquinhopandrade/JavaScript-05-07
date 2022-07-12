const eValor = document.querySelector("p");

const eButtons = document.querySelectorAll("button");
const eParButton = eButtons[0];
eParButton.addEventListener("click", ehParListener);
const eImparButton = eButtons[1];
eImparButton.addEventListener("click", ehImparListener);

const eLists = document.querySelectorAll("ul");
const eParList = eLists[0];
const eImparList = eLists[1];

function ehParListener(event){
    console.log("Eh par!")
    criaElemento(true);
}
function ehImparListener(event){
    console.log("Eh Impar!")
    criaElemento(false);
}
function criaElemento(ehPar){
    const eLi = document.createElement("li");
    eLi.textContent = eValor.textContent;
    if(ehPar === true){
        eParList.appendChild(eLi);
    } else {
        eImparList.appendChild(eLi);
    }
    sorteiaValor();
}
function sorteiaValor() {
    const novoNumero = Math.floor(Math.random()*10);
    eValor.textContent = novoNumero;
}    