export class Produto {
  id?: number;
  descricao: string;
  unidadeMedida: string;

  constructor() {
    this.id = 0;
    this.descricao = '';
    this.unidadeMedida = '';
  }
}
