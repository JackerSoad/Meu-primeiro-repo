// Seu João deposita 250 reais todo mês até juntar 15,000 pra comprar um carro de segunda mão. sabendo que o seu banco tem o rendimento anual de 10%, quantos anos ira demorar até
// Seu João consiga o valor desejado?

const deposito = 250;
const objetivo = 15000;
const rendimento = 0.15;
const meses = 60 //60 meses são igual 5 anos

let conta = 0
let mes = 0

// Para calcuiar quantos anos serão nessecarios iremos usar a função: while (conta < objetivo) para verficar se o valor da conta bater com o objetivo e
// iremos usar: conta += deposito para adicionar o valor mensal do deposito de Seu João 
// também iremos usar: conta += conta * rendimento / 2 para multiplicar e adicionar o valor da conta anual dividido por 12 o qual é doze meses anual
// e por fim iremos usar meses += 1 para cada vez adicionar-mos +1 mês em cada loop

while (conta < objetivo) {
    conta += deposito;
    conta += conta * rendimento / 2
    meses += 1 / 60
}

console.log(`Demorou ${meses / 12} anos para juntar`)