using Application.Common.Interfaces;
using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Npgsql;
using Persistence.Configurations;
using Persistence.Options;
using File = Domain.Entities.File;

namespace Persistence.DbContext
{
    public class IPlannerDbContext : Microsoft.EntityFrameworkCore.DbContext, IPlanerDbContext
    {
        private readonly PostgresOptions _postgresOptions;

        public IPlannerDbContext(IOptions<PostgresOptions> postgresOptions, DbContextOptions options)
            : base(options)
        {
            _postgresOptions = postgresOptions.Value;
        }

        public DbSet<Category> Categories { get; set; }
        public DbSet<Request> Requests { get; set; }
        public DbSet<Status> Statuses { get; set; }
        public DbSet<Furniture> Furniture { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<File> Files { get; set; }
        public DbSet<Project> Projects { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = new NpgsqlConnectionStringBuilder
            {
                Host = _postgresOptions.PostgresHost,
                Port = _postgresOptions.PostgresPort,
                Username = _postgresOptions.PostgresUser,
                Password = _postgresOptions.PostgresPassword,
                Database = _postgresOptions.PostgresDataBase,
                IncludeErrorDetail = true
            }.ConnectionString;
            optionsBuilder.UseNpgsql(connectionString);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            new CategoryConfiguration().Configure(modelBuilder.Entity<Category>());
            new StatusConfiguration().Configure(modelBuilder.Entity<Status>());
            new FurnitureConfiguration().Configure(modelBuilder.Entity<Furniture>());
            new UserConfiguration().Configure(modelBuilder.Entity<User>());
        }
    }
}
