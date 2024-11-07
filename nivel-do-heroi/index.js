const prompt = require("prompt-sync")()

console.log("Bem vindo ao classificador de nível de herói!");
console.log("Vamos começar com algumas informações.");

do {
let heroi = prompt("Digite o nome do seu herói: ");
let xp = parseInt(prompt("Digite a quantidade de experiência (XP) do seu herói: "));

    var nivel;
    if (xp < 1000){
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000){
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000){
        nivel = "Prata";
    }else if (xp >= 5001 && xp <= 7000){
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000){
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000){
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000){
        nivel = "Imortal";
    } else if (xp >= 10001){
        nivel = "Radiante";
    }

    console.log("O herói " + heroi + " possui " + xp + " pontos de experiência e é classificado como: " + nivel);

    resposta = prompt("Deseja fazer novamente? (sim/não) ").toLowerCase();   

} while (resposta == "sim");
console.log("Classificação encerrada.");