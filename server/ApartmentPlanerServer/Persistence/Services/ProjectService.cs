using Application.Common.Exceptions;
using Application.Common.Interfaces;
using Application.Interfaces;
using Application.Models.Requests;
using Application.Models.Response;
using Domain.Entities;
using File = Domain.Entities.File;

namespace Persistence.Services
{
    public class ProjectService : IProjectService
    {
        private readonly IGenericRepository<Project> _projectRepository;
        private readonly IGenericRepository<File> _fileRepository;

        public ProjectService(IUnitOfWork unitOfWork)
        {
            _projectRepository = unitOfWork.ProjectRepository;
            _fileRepository = unitOfWork.FileRepository;
        }

        public ICollection<ProjectResponseDto> GetAllProjects()
        {
            return _projectRepository.GetList()
                .Select(project => new ProjectResponseDto
                {
                    Id = project.Id,
                    Name = project.Name,
                    ProjectFileId = project.FileId,
                    CreatedAt = project.CreatedAt,
                    LastUpdatedAt = project.LastUpdatedAt
                })
                .ToList();
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

        public ProjectResponseDto GetProject(int projectId)
        {
            var project = _projectRepository.GetByID(projectId);
            if (project == null)
                throw new NotFoundException(nameof(Project), projectId);

            return new ProjectResponseDto
            {
                Id = projectId,
                Name = project.Name,
                ProjectFileId = project.Id,
                CreatedAt = project.CreatedAt,
                LastUpdatedAt = project.LastUpdatedAt
            };
        }

        public void UpdateProject(int projectId, ProjectRequestDto projectRequestDto)
        {
            var project = _projectRepository.GetByID(projectId);
            if (project == null)
                throw new NotFoundException(nameof(Project), projectId);

            var file = _fileRepository.GetByID(project.FileId);
            file.Data = projectRequestDto.ProjectFile.Data;
            file.Name = projectRequestDto.ProjectFile.Name;
            _fileRepository.Update(file);

            project.LastUpdatedAt = DateTime.UtcNow;
            project.Name = projectRequestDto.Name;
            
            _projectRepository.SaveChanges();
        }

        public void DeleteProject(int projectId)
        {
            var project = _projectRepository.GetByID(projectId);
            if (project == null)
                throw new NotFoundException(nameof(Project), projectId);

            _projectRepository.Delete(project);
        }
    }
}
