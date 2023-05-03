using Application.Common.Interfaces;
using Application.Interfaces;
using Application.Models.Requests;
using Domain.Entities;
using File = Domain.Entities.File;

namespace Persistence.Services
{
    public class ProjectService : IProjectService
    {
        private readonly IGenericRepository<Project> _projectRepository;

        public ProjectService(IUnitOfWork unitOfWork)
        {
            _projectRepository = unitOfWork.ProjectRepository;
        }

        public void SetProject(ProjectRequestDto projectRequestDto)
        {
            _projectRepository.Insert(new Project
            {
                Name = projectRequestDto.Name,
                CreatedAt = DateTime.UtcNow,
                LastUpdatedAt = DateTime.UtcNow,
                File = new File 
                {
                    Name = projectRequestDto.ProjectFile.Name,
                    Data = projectRequestDto.ProjectFile.Data
                }
            });
        }
    }
}
