// En el taller de Santa, los elfos tienen una 'lista de regalos' que desean fabricar y un
// conjunto limitado de materiales.

// Los 'regalos son cadenas de texto' y los 'materiales son caracteres'. Tu tarea es escribir
// una función que, dada una lista de regalos y los materiales disponibles, devuelva una
// 'lista de los regalos que se pueden fabricar'.

// Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.

function manufacture(gifts, materials) {
  let manufactured = [];

  const canManufactureGift = (gift, materials) => {
    const giftChars = new Set(gift);

    for (const char of giftChars) {
      if (!materials.includes(char)) {
        return null;
      }    
    }
    return gift;
  }
  
  for (const gift of gifts) {
    if (canManufactureGift(gift, materials)) {
      manufactured.push(gift);
    }
  }
  return manufactured;
}

// Ejemplos:
// const gifts = ['tren', 'oso', 'pelota'];
// const materials = 'tronesa';

// const gifts = ['juego', 'puzzle'];
// const materials = 'jlepuz';

const gifts = ['libro', 'ps5'];
const materials = 'psli';

const manufactured = manufacture(gifts, materials);
console.log(manufactured);