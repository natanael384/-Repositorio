function mostrarBienvenida() {
    let nombre = document.getElementById("nombre").value;
    let resultado = document.getElementById("resultado");

    if (nombre === "") {
        alert("Por favor, ingresa tu nombre 😄");
    } else {
        resultado.textContent = "😉😉¡Bienvenido/" + nombre + "! Nos alegra tenerte con nosotros.🤑🤑🤑";
    }
}
