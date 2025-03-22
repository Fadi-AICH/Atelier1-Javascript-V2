function tableMultiplication() {
    let valeur = prompt("Entrez une valeur pour la table de multiplication:");
    valeur = parseInt(valeur);
    for (let i = 1; i <= 10; i++) {
        console.log(`${valeur} x ${i} = ${valeur * i}`);
    }
}
tableMultiplication();
