let nomeHeroi = "Batman";
let xp = 10000;
let nivel = "";

if (xp <= 1000) {
    nivel = "FERRO";
    console.log(`O herói de nome ${nomeHeroi} está no nível de ${nivel}`); 
}
else if (xp >= 1001 && xp <= 2000) {
    nivel = "BRONZE";
    console.log(`O herói de nome ${nomeHeroi} está no nível de ${nivel}`);
}
else if (xp >= 2001 && xp <= 5000) {
    nivel = "PRATA";
    console.log(`O herói de nome ${nomeHeroi} está no nível de ${nivel}`);
}
else if (xp >= 5001 && xp <= 7000) {
    nivel = "OURO";
    console.log(`O herói de nome ${nomeHeroi} está no nível de ${nivel}`);
}
else if (xp >= 7001 && xp <= 8000) {
    nivel = "PLATINA";
    console.log(`O herói de nome ${nomeHeroi} está no nível de ${nivel}`);
}
else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
    console.log(`O herói de nome ${nomeHeroi} está no nível de ${nivel}`);
}
else if (xp >= 9001 && xp <= 10000) {
    nivel = "IMORTAL";
    console.log(`O herói de nome ${nomeHeroi} está no nível de ${nivel}`);
}
else if (xp >= 10001) {
    nivel = "RADIANTE";
    console.log(`O herói de nome ${nomeHeroi} está no nível de ${nivel}`);
}