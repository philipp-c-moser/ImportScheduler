﻿using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System.IO;
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
        public ActionResult UploadImportFile()
        {

            try
            {
                var file = Request.Form.Files[0];
                var webRootPath = _webHostEnvironment.WebRootPath;

                var uploadPath = Path.Combine(webRootPath, "Uploads");


                if(!Directory.Exists(uploadPath))
                {
                    Directory.CreateDirectory(uploadPath);
                }


                if(file.Length > 0)
                {

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