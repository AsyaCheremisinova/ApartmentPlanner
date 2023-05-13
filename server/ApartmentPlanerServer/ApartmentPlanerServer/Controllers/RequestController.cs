using Application.Interfaces;
using Application.Models.Requests;
using Application.Models.Response;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ApartmentPlanerServer.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RequestController : Controller
    {
        private readonly IRequestService _requestService;

        public RequestController(IRequestService productService)
        {
            _requestService = productService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateRequest()
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

            _requestService.SetRequest(new CreateRequestRequestDto
            {
                Furniture = new FurnitureRequestDto
                {
                    Name = name,
                    Image = imageFileRequest,
                    CategoryId = categoryId,
                    ProductLink = link,
                    Depth = depth,
                    Width = width,
                    Height = height,
                    SourceFile = sourceFileRequest
                }
            });

            return NoContent();
        }

        [HttpGet]
        [Authorize(Roles = "Editor, Designer")]
        public ICollection<RequestResponseDto> GetAllRequests()
        {
            return _requestService.GetAllRequests();
        }

        [HttpPut("{id}")]
        public IActionResult UpdateRequest(int id, RequestStatusLineRequestDto requestDto)
        {
            _requestService.UpdateRequestStatus(id, requestDto);
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
