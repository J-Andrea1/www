/*
 *
 * Ejercicio 1: Implemente una funcion que retorne la suma de todos los elementos en el arreglo.
 *
 * Autor: ANDREA VILLEGAS
 * Fecha: 27/07/2019
 *
 */

let arraySum = function(array) {
    // TODO: Tu codigo aqui!

    let suma = 0;
    for (i = 0; i < array.length; i++) {
        suma += array[i];
    }

    return suma;
};

// Prueba (No modificar)

const a = [7, 6, 5, 4, 3];
const b = [-3, -4, -5, -6, -7];
const c = [33];

function Sumar() {

    if (arraySum(a) === 25 &&
        arraySum(b) === -25 &&
        arraySum(c) === 33) {
        console.log('Ejercicio 1 paso la prueba!');

        document.getElementById('r1').innerHTML = arraySum(a);

        document.getElementById('r2').innerHTML = arraySum(b);

        document.getElementById('r3').innerHTML = arraySum(c);

    } else {
        console.log('Ejercicio 1 no paso la prueba!');
    }
}