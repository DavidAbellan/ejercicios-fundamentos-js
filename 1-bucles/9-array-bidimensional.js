// ej 9
// Rellena la matriz como la siguiente utilizando bucles for anidados
// let matriz = [
//   ['00','01','02'],
//   ['10','11','12'],
//   ['20','21','22']
// ];

let matriz = [
    [],
    [],
    []
]


if (x >= 18) {
   console.log('mayor');
} else if ( x > 10) {
    console.log('joven');
} else {
    console.log('nino');
}
var arrayamostrar = [];

for (i = 0; i < 3; i++) {
    var nuevoArray = [];
    for (j = 0; j < 3; j++) {
        nuevoArray.push('' + i + j)

    }

    arrayamostrar.push(nuevoArray);

}
console.log(arrayamostrar);
