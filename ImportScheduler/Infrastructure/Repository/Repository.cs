using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using ImportScheduler.Infrastructure.Data;
using ImportScheduler.Core.Repository;
using Microsoft.EntityFrameworkCore;

namespace ImportScheduler.Infrastructure.Repository
{
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : class
    {

        public readonly ImportSchedulerDbContext _context;

        public Repository(ImportSchedulerDbContext context)
        {
            _context = context;
        }


        public IQueryable<TEntity> GetAll()
        {
            return _context.Set<TEntity>().AsNoTracking();
        }

        public async Task<List<TEntity>> GetAllAsync()
        {
            return await _context.Set<TEntity>().ToListAsync();
        }

        public async Task<TEntity> GetByIdAsync(int id)
        {
            return await _context.Set<TEntity>().FindAsync(id);
        }

        public async Task CreateAsync(TEntity entity)
        {
            await _context.Set<TEntity>().AddAsync(entity);
        }

        public void Update(TEntity entity)
        {
            _context.Set<TEntity>().Update(entity);
        }

        public void Delete(TEntity entity)
        {
            _context.Set<TEntity>().Remove(entity);
        }


    }
}
