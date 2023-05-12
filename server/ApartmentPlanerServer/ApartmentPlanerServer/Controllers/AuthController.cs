using Application.Interfaces;
using Application.Models.Requests;
using Microsoft.AspNetCore.Authorization;
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
        [Authorize(Roles = "Admin")]
        [Route("register/editor")]
        public IActionResult RegisterEditor(RegisterUserRequestDto user)
        {
            _authService.RegisterUser(user, 3);

            return NoContent();
        }

        [HttpPost]
        [Authorize(Roles = "Admin")]
        [Route("register/designer")]
        public IActionResult RegisterDesigner(RegisterUserRequestDto user)
        {
            _authService.RegisterUser(user, 2);

            return NoContent();
        }
    }
}