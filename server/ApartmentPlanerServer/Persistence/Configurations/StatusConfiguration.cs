using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain.Entities;

namespace Persistence.Configurations
{
    public class StatusConfiguration : IEntityTypeConfiguration<Status>
    {
        public void Configure(EntityTypeBuilder<Status> builder)
        {
            builder.HasKey(status => status.Id);
            builder.Property(status => status.Id)
                .IsRequired()
                .HasColumnName("Id");

            builder.Property(status => status.Name)
                .IsRequired()
                .HasMaxLength(45);

            builder.HasMany(status => status.Requests)
                .WithOne(request => request.Status);
        }
    }
}
