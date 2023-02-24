import Clube from "./Clube";
import QuadraFutebol from "./QuadraFutebol";

const club1 = new Clube();
const soccerField1 = new QuadraFutebol();
club1.adicionarQuadra(soccerField1);

const reservationDate = new Date('2023-12-24');

const reservation = club1.buscarQuadra<QuadraFutebol>(0).reservar(reservationDate);
console.log(reservation);
