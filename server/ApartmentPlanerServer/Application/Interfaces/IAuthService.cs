using Application.Models.Requests;
using Application.Models.Response;
using Domain.Entities;

namespace Application.Interfaces
{
    public interface IAuthService
    {
        public UserResponseDto Login(LoginUserRequestDto userRequestDto);
        public void RegisterUser(RegisterUserRequestDto registerUserRequest, int roleId);
        public User GetCurrentUser();
    }
}
