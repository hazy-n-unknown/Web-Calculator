const operators = ["+", "-", "×", "÷"];
let screen = document.getElementById("screen");

function addNumber(button) {
    if (screen.value == "0") 
	{ 
		screen.value = button.innerHTML;
	}
	else 
	{
		screen.value += button.innerHTML;
	}

}


function operation(button) {
	let lastChar = screen.value.charAt(screen.value.length -1);
			
	for (const operator of operators)
	{		
		if (button.innerHTML == operator && lastChar != operator) {							

			// Apaga o sinal antigo se o último caractere na tela é um operador aritmético								
			if(operators.includes(lastChar)){ 

				screen.value = screen.value.slice(0, screen.value.length -1);
    		}
		
    // Adiciona o sinal novo																													
	screen.value += operator;
	last_operation = operator;
	}
	}						

}


function result() {
	const show_results = eval(screen.value.replace(/÷/g, "/").replace(/×/g, "*"));
	screen.value = show_results;
	screen.value = screen.value;
}


function clearAll() {
	screen.value = 0;
	rtr.innerHTML = "";
}


function decimate() {
	// Encontra a última ocorrência na tela da calculadora de um operador aritmético
	last_occurence = -1;
	for (operator of operators)
	{
	detected_index = screen.value.lastIndexOf(operator);

		if (detected_index > last_occurence)
		{	
		last_occurence = detected_index;
		}
	}

	// Extrai o número que aparece após o último uso de um operador aritmético
	let last_number = screen.value.substring(last_occurence + 1);
	// Verifica se inexiste um ponto nesse número. Evita erros.
	if (last_number.indexOf(".") == -1)
	{
		screen.value += ".";
	}

}


function perCentum() {
	let last_occurence = -1;

	// Encontra a última ocorrência na tela da calculadora de um operador aritmético
	for (operator of operators)
	{
	detected_index = screen.value.lastIndexOf(operator);

		if (detected_index > last_occurence)
		{	
		last_occurence = detected_index;
		}
	}

	// Define o número a ser substituido e o transforma em %
	let number = screen.value.substring(last_occurence + 1);
	let replace_with = number / 100;

	// Faz a substituição apenas na última ocorrência do número
	last_occurence = screen.value.lastIndexOf(number)
	if (last_occurence != -1)
	{	
		screen.value = screen.value.slice(0, last_occurence) + screen.value.slice(last_occurence).replace(number, replace_with);

	}

}


function clearEntry() {
	screen.value = screen.value.slice(0, -1);

	if (screen.value == "")
	{	
		screen.value = "0";
	}
	
}