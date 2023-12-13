// En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de
// identificación único.

// Sin embargo, debido a un error en la máquina de juguetes, algunos números
// se han asignado a más de un juguete.

// ¡Encuentra el primer número de identificación que se ha repetido, 'donde
// la segunda ocurrencia tenga el índice más pequeño!'

// En otras palabras, si hay más de un número repetido, debes devolver el
// número cuya segunda ocurrencia aparezca primero en la lista.
// Si no hay números repetidos, devuelve -1.

function findFirstRepetead(gifts) {
  let giftsMap = new Map();
  for (let i = 0; i < gifts.length; i++) {
    if (giftsMap.has(gifts[i])) {
      return gifts[i];
    } else {
      giftsMap.set(gifts[i], 1);
    }
  }
  return -1;
}

// Ejemplos:
// const gifts = [2, 1, 3, 5, 3, 2];
// const gifts = [1, 2, 3, 4];
const gifts = [5, 1, 5, 1];
const firstRepeteadId = findFirstRepetead(gifts);
console.log(firstRepeteadId);