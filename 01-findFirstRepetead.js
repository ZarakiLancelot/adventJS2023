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


// const gifts = [2, 1, 3, 5, 3, 2];
// const gifts = [1, 2, 3, 4];
const gifts = [5, 1, 5, 1];
const firstRepeteadId = findFirstRepetead(gifts);
console.log(firstRepeteadId);