using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;

using ImportScheduler.Core.Domain.CsvImport;

namespace ImportScheduler.Infrastructure.Data
{
    public class ImportSchedulerDbContext : DbContext
    {

        public DbSet<User> Users { get; set; }

        public ImportSchedulerDbContext(DbContextOptions<ImportSchedulerDbContext> options)
            : base(options)
        {

        }

    }
}
    