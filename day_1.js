/*Crea un programa en **JavaScript** que reciba un arreglo de números y calcule:

1. La **suma total** de los elementos.
2. El **promedio** de los elementos. Se calcula sumando todos los elementos y dividiendo entre la cantidad.
3. La **mediana** del arreglo.  valor del medio (o promedio de los dos del medio si es par).

Tip: recuerda que la **mediana** es el valor que queda en la mitad cuando el arreglo está ordenado.

- Si la cantidad de elementos es impar → la mediana es el del medio.
- Si es par → la mediana es el promedio de los dos del medio.
*/


//1. funcion para suma total
function suma(numeros) {
    let sumaTotal = 0;

    for (let i = 0; i < numeros.length; i++) {
        sumaTotal += numeros[i];        
    }

    return sumaTotal;
}



//2. funcion para promedio
function promedio(numeros) {
    let average = suma(numeros) / numeros.length;
    
    return average;
}

//3. funcion para la media
function mediana(numeros) {
    // hacemos una copia para no modificar el arreglo original
    let numOrdenados = [...numeros].sort((a, b) => a - b);  
    
    let n = numOrdenados.length;
    let mitad = Math.floor(n / 2);

    if (n % 2 === 0) {
        // si es par: promedio de los dos del centro
        return (numOrdenados[mitad - 1] + numOrdenados[mitad]) / 2;
    } else {
        // si es impar: el del medio
        return numOrdenados[mitad];
    }
}


const numeros = [5,2,1,9,7];
console.log("La suma total de los elementos del arreglo es: "+suma(numeros));
console.log("El promedio es: "+promedio(numeros));
console.log("Mediana: ",mediana(numeros));