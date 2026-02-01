let a = 10;
let b = 5;

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "No se puede dividir entre 0";
    }
    return a / b;
}

console.log(sumar(a, b));
console.log(restar(a, b));
console.log(multiplicar(a, b));
console.log(dividir(a, b));



