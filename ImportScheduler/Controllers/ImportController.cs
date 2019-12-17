using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http.Headers;
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


        [HttpPost]
        public ActionResult UploadImportFile()
        {

            try
            {
                var file = Request.Form.Files[0];


                return Ok("Upload successful");


            }
            catch(System.Exception ex)
            {
                return BadRequest("Upload failed: " + ex.Message);
            }


        }


    }
}