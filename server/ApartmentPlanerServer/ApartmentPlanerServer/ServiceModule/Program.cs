using ApartmentPlanerServer.ServiceModule;
using Persistence.Options;

var builder = WebApplication.CreateBuilder(args);

builder.Services.Configure<PostgresOptions>(
    builder.Configuration.GetSection(PostgresOptions.PostgresOptionsString));

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddServices();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();

    app.UseCors(builder => builder
        .WithOrigins("http://localhost:5000", "http://localhost:3000")
        .AllowAnyHeader()
        .AllowAnyMethod()
        .SetIsOriginAllowed(_ => true)
        .AllowCredentials()
    );
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();
