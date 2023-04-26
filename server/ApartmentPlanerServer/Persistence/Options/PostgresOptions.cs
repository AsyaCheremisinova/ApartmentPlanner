using Microsoft.Extensions.Configuration;

namespace Persistence.Options
{
    public class PostgresOptions
    {
        public const string PostgresOptionsString = "PostgresOptions";

        [ConfigurationKeyName("POSTGRES_DATABASE")]
        public string PostgresDataBase { get; set; } = string.Empty;

        [ConfigurationKeyName("POSTGRES_USER")]
        public string PostgresUser { get; set; } = string.Empty;

        [ConfigurationKeyName("POSTGRES_PASSWORD")]
        public string PostgresPassword { get; set; } = string.Empty;

        [ConfigurationKeyName("POSTGRES_HOST")]
        public string PostgresHost { get; set; } = "postgres";

        [ConfigurationKeyName("POSTGRES_PORT")]
        public int PostgresPort { get; set; } = 5432;
    }
}
