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
}