namespace Application.Common.Exceptions
{
    public class LoginNotExistsException : Exception
    {
        public LoginNotExistsException(string login)
            : base($"Login '{login}' does not exist")
        {
        }
    }
}