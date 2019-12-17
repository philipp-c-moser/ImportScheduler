using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System.IO;
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
        private readonly IWebHostEnvironment _webHostEnvironment;


        public ImportController(ImportSchedulerDbContext context, IUnitOfWork unitOfWork, IWebHostEnvironment webHostEnvironment)
        {
            _context = context;
            _unitOfWork = unitOfWork;
            _webHostEnvironment = webHostEnvironment;
        }


        [HttpPost]
        public ActionResult UploadFile()
        {

            try
            {
                var file = Request.Form.Files[0];

                if(file.ContentType != "text/csv") 
                {
                    return BadRequest("Upload failed: ContentType  not allowed!");
                }



                var webRootPath = _webHostEnvironment.WebRootPath;

                var uploadPath = Path.Combine(webRootPath, "Uploads");


                if(!Directory.Exists(uploadPath))
                {
                    Directory.CreateDirectory(uploadPath);
                }


                if(file.Length > 0)
                {
                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    var filePath = Path.Combine(uploadPath, fileName);

                    using (var stream = new FileStream(filePath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                }

                return Ok("Upload successful");


            }
            catch(System.Exception ex)
            {
                return BadRequest("Upload failed: " + ex.Message);
            }


        }


    }
}