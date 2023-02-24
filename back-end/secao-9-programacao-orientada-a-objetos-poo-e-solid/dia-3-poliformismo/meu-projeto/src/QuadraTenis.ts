import IAgenda from "./interfaces/IAgenda";
import ITenis from "./interfaces/ITenis";
import normas from "./normas/normasDeUso";
import Quadra from "./Quadra";

export default class QuadraTenis extends Quadra {
  public dataTenis: ITenis = normas.tenis;

  public reservar<ITenis>(date: Date): IAgenda<ITenis> {
    const randomProtocol = (Math.random() + 1).toString(30).substring(3);
    return {
      protocol: randomProtocol,
      date, 
      rules: this.dataTenis as unknown as ITenis
    }
  }
}