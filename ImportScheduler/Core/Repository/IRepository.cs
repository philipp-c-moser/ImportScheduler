using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ImportScheduler.Core.Repository
{
    public interface IRepository<TEntity> where TEntity : class
    {

        IQueryable<TEntity> GetAll();

        Task<List<TEntity>> GetAllAsync();

        Task<TEntity> GetByIdAsync(int id);

        Task CreateAsync(TEntity entity);

        Task UpdateAsync(int id, TEntity entity);

        Task DeleteAsync(int id);


    }
}
