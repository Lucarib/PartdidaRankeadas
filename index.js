

let saldoVictory = subtraction(200, 30)

function subtraction (victory, defeat ){
    let somatorio = victory - defeat 
    return somatorio
}

if ( saldoVictory < 10) {
    nivel = "Ferro";
}
else if (saldoVictory >= 11 && saldoVictory <= 20) {
    nivel = "Bronze";
}
else if (saldoVictory >= 21 && saldoVictory <= 50) {
    nivel = "Prata";
}
else if (saldoVictory >= 51  && saldoVictory <= 80) {
    nivel = "Ouro";
}
else if (saldoVictory >= 81 && saldoVictory <= 90) {
    nivel = "Diamante";
}
else if (saldoVictory >= 91 && saldoVictory <= 100) {
    nivel = "Lendario";
}
else {
    nivel = "Imortal";
}


console.log( " O Herói tem de saldo de " + saldoVictory  +  " está no nivel de "  + nivel)