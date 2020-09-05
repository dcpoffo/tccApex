export class NaoConformidade {
  id?: number;
  dataAbertura: Date;
  quantidade: number;
  clienteId: number;
  produtoId: number;
  problemaId: number;

  constructor(){
    this.id = 0;
    this.dataAbertura = null;
    this.quantidade = 0;
    this.clienteId = 0;
    this.produtoId = 0;
    this.problemaId = 0;
  }
}
