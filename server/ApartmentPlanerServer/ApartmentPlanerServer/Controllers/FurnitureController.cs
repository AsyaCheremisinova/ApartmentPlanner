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

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateFurniture(int id)
        {
            var sourceFile = HttpContext.Request.Form.Files.GetFile("source_file");
            var imageFile = HttpContext.Request.Form.Files.GetFile("image_file");
            var name = HttpContext.Request.Form["furniture_name"].ToString();
            var link = HttpContext.Request.Form["furniture_link"].ToString();
            float.TryParse(HttpContext.Request.Form["furniture_height"], out var height);
            float.TryParse(HttpContext.Request.Form["furniture_width"], out var width);
            float.TryParse(HttpContext.Request.Form["furniture_depth"], out var depth);
            int.TryParse(HttpContext.Request.Form["category_id"], out var categoryId);

            if (sourceFile == null || imageFile == null)
            {
                return BadRequest();
            }

            var sourceFileRequest = await GetFileRequest(sourceFile);
            var imageFileRequest = await GetFileRequest(imageFile);

            _furnitureService.UpdateFurniture(id, new FurnitureRequestDto
            {
                CategoryId = categoryId,
                Depth = depth,
                Height = height,
                Width = width,
                Name = name,
                ProductLink = link,
                Image = imageFileRequest,
                SourceFile = sourceFileRequest
            });

            return Ok();
        }

        private async Task<FileRequestDto> GetFileRequest(IFormFile file)
        {
            var imageFileRequest = new FileRequestDto();

            using (MemoryStream memoryStream = new MemoryStream())
            {
                await file.CopyToAsync(memoryStream);
                imageFileRequest.Data = memoryStream.ToArray();
                imageFileRequest.Name = file.FileName;
            }

            return imageFileRequest;
        }
    }
}
