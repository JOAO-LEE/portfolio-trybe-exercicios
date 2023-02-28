export class PessoaEstudante {
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

    const allGrades = [...this.notasTeste, ...this.notasTrabalho]
    const total = allGrades.reduce((acc, curr) => acc + curr, 0)
    return total
  }
   calculaMedia(): number {
    const total = this.calculaTotal();
    return Math.round(total / 6);
  }
}

const student1 = new PessoaEstudante(1111, 'Osvaldo', [1, 2, 3, 4], [1, 2]);
// console.log(student1.calculaTotal());



