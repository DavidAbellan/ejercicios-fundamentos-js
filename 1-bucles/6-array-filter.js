// ej 6
// crea un array con la gente que su nombre tiene 4 letras
// utilizando el método filter de los arrays
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

var menosDeCuatro = function(n){
    
   return n.nombre.length < 5; 
}

var resultado = gente.filter(menosDeCuatro)

console.log(resultado);

var genteCuatroLetras = [];
var i = 0;
 
do {
    if (gente[i].nombre.length == 4){
        genteCuatroLetras.push(gente[i]);
        console.log(gente[i]);
    }
    i++;
    
   }while( i < gente.length )

