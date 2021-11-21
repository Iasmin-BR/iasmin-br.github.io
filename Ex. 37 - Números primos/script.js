function gerarPrimos() {
	let saida = document.getElementById('textOutput')
	var numInput = document.getElementById("num");
	var n = Number(numInput.value);
	var numerosPrimos = [];
	for (var numeroAtual = 2; numeroAtual < n; numeroAtual++) {
		var quantidadeDeDivisores = 0;
		for (var numeroMenor = 2; numeroMenor < numeroAtual; numeroMenor++) {
					
			if (numeroAtual % numeroMenor == 0) {
				quantidadeDeDivisores++;
			} 
		}
		if (quantidadeDeDivisores == 0) {
			numerosPrimos.push(" " + numeroAtual);
		}
	}
	saida.innerHTML += `Números primos de 0 até ${n} ➜ ${numerosPrimos};` + "\r\n"
}