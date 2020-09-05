export class NaoConformidade {
  id?: number;
  dataAbertura: Date;
  quantidade: number;
  idCliente: number;
  idProduto: number;
  idProblema: number;

  constructor(){
    this.id = 0;
    this.dataAbertura = null;
    this.quantidade = 0;
    this.idCliente = 0;
    this.idProduto = 0;
    this.idProblema = 0;
  }
}
