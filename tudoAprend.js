// Um homem deseja investir em uma loja de livro, porém nesse momento ele não tem dinheiro o suficiente para conseguir abri-la de imediato
// o homem então se prepara pra arrecadar dinheiro por cinco anos, para isso ele vai precisar da ajuda de um banco para poder aumentar ainda mais 
// seu fundo monetario com o rendimento anual da conta bancaria, a cada mês o homem deposita 300 reais, e o rendimento do banco é de 15% anual. 
// o homem precisa de pelo menos 120000 para ter um negocio rasoavél e de 150000 para ter um negocio bom.

// se o homem não conseguir ele pretende abriar uma barraca de livros na Feira.

// crie um script que diga quanto o homem arrecadou em cinco anos e em seguida mostre quanto ele arrecadou e se conseguiu abrir o negocio ou não.

// ----------------------------------------------------------------------------------------------------------------------------------------------------

const depos = 300
const rendi = 0.15
const objeti = 150000
const objeti2 = 120000

let arreca = 0
let meses = 60


while (meses > 0) {
    arreca += depos;
    arreca += arreca * (rendi / 12)

    meses--
}

console.log(`O homem arrecadou ${arreca.toFixed(2)} em 5 anos`)

if (arreca === objeti2) {
    console.log("Ele consegui abrir um negocio rasoavel")
} else if (arreca > objeti) {
    console.log("Ele consegui abrir um bom negocio")
} else {
    console.log("Ele montou uma barrca na feira")
}

x = 0

while (arreca < objeti || arreca <= -1) {
    arreca += depos;
    arreca += arreca * (rendi / 12)

    meses++


    if (arreca >= objeti2 && x == 0) {
        console.log(`O homem arrecadou ${objeti2} em ${meses / 12} anos`)
        x++
    }
    if (arreca >= objeti) {
        console.log(`O homem arrecadou ${objeti} em ${(meses / 12).toFixed(0)} anos e ${meses % 12} meses`)
        // usamos ${(meses / 12).toFixed(0)} para definir o numero inteiro.
        // E ${meses % 12} meses`) Para pegar o resto da divisão.
        // "toFixed()" serve p definir quantos numeros vem dps da virgula, dentro do parenteses vai o valor de numeros dps da virgula.
    }
}






