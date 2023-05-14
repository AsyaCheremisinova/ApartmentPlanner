using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using Domain.Entities;

namespace Persistence.Configurations
{
    public class FurnitureConfiguration : IEntityTypeConfiguration<Furniture>
    {
        public void Configure(EntityTypeBuilder<Furniture> builder)
        {
            builder.HasKey(furniture => furniture.Id);
            builder.Property(furniture => furniture.Id)
                .IsRequired()
                .HasColumnName("Id");

            builder.Property(furniture => furniture.IsReady)
                .HasDefaultValue(false);
        }
    }
}
