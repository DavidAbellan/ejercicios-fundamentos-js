// Un palíndromo es una palabra que se escribe igual del derecho que del revés por ejemplo orejero, rallar o somos.
// Edita la función querecibirá una cadena de texto y deberá comprar si es un palíndromo o no.

// si la función no recibe una cadena de texto o está vacía 'no es un formato correcto'

let esPalindromo = (palabra) => {
    // Aquí tu código.  Desde aquí:
     
    var alReves=''
    if (typeof palabra !== 'string' || palabra == '') {
        return 'no es un formato correcto'

    } else {
       for (var i=palabra.length; i >= 0; i--){
          
        alReves += palabra.charAt(i)

       }
       console.log(palabra, 'al reves' ,alReves);
       return palabra == alReves;

       
    }
    //Hasta aqui.
}


let test = require('../test.js');

test(esPalindromo, ['castellon'], false);
test(esPalindromo, ['rallar'], true);
test(esPalindromo, [{}], 'no es un formato correcto');
test(esPalindromo, [''], 'no es un formato correcto');
test(esPalindromo, ['o'], true);