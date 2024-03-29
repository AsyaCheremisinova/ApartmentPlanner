﻿using Application.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace ApartmentPlanerServer.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FileController : ControllerBase
    {
        private readonly IFileService _fileService;

        public FileController(IFileService fileService)
        {
            _fileService = fileService;
        }

        [HttpGet("{id}")]
        public FileResult GetFileById(int id)
        {
            var file = _fileService.GetFileById(id);
            return new FileStreamResult(new MemoryStream(file.Data), "application/octet-stream")
            {
                FileDownloadName = file.Name
            };
        }

        [HttpGet("additional/{id}")]
        public FileResult GetAssetById(int id)
        {
            var file = _fileService.GetFileById(id);
            return new FileStreamResult(new MemoryStream(file.Data), "application/octet-stream");
        }
    }
}
