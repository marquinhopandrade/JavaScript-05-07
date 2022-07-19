document.exm01.addEventListener('submit', submitListener);

function criaElemento(cor, altura,largura){
    const eNovo = document.createElement("div");
    eNovo.textContent = `${cor} ${altura} ${largura}`;
    document.body.appendChild(eNovo);
}

function submitListener(event) {
    event.preventDefault();

    criaElemento(
        document.exm01.cor.value,
        document.exm01.altura.value,
        document.exm01.largura.value
        );

 document.exm01.reset();
}
