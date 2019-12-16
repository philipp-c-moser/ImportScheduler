using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ImportScheduler.Core.Domain.CsvImport;
using ImportScheduler.Core.Repository;
using ImportScheduler.Infrastructure.Data;

namespace ImportScheduler.Infrastructure.Repository
{
    public class UserRepository : Repository<User>, IUserRepository
    {

        public UserRepository(ImportSchedulerDbContext context)
            : base(context)
        {

        }

    }
}
