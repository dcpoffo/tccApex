using System.Linq;
using System.Threading.Tasks;
using API.models;
using Microsoft.EntityFrameworkCore;

namespace API.data
{
     public class Repository : IRepository
     {
          private readonly DataContext _context;

          public Repository(DataContext context)
          {
               this._context = context;
          }

          public void Add<T>(T entity) where T : class
          {
               _context.Add(entity);
          }

          public void Delete<T>(T entity) where T : class
          {
               _context.Remove(entity);
          }

          public void Update<T>(T entity) where T : class
          {
               _context.Update(entity);
          }

          public async Task<bool> SaveChangesAsync()
          {
               return (await _context.SaveChangesAsync()) > 0;
          }

          public async Task<Produto[]> GetAllProdutosAsync()
          {
               IQueryable<Produto> query = _context.Produto;
               query = query.AsNoTracking().OrderBy(a => a.Id);

               return await query.ToArrayAsync();
          }

          public async Task<Produto> GetProdutoAsyncById(int produtoId)
          {
               IQueryable<Produto> query = _context.Produto;
               query = query.AsNoTracking().OrderBy(a => a.Id)
                                           .Where(a => a.Id == produtoId);

               return await query.FirstOrDefaultAsync();
          }

          public async Task<Cliente[]> GetAllClientesAsync()
          {
               IQueryable<Cliente> query = _context.Cliente;
               query = query.AsNoTracking().OrderBy(a => a.Id);

               return await query.ToArrayAsync();
          }
          
          public async Task<Cliente> GetClienteAsyncById(int clienteId)
          {
               IQueryable<Cliente> query = _context.Cliente;
               query = query.AsNoTracking().OrderBy(a => a.Id)
                                           .Where(a => a.Id == clienteId);

               return await query.FirstOrDefaultAsync();
          }

          public async Task<Problema[]> GetAllProblemasAsync()
          {
               IQueryable<Problema> query = _context.Problema;
               query = query.AsNoTracking().OrderBy(a => a.Id);

               return await query.ToArrayAsync();
          }

          public async Task<Problema> GetProblemaAsyncById(int problemaId)
          {
               IQueryable<Problema> query = _context.Problema;
               query = query.AsNoTracking().OrderBy(a => a.Id)
                                           .Where(a => a.Id == problemaId);

               return await query.FirstOrDefaultAsync();
          }

          public async Task<NaoConformidade[]> GetAllNaoConformidadesAsync(bool incluirProduto, bool incluirCliente, bool incluirProblema)
          {
               IQueryable<NaoConformidade> query = _context.NaoConformidade;

               if (incluirProduto)
               {
                    query = query.Include(prod => prod.Produto);
               }

               if (incluirCliente)
               {
                   query = query.Include(cli => cli.Cliente);
               }

               if (incluirProblema)
               {
                   query = query.Include(prob => prob.Problema);
               }

               query = query.AsNoTracking().OrderBy(a => a.Id);

               return await query.ToArrayAsync();
          }

          public async Task<NaoConformidade> GetNaoConformidadeAsyncById(int naoConformidadeId)
          {
               IQueryable<NaoConformidade> query = _context.NaoConformidade;
               
               query = query.AsNoTracking().OrderBy(a => a.Id)
                                           .Where(a => a.Id == naoConformidadeId);

               return await query.FirstOrDefaultAsync();
          }
     }
}