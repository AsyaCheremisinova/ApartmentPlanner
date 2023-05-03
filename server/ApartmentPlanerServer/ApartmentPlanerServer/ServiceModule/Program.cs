using ApartmentPlanerServer.ServiceModule;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Persistence.Options;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

builder.Services.Configure<PostgresOptions>(
    builder.Configuration.GetSection(PostgresOptions.PostgresOptionsString));
builder.Services.Configure<AuthOptions>(
    builder.Configuration.GetSection(AuthOptions.AuthOptionsString));

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddServices();

builder.Services.AddAuthorization();
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidIssuer = builder.Configuration["Jwt:ISSUER"],
            ValidAudience = builder.Configuration["Jwt:AUDIENCE"],
            IssuerSigningKey = new SymmetricSecurityKey
                (Encoding.UTF8.GetBytes(builder.Configuration["Jwt:KEY"])),
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = false,
            ValidateIssuerSigningKey = true
        };
    });

var app = builder.Build();

app.UseAuthentication();
app.UseAuthorization();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();

    app.UseCors(builder => builder
        .WithOrigins("http://localhost:5000", "http://localhost:3000")
        .AllowAnyHeader()
        .WithExposedHeaders("Content-Disposition")
        .AllowAnyMethod()
        .SetIsOriginAllowed(_ => true)
        .AllowCredentials()
    );
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();
