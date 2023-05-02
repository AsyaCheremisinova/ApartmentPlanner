using Application.Interfaces;
using Application.Models.Requests;
using Microsoft.AspNetCore.Mvc;

namespace ApartmentPlanerServer.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FurnitureController : Controller
    {
        private readonly IFurnitureService _furnitureService;

        public FurnitureController(IFurnitureService furnitureService)
        {
            _furnitureService = furnitureService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateFurnitureRequest()
        {
            var sourceFile = HttpContext.Request.Form.Files.GetFile("source_file");
            var imageFile = HttpContext.Request.Form.Files.GetFile("image_file");
            var name = HttpContext.Request.Form["name"].ToString();

            if (sourceFile == null || imageFile == null)
            {
                return BadRequest();
            }

            var sourceFileRequest = new FileRequestDto();
            using (MemoryStream memoryStream = new MemoryStream())
            {
                await sourceFile.CopyToAsync(memoryStream);
                sourceFileRequest.Data = memoryStream.ToArray();
            }

            var imageFileRequest = new FileRequestDto();
            using (MemoryStream memoryStream = new MemoryStream())
            {
                await imageFile.CopyToAsync(memoryStream);
                imageFileRequest.Data = memoryStream.ToArray();
            }

            _furnitureService.SetFurniture(new FurnitureRequestDto
            {
                Name = name,
                SourceFile = sourceFileRequest,
                Image = imageFileRequest
            });

            return NoContent();
        }
    }
}
