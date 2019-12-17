using Microsoft.AspNetCore.Mvc;
using ImportScheduler.Core;
using ImportScheduler.Infrastructure.Data;

namespace ImportScheduler.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImportController : ControllerBase
    {
        private readonly ImportSchedulerDbContext _context;
        private readonly IUnitOfWork _unitOfWork;


        public ImportController(ImportSchedulerDbContext context, IUnitOfWork unitOfWork)
        {
            _context = context;
            _unitOfWork = unitOfWork;
        }



    }
}