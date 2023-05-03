namespace Application.Common.Exceptions
{
    public class InvalidPasswordException : Exception
    {
        public InvalidPasswordException()
            : base($"Password is invalid")
        {
        }
    }
}