using System.Collections.Generic;

namespace API.models
{
     public class Problema
     {
          public int Id { get; set; }
          public string Descricao { get; set; }
          public IEnumerable<NaoConformidade> NaoCorformidades { get; set; }

          public Problema()
          { }

          public Problema(int id, string descricao)
          {
               this.Id = id;
               this.Descricao = descricao;

          }
     }
}