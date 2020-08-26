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

        Task<Produto[]> GetAllProdutosAsync();
        Task<Produto> GetProdutoAsyncById(int produtoId);        
    }
}