function logArrayElements (elemento, index, array) {
		console.log('numeros[' + index + '] = ' + elemento);
	} 

		var numeros = [0,1,2,3,4];

		numeros.forEach(logArrayElements);
	
	// logs:
	// numeros[0] = 0   
	// numeros[1] = 1
	// numeros[2] = 2
	// numeros[3] = 3
	// numeros[4] = 4

function logArrayElements (elemento, index, array) {
		console.log(elemento);
	}

		var libros = ['El principito','El psicoanalista','El ruido y la furia'];

		libros.forEach(logArrayElements);

	// logs :
	//El principito
	//El psicoanalista
	//El ruido y la furia

function logArrayElements (elemento, index, array) {
		console.log(index + ' ' + elemento);
	}

		var ciudades = ['San Juan', 'Cordoba', 'Buenos Aires'];

		ciudades.forEach(logArrayElements);

	// 0 San Juan
	// 1 Cordoba
	// 2 Buenos Aires