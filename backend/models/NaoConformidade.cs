using System;

namespace API.models
{
     public class NaoConformidade
     {
          public int Id { get; set; }
          public double Quantidade { get; set; }
          public DateTime DataAbertura { get; set; }
          public int ClienteId { get; set; }
          public int ProdutoId { get; set; }
          public int ProblemaId { get; set; }

          public Cliente Cliente { get; set; }
          public Produto Produto { get; set; }
          public Problema Problema { get; set; }

          public NaoConformidade()
          { }

          public NaoConformidade(int id, double quantidade, DateTime dataAbertura, int clienteId, int produtoId, int problemaId)
          {
               this.Id = id;
               this.Quantidade = quantidade;
               this.DataAbertura = dataAbertura;
               this.ClienteId = clienteId;
               this.ProdutoId = produtoId;
               this.ProblemaId = problemaId;
          }
     }
}