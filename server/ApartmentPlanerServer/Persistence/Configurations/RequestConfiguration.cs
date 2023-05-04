using Domain.Entities;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace Persistence.Configurations
{
    public class RequestConfiguration : IEntityTypeConfiguration<Request>
    {
        public void Configure(EntityTypeBuilder<Request> builder)
        {
            builder.HasKey(request => request.Id);

            builder.HasMany(request => request.Statuses)
                .WithMany(status => status.Requests)
                .UsingEntity<RequestStatusLine>(
                    line => line.HasOne(item => item.Status)
                        .WithMany(status => status.RequestStatusLines),
                    
                    line => line.HasOne(item => item.Request)
                        .WithMany(request => request.RequestStatusLines),
                    
                    line =>
                    {
                        line.HasKey(item => item.Id);
                        line.Property(item => item.Date)
                            .HasDefaultValue(DateTime.UtcNow);
                        line.Property(item => item.Commentary)
                            .HasDefaultValue(string.Empty);
                    });
        }
    }
}
