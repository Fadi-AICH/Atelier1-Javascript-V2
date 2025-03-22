function sommeChiffres(nombre) {
    let somme = 0;
    while (nombre > 0) {
        somme += nombre % 10;
        nombre = Math.floor(nombre / 10);
    }
    return somme;
}

let entier = prompt("Entrez un entier:");
entier = parseInt(entier);
alert("La somme des chiffres est: " + sommeChiffres(entier));
