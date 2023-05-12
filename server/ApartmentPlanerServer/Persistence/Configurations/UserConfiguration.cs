using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using Domain.Entities;

namespace Persistence.Configurations
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.HasKey(user => user.Id);
            builder.Property(user => user.Id)
                .IsRequired()
                .HasColumnName("Id");

            builder.Property(user => user.Name)
                .IsRequired()
                .HasMaxLength(45);

            builder.Property(user => user.Password)
                .IsRequired()
                .HasMaxLength(100);

            builder.Property(user => user.Email)
                .IsRequired()
                .HasMaxLength(45);

            builder.HasOne(user => user.Role)
                .WithMany(role => role.Users)
                .IsRequired();
        }
    }
}
