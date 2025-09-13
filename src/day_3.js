/*
# Reto Día 3 - Arreglo de usuarios

### 🔹 Introducción

En este reto aprenderás a trabajar con **objetos en JavaScript** y a recorrer **arreglos de objetos**, una de las estructuras más 
comunes en proyectos reales.

### 🔹 Enunciado

Crea un programa en JavaScript que trabaje con un arreglo de usuarios e implemente funciones para:

1. Buscar un usuario por `id`.
2. Filtrar usuarios mayores de una edad dada.
3. Calcular el promedio de edad de todos los usuarios.

Crea un archivo llamado `day_3.js` con el siguiente contenido:

Cada cálculo debe estar implementado en una **función separada**

👉 Nombra las variables y funciones en ingles

👉 No declares variables con `let`, usa únicamente `const` ([video](https://www.youtube.com/watch?v=bvkY9ey83yY))

### 🔹 Entrega

Envíame una **captura de pantalla** de tu consola mostrando el resultado. También debes enviar tu archivo `day_3.js` 
para recibir comentarios / feedback.

Al ejecutarlo en consola con:

```bash
node day_3.js
```

Se debe mostrar la salida correcta para el arreglo de usuarios de prueba.

### ⭐️ Bonus

Intenta resolver el reto sin usar ciclos `for` o `while`

En su lugar, utiliza métodos de arreglos como `.find()`, `.filter()` y `.reduce()`


function findUserById(users, id) {
    
    for (const user of users) {       
        if (user.id === id) {
            console.log(user);
            return user;
        }
    }
    return null; // si no existe
}

array.find(callback(element) { ... });
Recorre el array.
Devuelve el primer elemento que cumpla la condición.
Si ninguno cumple, devuelve undefined.

El método .filter() en JavaScript se usa para obtener todos los elementos de un array que cumplan una condición.
array.filter(callback(element) {
  // condición que debe cumplirse
  return true o false;
});

El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.

el metodo find necesita como minimio un paremetro la funcion callback ej(user => user.id === id)
el metodo filter necesita como minimo un parametro  la funcion callback ej(user => user.age > age)
el metodo reduce usa para reducir el array a un unico valor, necesita el callback con un minimo de 2 parametros 
eje((accum, user) accum + user.age,0)  //donde accum y user son los parametros minimos a tener en cuenta y  0 es el vr inical de accum

Si el array es directamente de números, puedes omitir el valor inicial porque el primer elemento ya es un número.
Si el array es de objetos (o cualquier otro tipo), necesitas poner un valor inicial para que el acumulador empiece 
en un número válido.

*/

function findUserById(users, id) {
    const result = users.find(user => user.id === id);   //necesita como minimo un paremetro la funcion callback aca (user => user.id === id)
    return result;    
}

function filterByAge(users, age) {
    const olders = users.filter(user => user.age > age);    
    return olders;
}

function averageAge(users) {
    const total = users.reduce((accum, user) => accum + user.age,0);    
    return total / users.length;   
    
}


const users = [
  { id: 1, name: "Ana", age: 20 },
  { id: 2, name: "Juan", age: 25 },
  { id: 3, name: "Luis", age: 22 },
  { id: 4, name: "Maria", age: 30 }
];


console.log("Find user by id = 2:", findUserById(users, 2));
// { id: 2, name: "Juan", age: 25 },

console.log("Users older than 21:", filterByAge(users, 21));
// [ { id: 2, name: "Juan", age: 25 }, { id: 3, name: "Luis", age: 22 }, { id: 4, name: "Maria", age: 30 } ]

console.log("Average age:", averageAge(users));
// 24.25




/*
Paso a paso

.reduce() recibe dos parámetros principales:

callback → (acumulador, elementoActual) => {...}

valor inicial del acumulador → en este caso 0
Recorre todos los usuarios:

Iteración 1: acumulador = 0 + 20 → 20
Iteración 2: 20 + 25 → 45
Iteración 3: 45 + 22 → 67
Iteración 4: 67 + 30 → 97
Al final, reduce devuelve 97.

Dividimos entre la cantidad de usuarios (users.length = 4).

Resultado: 97 / 4 = 24.25.
*/