using Application.Models.Requests;
using Application.Models.Response;

namespace Application.Interfaces
{
    public interface IAuthService
    {
        public UserResponseDto Login(LoginUserRequestDto userRequestDto);
        public void RegisterUser(RegisterUserRequestDto registerUserRequest, int roleId);
    }
}
