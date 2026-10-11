/*Aqui se inicializa las constantes de las piezas de ajedrez
y le da el valora a cada pieza*/
const PEON=1;
const CABALLO=3;
const ALFIL=3;
const TORRE=5;
const DAMA=9;

/*Aqui inicializa las variables que se van a usar para definir los puntos
el numero de jugadas el turno y la ventaja*/
let puntosBlancas = 0;
let puntosNegras  = 0;
let jugada = 15;
let turno = "";
let ventaja=0;

/*Aqui lo que esta ocurriendo es que le estan asignando puntos a cada bando
sumando los puntos de cada pieza*/
puntosBlancas += PEON + CABALLO + ALFIL + TORRE;
puntosNegras += CABALLO + ALFIL + TORRE;

/*Aqui calcula la ventaja para saber quien va "ganando"*/
ventaja = puntosBlancas - puntosNegras;


/*Este if es para saber de quien es el turno y lo comprueba mirando
si es para o impar.*/
if (jugada % 2 === 0){
    turno = 'Mueven Negras';
}else{
    turno = 'Mueven Blancas';
}

/*Muestr apor pantalla los puntos de blancas y tu tipo y luego los puntos de negros y su tipo*/
console.log(`Puntuación Blancas: ${puntosBlancas} (${typeof puntosBlancas}) pts |  Puntuación Negras : ${puntosNegras} (${ typeof puntosNegras}) pts`);
/*Enseña por pantalla la ventaja material y su tipo*/
console.log(`Ventaja Material: ${ventaja} (${typeof ventaja}) pts`);
/*Enseña la jugada en la que esta junto a su tipo y luego de quien es el turno y su tipo*/
console.log(`Estado del Turno: Jugada ${jugada} (${typeof jugada}) (${turno} (${typeof turno}))`);