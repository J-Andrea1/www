/*
 * Ejercicio 3: Duplicar el contenido de los valores del arreglo
 *
 * e.g. [2, 3, 4] -> [4, 6, 8]
 *
 * Autor: ANDREA VILLEGAS
 * Fecha: 27/07/2019
 *
 */

let arrayDoble = function(array, callback) {
    // TODO: Tu codigo aqui!
    for (i = 0; i < array.length; i++) {
        array[i] = callback(array[i]);
    }
};

let array = [2, 3, 4];

arrayDoble(array, (value) => {
    // TODO: Tu codigo aqui!
    return value * 2;
});

// Prueba (No modificar!)

function Doble() {

    if (array.length === 3 &&
        array[0] === 4 &&
        array[1] === 6 &&
        array[2] === 8) {
        console.log('Ejercicio 3 paso el test!');

        document.getElementById('r1').innerHTML = array.length;
        document.getElementById('r2').innerHTML = array[0];
        document.getElementById('r3').innerHTML = array[1];
        document.getElementById('r4').innerHTML = array[2];



    } else {
        console.log('Ejercicio 3 no paso el test!');
    }
}