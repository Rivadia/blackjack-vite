/**
 *Esta función me permite tomar una carta
 * @param {Array<String>} deck recibe un string de cartas
 * @returns {String}retorna una carta sustraida del string
 */
export const pedirCarta = (deck) => {
  if (!deck || deck.length === 0) {
    throw "No hay cartas en el deck";
  }
  const carta = deck.pop();
  return carta;
};
