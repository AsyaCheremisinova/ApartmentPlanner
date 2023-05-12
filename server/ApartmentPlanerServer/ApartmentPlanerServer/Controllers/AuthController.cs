using Application.Interfaces;
using Application.Models.Requests;
using Microsoft.AspNetCore.Mvc;

namespace ApartmentPlanerServer.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost]
        [Route("login")]
        public ActionResult<string> GetToken(LoginUserRequestDto user)
        {
            var token = _authService.CreateToken(user);

            return Ok(token);
        }

        [HttpPost]
        [Route("register")]
        public IActionResult Register(RegisterUserRequestDto user)
        {
            _authService.RegisterClient(user);

            return NoContent();
        }
    }
}