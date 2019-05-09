// Adapta la funcion getPrecioMostrar para que devuelva una cadena de texto con el siguiente formato 1.22 €

// si la función no recibe una cadena de texto o está vacía 'no es un formato correcto'

let getPrecioMostrar = (precio) => {
    // Aquí tu código.  Desde aquí:
  if (typeof precio !== 'number'){
      return 'no es un formato correcto'
  } else {
      return precio.toFixed(2) + ' €';
  }


    // Hasta aquí



}


let test = require('../test.js');

test(getPrecioMostrar, [''], 'no es un formato correcto');
test(getPrecioMostrar, [2], '2.00 €');
test(getPrecioMostrar, [0], '0.00 €');
test(getPrecioMostrar, [2.382], '2.38 €');
test(getPrecioMostrar, [2.389], '2.39 €');