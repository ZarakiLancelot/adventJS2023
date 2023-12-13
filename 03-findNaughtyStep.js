// En el taller de Santa, 'un elfo travieso' ha estado jugando en la cadena de fabricación
// de regalos, añadiendo o eliminando un paso no planificado.

// Tienes la secuencia original de pasos en la fabricación original y la secuencia
// modificada modified que puede incluir un paso extra o faltar un paso.

// Tu tarea es 'escribir una función que identifique y devuelva el primer paso extra
// que se ha añadido o eliminado en la cadena de fabricación'. Si no hay ninguna
// diferencia entre las secuencias, devuelve una cadena vacía.

// A tener en cuenta:

// Siempre habrá un paso de diferencia o ninguno.
// La modificación puede ocurrir en cualquier lugar de la cadena.
// La secuencia original puede estar vacía

function findNaughtyStep(original, modified) {
  const maxLength = Math.max(original.length, modified.length);

  for(let i = 0; i < maxLength; i++) {
    const originalChar = original[i];
    const modifiedChar = modified[i];

    if(originalChar !== modifiedChar) {
      return original.length > modified.length ?
        originalChar :
        modifiedChar;
    }
  }

  return "";
}

// Ejemplos:
const original = 'abcd';
const modified = 'abcde';

// const original = 'stepfor';
// const modified = 'stepor';

// const original = 'abcde'
// const modified = 'abcde'

// const original = '';
// const modified = 'x';

// const original = '123';
// const modified = '23';

const naughtyStep = findNaughtyStep(original, modified);
console.log(naughtyStep);
