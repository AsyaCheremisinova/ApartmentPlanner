using Application.Common.Exceptions;
using Application.Common.Interfaces;
using Application.Interfaces;
using Application.Models.Requests;
using Domain.Entities;
using Isopoh.Cryptography.Argon2;
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
        private readonly IGenericRepository<Role> _roleRepository;
        private readonly AuthOptions _options;

        public AuthService(IUnitOfWork unitOfWork, IOptions<AuthOptions> options)
        {
            _userRepository = unitOfWork.UserRepository;
            _roleRepository = unitOfWork.RoleRepository;
            _options = options.Value;
        }

        public string CreateToken(LoginUserRequestDto userRequestDto)
        {
            ValidatePersonCredentialsAndThrow(userRequestDto);

            var key = Encoding.ASCII.GetBytes(_options.Key);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                    {
                        new Claim("Id", Guid.NewGuid().ToString()),
                        new Claim(JwtRegisteredClaimNames.Sub, "User"),
                        new Claim(JwtRegisteredClaimNames.Email, "Email"),
                        new Claim(JwtRegisteredClaimNames.Jti,
                        Guid.NewGuid().ToString())
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
            return jwtToken;
        }

        public void RegisterClient(RegisterUserRequestDto registerUserRequest)
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
            });
        }

        private void ValidatePersonCredentialsAndThrow(LoginUserRequestDto userRequestDto)
        {
            var user = _userRepository.GetList()
                .Where(user => user.Login == userRequestDto.Login)
                .FirstOrDefault();

            if (user == null)
                throw new LoginNotExistsException(userRequestDto.Login);

            if (!Argon2.Verify(user.Password, userRequestDto.Password))
                throw new InvalidPasswordException();
        }
    }
}
