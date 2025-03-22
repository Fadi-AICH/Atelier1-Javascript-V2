function pgcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

let num1 = prompt("Entrez le premier entier:");
let num2 = prompt("Entrez le deuxième entier:");
num1 = parseInt(num1);
num2 = parseInt(num2);

alert("Le PGCD est: " + pgcd(num1, num2));
