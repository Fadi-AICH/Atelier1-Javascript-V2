function validateForm() {
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let phoneRegex = /^\d{10}$/;

    if (!emailRegex.test(email)) {
        alert("Email invalide!");
        return false;
    }

    if (!phoneRegex.test(phone)) {
        alert("Numéro de téléphone invalide!");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Les mots de passe ne correspondent pas!");
        return false;
    }

    alert("Formulaire validé!");
    return true;
}
