import Clube from "./Clube";
import QuadraFutebol from "./QuadraFutebol";
import QuadraTenis from "./QuadraTenis";

const club1 = new Clube();
const soccerField1 = new QuadraFutebol();
club1.adicionarQuadra(soccerField1);

const reservationDate1 = new Date('2023-12-24');

const reservation1 = club1.buscarQuadra<QuadraFutebol>(0).reservar(reservationDate1);
console.log(reservation1);

const club2 = new Clube();
const tennisField1 = new QuadraTenis();
club2.adicionarQuadra(tennisField1);

const reservationDate2 = new Date('2023-10-24');

const reservation2 = club2.buscarQuadra<QuadraTenis>(0).reservar(reservationDate2);
console.log(reservation2);
