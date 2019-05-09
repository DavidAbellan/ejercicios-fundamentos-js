// crea la función  transformaArrayEnOtraConSusLongitudes
// debe recibir un array 
// devolver y otro array con las longitudes de los strings recibidos en el array

// Si la función no recibe un dato tipo object / array  
// debe devolver el string 'Debo ser ejecutada con un array'
// puedes comprobar si es un array con:
//  typeof array === 'object' && array.length >= 0

var arrayLongitud = function (p){
    return p.length;
}

if (typeof arrayLongitud === 'object' && arrayLongitud.length >= 0) {
    var resultado = longitud.filter(arrayLongitud);
    

} else { return ('Debo ser ejecutada con un array')}


console.log(resultado);





for ( var i = 0; i < 6 ; i++){
       var linea = '';
    for (var j = 6; j > i; j-- ){
       
        linea +='*';
    }
    console.log(linea)
    
}



////o
var numeroLineas = 6;
for(var i = 0; i<numeroLineas;i++){
    console.log('*'.repeat(numeroLineas-i))
}




// Ha de pasar los test adjuntados.

let transformaArrayEnOtraConSusLongitudes = (arrayDeStrings) => {
    let arrayDeLongitudes = [];
    
    // Aquí tu código.  Desde aquí:
    if (typeof arrayDeStrings === 'object' && arrayDeStrings.length >= 0) {
        
        for (var item of arrayDeStrings) {
            var contador = 0;
            for (var i=0 ;  i<item.length ; i++) {

               
                    contador ++;
                


            }
            arrayDeLongitudes.push(contador)
        }
    } else {
        return ('Debo ser ejecutada con un array')
    }

    // Hasta aquí.
    return arrayDeLongitudes
}




let test = require('../test.js');

test(transformaArrayEnOtraConSusLongitudes, [
    ['juan', 'paco', 'pepe']
], [4, 4, 4]);
test(transformaArrayEnOtraConSusLongitudes, [
    ['EY', 'hoy', 'qqq']
], [2, 3, 3]);
test(transformaArrayEnOtraConSusLongitudes, [
    ['EY', 'hoy', 'qqqs', 'hola']
], [2, 3, 4, 4]);
test(transformaArrayEnOtraConSusLongitudes, [''], 'Debo ser ejecutada con un array');
test(transformaArrayEnOtraConSusLongitudes, [true], 'Debo ser ejecutada con un array');
test(transformaArrayEnOtraConSusLongitudes, [{}], 'Debo ser ejecutada con un array');