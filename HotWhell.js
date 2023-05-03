// Tenho 50 pila pra gastar em carrinho da Hotwells, vamos escolher com sabedoria 

let dinheiro = 50.00

let porche = 13.00  //COMPRADO
let ferrari = 15.00 //COMPRADO
let fiatUno = 14.00 //NÃO COMPRADO
let corsa = 10.00 //COMPRADO
let fuscãoPreto = 12.00 //COMPRADO


// A soma de todos os carros são 64 reais porém só tenho 50 reais.
// irei comprar o Porche 911 que é o que mais me agrada.

if (porche < dinheiro) {
    console.log(`Comprei o Porche 911`)
}


dinheiro = dinheiro - porche
console.log(`Tenho ${dinheiro} sobrando`)

// O Porche me custou 13 reais me resta agora 37 reais para os outros carros.
// esse dinheiro dividido pra 2 dá 18.50 o suficiente pra comprar mais dois carros
// mas se eu conseguir administrar certo posso pegar mais um carro

dinheiro = dinheiro / 2
console.log(`Tenho ${dinheiro} pra mais 2 carros.`)


if (ferrari < dinheiro) {
    console.log(`Comprei uma Ferrari F40`)
}

// A ferrari custou 15.00 

dinheiro = (dinheiro * 2 - ferrari)
console.log(`Tenho ${dinheiro} sobrando`)

if (fiatUno <= dinheiro / 2) {
    console.log(`Comprei um Fiat Uno`)
} else {
    console.log(`Não comprei o Fiat Uno`)
}

if (corsa <= dinheiro / 2) {
    console.log(`Comprei um corsa`)
    dinheiro = (dinheiro - corsa)
    console.log(`Tenho ${dinheiro} sobrando`)
} else {
    console.log(`Não comprei o corsa`)
}

// Com esses 12 reais consigo compra um FUSCÃO PRETO

if (fuscãoPreto <= dinheiro) {
    console.log(`Comprei um FUSCÃO PRETO`)
}
