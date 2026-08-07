import { pedirCarta, valorCarta } from './';

/**
 * // turno de la computadora
 * @param {number} puntosMinimos que la computadora necesita para ganar
 * @param {Array<String>} deck el mazo de cartas
 * @param {HTMLElement} puntosHTML los elementos HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora el elemento HTML para mostrar las cartas
 * 
 */

export  const turnoComputadora = ( puntosMinimos, puntosHTML,divCartasComputadora, deck = [],  ) => {

        if ( !puntosMinimos ) throw new Error('Puntos minimos son necesarios');
        if ( !deck ) throw new Error('El deck es necesario');
        if ( !puntosHTML ) throw new Error('Los elementos HTML para mostrar los puntos son necesarios');
        if ( !divCartasComputadora ) throw new Error('El elemento HTML para mostrar las cartas de la computadora es necesario');

        let puntosComputadora = 0;

        do {
            const carta = pedirCarta(deck);

            puntosComputadora = puntosComputadora + valorCarta( carta );
            puntosHTML.innerText = puntosComputadora;
            
             const imgCarta = document.createElement('img');
            imgCarta.src = `/assets/cartas/${ carta }.png`; //3H, JD
            imgCarta.classList.add('carta');
            divCartasComputadora.append( imgCarta );

            if ( puntosMinimos > 21 ) {
                break;
            }

        } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

         setTimeout(() => {
            if( puntosComputadora === puntosMinimos ) {
                alert('Nadie gana :(');
            } else if ( puntosMinimos > 21 ) {
                alert('Computadora gana')
            } else if( puntosComputadora > 21 ) {
                alert('Jugador Gana');
            } else {
                alert('Computadora Gana')
            }
        }, 100 );
    }