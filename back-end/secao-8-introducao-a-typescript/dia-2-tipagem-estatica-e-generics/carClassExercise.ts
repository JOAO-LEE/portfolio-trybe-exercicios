class Car {

  brand: string;
  color: string;
  doors: number;

  constructor(brand: string, color: string, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk(): void {
    console.log("Bibi!");
  }
  
  turnOn(): void {
    console.log('Carro ligado!')
  }

  turnOff(): void {
    console.log('Carro desligado!');
  }

  speedUp(velocity: string): void {
    console.log(`Velocidade aumentada para ${velocity}`);
  }

  speedDown(velocity: string): void {
    console.log(`Velocidade reduzida para ${velocity}`);
  }

  stop(): void {
    console.log('Carro parado!');
  }

  turn(direction: string): void {
    console.log(`Carro virando para ${direction}`);
  }
}