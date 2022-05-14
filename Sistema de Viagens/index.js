function SistemaCompra() {
    alert("Sistema de Viagem");
    let listaDeDestinos = new Array(
        `\n Salvador`, //0
        `\n São Paulo`, //1
        `\n Rio de Janeiro`, //2 
        `\n Curitiba`, //3
        `\n Porto Alegre`, //4
        `\n Amazonas`, //5
        `\n Belo Horizonte` //6
    );
    alert("Destinos possiveis:" + listaDeDestinos)

    let idadeComprador = prompt("Digite a idade do Comprador");

    if (idadeComprador >= 18) {
        alert("Venda Realizada. Boa Viagem!!");
        listaDeDestinos.splice(1, 1);
    } else {
        alert("Não é maior de idade. Venda não for realizada.")
    }

    alert("Embarcando: ");
    if (idadeComprador >= 18) {
        alert("Boa Viagem!! ");
    } else {
        alert("Você não pode embarcar. ")
    }

    alert(listaDeDestinos);
}


