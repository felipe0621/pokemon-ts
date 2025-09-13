/*
# Día 4 - Comienza la aventura

### 🔹 Introducción

A partir de hoy vamos a comenzar a trabajar como si estuviéramos construyendo un proyecto real. Para eso, vamos a crear una carpeta dedicada, inicializarla con **npm**, instalar **TypeScript** y organizar nuestro código en una estructura de carpetas (`src` para el código fuente y `dist` para el código compilado).

De esta forma, no solo aprenderemos el lenguaje, sino también las buenas prácticas de cómo se organiza un proyecto profesional desde cero.

🚨 **Obligatorio**: Mira este video antes de comenzar ([link](https://www.youtube.com/watch?v=P8ky7241Ndg))

### 🔹 Enunciado

1. Crea una carpeta llamada `project` y dentro de esta carpeta, inicializa npm:

```bash
mkdir project
cd project
npm init -y
```

2. Instala TypeScript como dependencia de desarrollo:

```bash
npm install --save-dev typescript ts-node
```

- `typescript`: compilador de TS.
- `ts-node`: permite ejecutar directamente `.ts` sin compilar a `.js`.

3. Inicializa la configuración de TypeScript:

```bash
npx tsc --init
```

Esto generará un archivo `tsconfig.json`. Luego ajusta las opciones principales dentro de este archivo:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "moduleResolution": "node",
    "types": ["node"]
  }
}
```

1. Crea una carpeta `src` dentro de `project`

```bash
mkdir src
```

Dentro de `src/index.ts` copia y pega este código

👉🏽 Ten en cuenta que el archivo ahora es `.ts`, no `.js`

```tsx
function findPokemonByName(pokemonTeam, name) {
  return pokemonTeam.find(pokemon => pokemon.name === name) || null;
}

function filterByLevel(pokemonTeam, minLevel) {
  return pokemonTeam.filter(pokemon => pokemon.level > minLevel);
}

function averageLevel(pokemonTeam) {
  const total = pokemonTeam.reduce((sum, pokemon) => sum + pokemon.level, 0);
  return total / pokemonTeam.length;
}

const pokemonTeam = [
  { name: "bulbasaur", level: 96 },
  { name: "charmander", level: 79 },
  { name: "squirtle", level: 64 },
  { name: "pikachu", level: 81 }
];

console.log("Find pokemon by name 'charmander':", findPokemonByName(pokemonTeam, "charmander"));
// { name: "charmander", level: 79 }

console.log("Pokemon with level above 80:", filterByLevel(pokemonTeam, 80));
// [ { name: "bulbasaur", level: 96 }, { name: "pikachu", level: 81 }, { name: "charmander", level: 79 } ]

console.log("Average level:", averageLevel(pokemonTeam));
// 80
```

1. Arregla el código para que pueda ser compilado con TypeScript

### 🔹 Entrega

Envíame una **captura de pantalla** de tu consola mostrando el resultado. También debes enviar tu archivo `index.ts` para recibir comentarios / feedback.

Al ejecutarlo en consola con:

```bash
npx ts-node src/index.ts
```

Se debe mostrar la salida correcta para el arreglo de usuarios de prueba.

### ⭐️ Bonus

Intenta resolver el reto sin usar tipos de datos `any` 

En su lugar, crea una interfaz para un usuario (`interface Pokemon`)
*/