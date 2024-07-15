import { pedirCarta, valorCarta, crearCartaHTML, CondicionVictoria } from "./";

/**
 *
 * @param {Number} puntosMinimos puntos minimos para que la computadora gane
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora elemento HTML para mostrar las cartas
 * @param {Array<String>} deck
 */
export const turnoComputadora = (
  puntosMinimos,
  puntosHTML,
  divCartasComputadora,
  deck
) => {
  if (!puntosMinimos) throw new Error("Puntos minimos es necesario");
  if (!puntosHTML) throw new Error("Argumento puntosHTML es necesario");
  let puntosComputadora = 0;
  do {
    const carta = pedirCarta(deck);

    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML.innerText = puntosComputadora;

    const imgCarta = crearCartaHTML(carta);
    divCartasComputadora.append(imgCarta);

    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  CondicionVictoria(puntosMinimos, puntosComputadora);
};
