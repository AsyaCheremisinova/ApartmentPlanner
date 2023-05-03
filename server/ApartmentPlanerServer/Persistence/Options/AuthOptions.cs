using Microsoft.Extensions.Configuration;

namespace Persistence.Options
{
    public class AuthOptions
    {
        public const string AuthOptionsString = "Jwt";

        [ConfigurationKeyName("ISSUER")]
        public string Issuer { get; set; } = string.Empty;

        [ConfigurationKeyName("AUDIENCE")]
        public string Audience { get; set; } = string.Empty;

        [ConfigurationKeyName("KEY")]
        public string Key { get; set; } = string.Empty;
    }
}
