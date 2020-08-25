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

          public async Task<Produto> GetProdutosAsyncById(int produtoId)
          {
               IQueryable<Produto> query = _context.Produto;
               query = query.AsNoTracking().OrderBy(a => a.Id)
                                           .Where(a => a.Id == produtoId);

               return await query.FirstOrDefaultAsync();
          }



     }
}