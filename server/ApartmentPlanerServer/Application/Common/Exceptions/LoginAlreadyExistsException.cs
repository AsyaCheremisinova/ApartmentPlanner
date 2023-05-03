namespace Application.Common.Exceptions
{
    public class LoginAlreadyExistsException : Exception
    {
        public LoginAlreadyExistsException(string login)
            : base($"Login '{login}' already exists")
        {
        }
    }
}
