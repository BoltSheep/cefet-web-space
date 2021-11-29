function calculaFormula() {
    const resultado = document.getElementById('resultado');
    resultado.disabled = false;

	const massa1 = document.getElementById('massa1');
	const massa2 = document.getElementById('massa2');
	const distancia = document.getElementById('distancia');
    const calcFomula = (6.67e-11 * massa1.value * massa2.value)/Math.pow(distancia.value, 2);
    
    resultado.value = calcFomula;
}