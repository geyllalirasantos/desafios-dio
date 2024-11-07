const prompt = require("prompt-sync")();

function calculadora(vitorias, derrotas){
    let saldoVitorias = vitorias - derrotas;

    let nivel;
        if (vitorias <= 10){
            nivel = ("Ferro");
        } else if (vitorias >= 11 && vitorias <= 20){
            nivel = ("Bronze");
        } else if (vitorias >= 21 && vitorias <= 50){
            nivel = ("Prata");
        } else if (vitorias >= 51 && vitorias <= 80){
            nivel = ("Ouro");
        } else if (vitorias >= 81 && vitorias <= 90){
            nivel = ("Diamante");
        } else if (vitorias >= 91 && vitorias <= 100){
            nivel = ("Lendário");
        } else if (vitorias >= 101){
            nivel = ("Imortal");
        }
    
    return `O herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}.`;
}

console.log("------ CALCULADORA DE PARTIDAS RANKEADAS ------")
let vitorias = prompt("Insira a quantidade de vitórias do seu herói: ");
let derrotas = prompt("Agora insira a quantidade de derrotas do seu herói: ");
let resultado = calculadora(vitorias, derrotas);
console.log(resultado);