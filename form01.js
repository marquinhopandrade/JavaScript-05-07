let estado ={
cor: "#000000",
largura:0,
altura:0
};

document.exm01.addEventListener('submit', submitListener);

function criaElemento(cor, altura,largura){
    const eNovo = document.createElement("div");
    eNovo.textContent = `${cor} ${altura}  ${largura} ${altura+largura}`;
    eNovo.style=`color: ${cor};`
    document.body.appendChild(eNovo);
}

function submitListener(event) {
    event.preventDefault();
    estado.cor = document.exm01.cor.value,
    estado.altura = Number(document.exm01.altura.value),
    estado.largura = Number(document.exm01.largura.value) 
    criaElemento(estado.cor,
    estado.largura,estado.altura);

 document.exm01.reset();
}
