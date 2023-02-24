import IAgenda from "./interfaces/IAgenda";
import IFutebol from "./interfaces/IFutebol";
import normas from "./normas/normasDeUso";
import Quadra from "./Quadra";

export default class QuadraFutebol extends Quadra {
  public data: IFutebol = normas.futebol;
  public reservar<IFutebol>(time: Date): IAgenda<IFutebol> {
    const randomProtocol = (Math.random() + 1).toString(30).substring(3);
    console.log(randomProtocol);
    return {
      protocol: randomProtocol,
      date: time,
      rules: this.data as IFutebol 
    };
  }
}