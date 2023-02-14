export default class PessoaEstudante {
  private matricula: number;
  private nome: string;
  private notasTeste: number[];
  private notasTrabalho: number[];

  constructor(matricula: number, nome: string , notasTeste: number[], notasTrabalho: number[]) {
    this.matricula = matricula;
    this.nome = nome;
    this.notasTeste = notasTeste;
    this.notasTrabalho = notasTrabalho;
  }
   calculaTotal(): number {
    const totalTeste = this.notasTeste.reduce((prev, curr) => prev + curr, 0)
    const totalTrabalho = this.notasTrabalho.reduce((prev, curr) => prev + curr, 0)
    return totalTeste + totalTrabalho;
  }
   calculaMedia(): number {
    const total = this.calculaTotal();
    return Math.round(total / 6);
  }
}

const student1 = new PessoaEstudante(8148, 'Osvaldo Henrique', [10, 9, 7, 8], [10, 9]);
console.log(student1.calculaMedia());