using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;

namespace ImportScheduler.Infrastructure
{
    public class ImportSchedulerDbContext : DbContext
    {


        public ImportSchedulerDbContext(DbContextOptions<ImportSchedulerDbContext> options)
            : base(options)
        {

        }

    }
}
    