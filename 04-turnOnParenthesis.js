// En el taller de Santa 🎅, algunos mensajes navideños han sido escritos de manera
// peculiar: las letras dentro de los paréntesis deben ser leídas al revés

// Santa necesita que estos mensajes estén correctamente formateados. Tu tarea es
// escribir una función que tome una cadena de texto y revierta los caracteres dentro
// de cada par de paréntesis, eliminando los paréntesis en el mensaje final.

// Eso sí, ten en cuenta que pueden existir paréntesis anidados, por lo que debes
// invertir los caracteres en el orden correcto.

function decode(message) {
  let decodedMessage = '';
  let wordsStack = [];

  for (let char of message) {
    // Se encuentra un paréntesis ( y se apertura el nivel
    if (char === '(') {
      wordsStack.push(decodedMessage);  // Guardamos el contenido
      decodedMessage = '';              // Reiniciamos el contenido
    } else if (char === ')') {
      // Se cierra el nivel de paréntesis
      let content = decodedMessage.split('').reverse().join(''); // Se invierte el contenido
      decodedMessage = wordsStack.pop() + content; // Se combina el contenido revertido
    } else {
      decodedMessage += char; // Se concatena de no estar en algún paréntesis
    }
  }

  return decodedMessage;
}

// Ejemplos:
const message = "(olleh) (dlrow)!";
// const message = "(olleh) (dlrow)!";
// const message = "sa(u(cla)atn)s";
console.log(decode(message));