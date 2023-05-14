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
        [Authorize(Roles = "Designer")]
        public async Task<ActionResult> CreateRequest()
        {
            var sourceFile = HttpContext.Request.Form.Files.GetFile("source_file");
            var imageFile = HttpContext.Request.Form.Files.GetFile("image_file");
            var name = HttpContext.Request.Form["furniture_name"].ToString();
            var link = HttpContext.Request.Form["furniture_link"].ToString();
            float.TryParse(HttpContext.Request.Form["furniture_height"], out var height);
            float.TryParse(HttpContext.Request.Form["furniture_width"], out var width);
            float.TryParse(HttpContext.Request.Form["furniture_depth"], out var depth);
            int.TryParse(HttpContext.Request.Form["category_id"], out var categoryId);

            var sourceFileRequest = await GetFileRequest(sourceFile);
            var imageFileRequest = await GetFileRequest(imageFile);

            var requestId = _requestService.SetRequestAndGetItsId(new CreateRequestRequestDto
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

            return Ok(requestId);
        }

        [HttpPut("{id}")]
        [Authorize(Roles = "Designer")]
        public async Task<ActionResult> UpdateRequest(int id)
        {
            var sourceFile = HttpContext.Request.Form.Files.GetFile("source_file");
            var imageFile = HttpContext.Request.Form.Files.GetFile("image_file");
            var message = HttpContext.Request.Form["message"].ToString();
            var name = HttpContext.Request.Form["furniture_name"].ToString();
            var link = HttpContext.Request.Form["furniture_link"].ToString();
            float.TryParse(HttpContext.Request.Form["furniture_height"], out var height);
            float.TryParse(HttpContext.Request.Form["furniture_width"], out var width);
            float.TryParse(HttpContext.Request.Form["furniture_depth"], out var depth);
            int.TryParse(HttpContext.Request.Form["category_id"], out var categoryId);

            var sourceFileRequest = await GetFileRequest(sourceFile);
            var imageFileRequest = await GetFileRequest(imageFile);

            _requestService.UpdateRequest(id, message, new CreateRequestRequestDto
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

        [HttpPut("status/{id}")]
        [Authorize(Roles = "Editor")]
        public IActionResult UpdateRequestStatus(int id, RequestStatusLineRequestDto requestDto)
        {
            _requestService.UpdateRequestStatus(id, requestDto);
            return NoContent();
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "Designer")]
        public IActionResult DeleteRequest(int id)
        {
            _requestService.DeleteRequest(id);
            return NoContent();
        }

        private async Task<FileRequestDto> GetFileRequest(IFormFile? file)
        {
            if (file == null)
                return null;

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
