using Application.Interfaces;
using Application.Models.Requests;
using Application.Models.Response;
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
        public IActionResult CreateGenre(RequestRequestDto request)
        {
            _requestService.SetRequest(request);

            return NoContent();
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public ActionResult<List<RequestResponseDto>> GetAllRequests()
        {
            return _requestService.GetAllRequests();
        }

        [HttpGet("{id}")]
        public ActionResult<RequestResponseDto> GetRequestById(Guid id)
        {
            return _requestService.GetRequestById(id);
        }

        
        [HttpPut("{id}")]
        public IActionResult UpdateProduct(Guid id, RequestRequestDto request)
        {
            _requestService.UpdateRequest(id, request);

            return Ok();
        }
    }
}
