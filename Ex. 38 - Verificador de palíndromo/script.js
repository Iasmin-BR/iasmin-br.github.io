function palindromo() {
	let saida = document.getElementById('textOutput')
	//Usei o método "toLowerCase()" para que a comparação seja indiferente a maiúsculas ou minúsculas.
	var palavra = String(document.getElementById('inputPalavra').value).toLowerCase();
	// cria variável auxiliar para armazenar a palavra invertida.
    var palavraInvertida = ""; 
    
	// percorre posições de trás para frente.
	for (var index = palavra.length - 1; index >= 0; index--) {
		// a cada turno, atualiza a variável palavra invertida com a letra inspecionada pelo loop for.
		palavraInvertida += palavra[index]; 
	}
    if (palavra == palavraInvertida) {
        saida.innerHTML += `➜ Sim, a palavra "${String(document.getElementById('inputPalavra').value)}" é um palíndromo!` + "\r\n";
    } else {
        saida.innerHTML += `➜ Infelizmente, a palavra "${palavra}" não é um palíndromo.` + "\r\n";
    }
}