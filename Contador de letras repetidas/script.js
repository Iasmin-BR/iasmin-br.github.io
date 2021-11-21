function contadorDeLetra() {
	let saida = document.getElementById('textOutput')
	//Usei o método "toLowerCase()" para que a comparação seja indiferente a maiúsculas ou minúsculas.
	let frase = String(document.getElementById('inputFrase').value).toLowerCase()
	let letra = String(document.getElementById('inputLetra').value).toLowerCase()
	let contador = 0
	for (var index = 0; index < frase.length; index++) {
		if (frase[index] == letra) {
			contador++
		}
	}
	saida.innerHTML += `Vezes em que a letra "${letra}" aparece na frase = ${contador}` + "\r\n"
}