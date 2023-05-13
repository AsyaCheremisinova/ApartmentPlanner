using Application.Common.Exceptions;
using Application.Common.Interfaces;
using Application.Interfaces;
using Application.Models.Requests;
using Application.Models.Response;
using Domain.Entities;
using Isopoh.Cryptography.Argon2;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Persistence.Options;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Persistence.Services
{
    public class AuthService : IAuthService
    {
        private readonly IGenericRepository<User> _userRepository;
        private readonly AuthOptions _options;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public AuthService(IUnitOfWork unitOfWork, IOptions<AuthOptions> options,
            IHttpContextAccessor httpContextAccessor)
        {
            _userRepository = unitOfWork.UserRepository;
            _options = options.Value;
            _httpContextAccessor = httpContextAccessor;
        }

        public UserResponseDto Login(LoginUserRequestDto userRequestDto)
        {
            var user = ValidatePersonCredentialsAndThrow(userRequestDto);

            var key = Encoding.ASCII.GetBytes(_options.Key);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                    {
                        new Claim("Id", user.Id.ToString()),
                        new Claim(ClaimTypes.Name, user.Name),
                        new Claim(ClaimTypes.Role, user.Role.Name)
                    }),
                Expires = DateTime.UtcNow.AddHours(1),
                Issuer = _options.Issuer,
                Audience = _options.Audience,
                SigningCredentials = new SigningCredentials(
                    new SymmetricSecurityKey(key),
                    SecurityAlgorithms.HmacSha512Signature)
            };
            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var jwtToken = tokenHandler.WriteToken(token);
            
            return new UserResponseDto
            {
                Id = user.Id,
                Email = user.Email,
                Login = user.Login,
                Name = user.Name,
                RoleId = user.RoleId,
                Token = jwtToken
            };
        }

        public void RegisterUser(RegisterUserRequestDto registerUserRequest, int roleId)
        {
            var isLoginExist = _userRepository.GetList()
                .Any(user => user.Login == registerUserRequest.Login);

            if (isLoginExist)
                throw new LoginAlreadyExistsException(registerUserRequest.Login);

            _userRepository.Insert(new User
            {
                Name = registerUserRequest.Name,
                Login = registerUserRequest.Login,
                Password = Argon2.Hash(registerUserRequest.Password),
                Email = registerUserRequest.Email,
                RoleId = roleId
            });
        }

        private User ValidatePersonCredentialsAndThrow(LoginUserRequestDto userRequestDto)
        {
            var user = _userRepository.GetList()
                .Include(user => user.Role)
                .Where(user => user.Login == userRequestDto.Login)
                .FirstOrDefault();

            if (user == null)
                throw new LoginNotExistsException(userRequestDto.Login);

            if (!Argon2.Verify(user.Password, userRequestDto.Password))
                throw new InvalidPasswordException();

            return user;
        }
    }
}
