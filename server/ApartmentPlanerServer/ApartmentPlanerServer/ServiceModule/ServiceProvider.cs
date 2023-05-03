using Application.Common.Interfaces;
using Application.Interfaces;
using Persistence.DbContext;
using Persistence.Repository;
using Persistence.Services;

namespace ApartmentPlanerServer.ServiceModule
{
    public static class ServiceProvider
    {
        public static IServiceCollection AddServices(this IServiceCollection services)
        {
            services.AddDatabase();
            services.AddRepository();
            services.AddApplicationServices();
            return services;
        }

        private static IServiceCollection AddDatabase(this IServiceCollection services)
        {
            services.AddDbContext<IPlannerDbContext>();
            services.AddScoped<IPlannerDbContext, IPlannerDbContext>();
            return services;
        }

        private static IServiceCollection AddRepository(this IServiceCollection services)
        {
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            return services;
        }

        private static IServiceCollection AddApplicationServices(this IServiceCollection services)
        {
            services.AddScoped<IRequestService, RequestService>();
            services.AddScoped<IFurnitureService, FurnitureService>();
            services.AddScoped<ICategoryService, CategoryService>();
            services.AddScoped<IFileService, FileService>();
            services.AddScoped<IAuthService, AuthService>();
            services.AddScoped<IProjectService, ProjectService>();
            return services;
        }
    }
}
