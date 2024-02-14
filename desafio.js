let heroi = "RicardoPikachu"
let pontosXp = 11000

let nivelHeroi;

if (pontosXp < 1000) {
    nivelHeroi = "Ferro";

} else if (pontosXp >= 1001 && pontosXp <= 2000) {
    nivelHeroi = "Bronze";
    
} else if (pontosXp >= 2001 && pontosXp <= 5000) {
    nivelHeroi = "Prata";

} else if (pontosXp >= 5001 && pontosXp <= 7000) {
    nivelHeroi = "Ouro";

} else if (pontosXp >= 7001 && pontosXp <= 8000) {
    nivelHeroi = "Platina";

}else if (pontosXp >= 8001 && pontosXp <= 9000) {
    nivelHeroi = "Ascendente";

}else if (pontosXp >= 9001 && pontosXp <= 10000) {
    nivelHeroi = "Imortal";

} else {
    nivelHeroi = "Radiante";
}

console.log("O Herói de nome " + heroi + " está no nível de "+ nivelHeroi)
