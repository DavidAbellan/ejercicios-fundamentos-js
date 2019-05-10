// Completa la función getCiudadesOrdenada
// La función recibirá una cadena de texto de ciudades separadas por comas

// si la función no recibe una cadena de texto o recibe una cadena de texto sin comas debe devolver 'no es un formato correcto'

////pirámide
var linea = '';
for (var i = 0; i < 6; i++) {

    for (var j = 0; j < ((6)*2+i); j++) {

        for (var z = 0; z < (6 - j) / 2; z++) {
            linea += ''
        }
        linea += '*';
    }
    console.log(linea)

}




let getCiudadesOrdenadas = (ciudades) => {
    // Aquí tu código.  Desde aquí:

    if (typeof ciudades == 'string' && ciudades.indexOf(',', 0) !== -1) {
        console.log(ciudades)
        return (ciudades.split(', ').sort());



    } else {
        return 'no es un formato correcto'


    }


    // Hasta aquí.
}


let test = require('../test.js');

test(getCiudadesOrdenadas, ['castellon, valencia, zamora, alicante'], ["alicante", "castellon", "valencia", "zamora"]);
test(getCiudadesOrdenadas, ['tuputamadre esta calva'], 'no es un formato correcto');
test(getCiudadesOrdenadas, [{}], 'no es un formato correcto');