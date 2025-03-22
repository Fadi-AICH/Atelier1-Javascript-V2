function decimalToBinary(n) {
    if (n === 0) return '';
    return decimalToBinary(Math.floor(n / 2)) + (n % 2);
}

let decimal = prompt("Entrez un nombre décimal:");
decimal = parseInt(decimal);
alert("Le nombre binaire est: " + decimalToBinary(decimal));
