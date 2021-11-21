function calcular() {
    var saida = document.getElementById("textOutput")
    var n1 = Number(document.getElementById("primeiroNumero").value)
    var n2 = Number(document.getElementById("segundoNumero").value)
    var op = String(document.getElementById("operador").value)
    var resultado = 0;
    
    if (op == "+") {
        resultado = n1 + n2
        saida.innerHTML += `${n1} + ${n2} = ${resultado}` + "\r\n"
    } else if (op == "-") {
        resultado = n1 - n2
        saida.innerHTML += `${n1} - ${n2} = ${resultado}` + "\r\n"
    }
}
