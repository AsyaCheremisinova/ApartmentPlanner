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
    }
}
