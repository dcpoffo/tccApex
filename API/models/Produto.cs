using System.Collections.Generic;

namespace API.models
{
    public class Produto
    {
        public int Id { get; set; }
        public string Descricao { get; set; }
        public string UnidadeMedida { get; set; }
        public IEnumerable<NaoConformidade> NaoCorformidades { get; set; }

        public Produto()
        {}

        public Produto(int id, string descricao, string unidadeMedida)
        {
            this.Id = id;
            this.Descricao = descricao;
            this.UnidadeMedida = unidadeMedida;
        }
    }
}