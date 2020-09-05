using System.Collections.Generic;
using System.Threading.Tasks;
using API.models;
using Microsoft.EntityFrameworkCore;

namespace API.data
{
     public interface IRepository
     {
          void Add<T>(T entity) where T : class;
          void Update<T>(T entity) where T : class;
          void Delete<T>(T entity) where T : class;
          Task<bool> SaveChangesAsync();

          //dados dos produtos
          Task<Produto[]> GetAllProdutosAsync();
          Task<Produto> GetProdutoAsyncById(int produtoId);

          //dados dos clientes
          Task<Cliente[]> GetAllClientesAsync();
          Task<Cliente> GetClienteAsyncById(int clienteId);

          //dados dos problemas
          Task<Problema[]> GetAllProblemasAsync();
          Task<Problema> GetProblemaAsyncById(int problemaId);

          //dadods das Nao conformidades
          Task<NaoConformidade[]> GetAllNaoConformidadesAsync(bool incluirProduto, bool incluirCliente, bool incluirProblema);
          Task<NaoConformidade> GetNaoConformidadeAsyncById(int naoConformidadeId);
     }
}