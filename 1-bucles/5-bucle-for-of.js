// ej 5
// crea un array con la gente que empieza por J
// Sin utilizar el método filter de los arrays
// Utilizad el bucle for of
// y muéstralo por consola.

let gente = [{
        nombre: 'Jamiro',
        edad: 45
    },
    {
        nombre: 'Juan',
        edad: 35
    },
    {
        nombre: 'Paco',
        edad: 34
    },
    {
        nombre: 'Pepe',
        edad: 14
    },
    {
        nombre: 'Pilar',
        edad: 24
    },
    {
        nombre: 'Laura',
        edad: 24
    },
    {
        nombre: 'Jenny',
        edad: 10
    },
]
var nombresJMenores40 = function(n) {
    return n.nombre[0] === "J"

}
var solucion = gente.filter(nombresJMenores40);
console.log(solucion);

var genteConJ = [];
for (i=0; i < gente.length; i++){
    if (gente[i].nombre[0] == "J" ){
        genteConJ.push(gente[i]);
        console.log(gente[i]); 
    }
}