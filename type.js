function insert(num) {
    var resultado = document.getElementById('resultado');
    var numero = resultado.innerHTML;

    if (numero === "Digite os numeros") {
        resultado.innerHTML = num;
    } else {
        resultado.innerHTML = numero + num;
    }
}
function clean() {
    document.getElementById('resultado').innerHTML = "";
}

function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1)
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else {
        document.getElementById('resultado').innerHTML = "Digite os numeros"
    }
}