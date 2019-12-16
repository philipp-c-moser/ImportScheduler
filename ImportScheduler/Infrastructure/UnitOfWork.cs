using ImportScheduler.Core;
using ImportScheduler.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ImportScheduler.Infrastructure
{
    public class UnitOfWork : IUnitOfWork
    {

        public readonly ImportSchedulerDbContext _context;

        public UnitOfWork(ImportSchedulerDbContext context)
        {
            _context = context;
        }


        public void Complete()
        {
            _context.SaveChanges();
        }

        public async Task CompleteAsync()
        {
            await _context.SaveChangesAsync();
        }

    }
}