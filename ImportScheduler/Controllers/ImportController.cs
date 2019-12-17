using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http.Headers;
using ImportScheduler.Core;
using ImportScheduler.Infrastructure.Data;
using System.IO;

namespace ImportScheduler.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImportController : ControllerBase
    {
        private readonly ImportSchedulerDbContext _context;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IHostingEnvironment _hostingEnvironment;


        public ImportController(ImportSchedulerDbContext context, IUnitOfWork unitOfWork, IHostingEnvironment hostingEnvironment)
        {
            _context = context;
            _unitOfWork = unitOfWork;
            _hostingEnvironment = hostingEnvironment;
        }


        [HttpPost]
        public ActionResult UploadImportFile()
        {

            try
            {
                var file = Request.Form.Files[0];
                var webRootPath = _hostingEnvironment.WebRootPath;

                var uploadPath = Path.Combine(webRootPath, "Uploads");






                return Ok("Upload successful");


            }
            catch(System.Exception ex)
            {
                return BadRequest("Upload failed: " + ex.Message);
            }


        }


    }
}