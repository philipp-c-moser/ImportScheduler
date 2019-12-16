using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ImportScheduler.Core
{
    public interface IUnitOfWork
    {

        void Complete();

        Task CompleteAsync();

    }
}
