using System.Collections.Generic;

namespace API.models
{
     public class Cliente
     {
          public int Id { get; set; }
          public string Nome { get; set; }

          public Cliente()
          {}
          public Cliente(int id, string nome)
          {
               this.Id = id;
               this.Nome = nome;
          }
     }
}