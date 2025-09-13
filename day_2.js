/*
# Reto Día 2 — Palíndromos y frecuencias

### 🔹 Introducción

En este reto aprenderás a trabajar con **cadenas de texto en JavaScript**. Los strings son un tipo de dato fundamental y muchas veces
necesitamos analizarlos, transformarlos o verificar propiedades sobre ellos.

### 🔹 Enunciado

Crea un programa en JavaScript que recibe un string y devuelve:

1. El string invertido.
2. Si el string es un **palíndromo** (es decir, si se lee igual de izquierda a derecha que de derecha a izquierda, ignorando mayúsculas, minúsculas y espacios).
3. La **frecuencia de cada letra** en el string.

Crea un archivo llamado `day_2.js` con el siguiente contenido:


const text = "Anita lava la tina";
console.log("Reversed:", reverseString(text));
// "anit al aval atinA"

console.log("Is palindrome?:", isPalindrome(text));
// true

console.log("Letter frequency:", letterFrequency(text));
// { a: 6, n: 2, i: 2, t: 2, l: 2, v: 1 }
```

👉 Cada cálculo debe estar implementado en una **función separada**

👉 Nombra las variables y funciones en ingles

👉 No declares variables con `let`, usa únicamente `const` ([video](https://www.youtube.com/watch?v=bvkY9ey83yY))


Se debe mostrar la salida correcta para el string de prueba `"Anita lava la tina"`.

### ⭐️ Bonus

Intenta resolver el reto sin usar ciclos `for` o `while` 

En su lugar, utiliza métodos como `.replace()` , `reverse()` y `.reduce()`

*/


function reverseString(text) {
    
    return [...text].reverse().join('');    //[...text]convierte el string en un array de caracteres y con join lo devuelve como string
    
}


function isPalindrome(text) {
     // Normalizar: sin espacios y en minúsculas
  const normalized = text.toLowerCase().replace(/\s/g, '');  //convierte la cadena a minusculas y sin espacios
  const reversed = [...normalized].reverse().join('');     //reversa el array y lo muestra como string
 
  return normalized === reversed;   
    
}


function letterFrequency(text) {
    const chars = text.toLowerCase().split('');  //lo convierta a minusculas y a un arreglo con split()

    const cantLetters = chars.reduce(function (accum, char) {

        if (char === " ") return accum;  // ignora espacios, return acc hace que pase al siguiente caracter sin modificar nada.
        accum[char] = (accum[char] || 0) + 1;    // suma 1 si existe, si no empieza en 0 (undefined) es decir al comienzo (undefi || 0 ) = 0
        return accum;                // devuelve el acumulador actualizado
        
    },{});  //{}es el valor inicial del acumulador Significa que empezamos con un objeto vacío donde iremos guardando las letras y su suma.

   return cantLetters;

    
}

//const text = "Felipe";

const text = "Anita lava la tina";

console.log("Reversed:", reverseString(text));
console.log("Is palindrome?:", isPalindrome(text));
console.log("Letter frequency:", letterFrequency(text));





