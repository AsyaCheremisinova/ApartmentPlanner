namespace Application.Models.Requests
{
    public class RegisterUserRequestDto
    {
        public string Name { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
    }
}
