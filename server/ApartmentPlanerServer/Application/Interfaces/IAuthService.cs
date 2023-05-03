using Application.Models.Requests;

namespace Application.Interfaces
{
    public interface IAuthService
    {
        public string CreateToken(LoginUserRequestDto userRequestDto);
        public void RegisterClient(RegisterUserRequestDto requestDto);
    }
}
