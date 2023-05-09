﻿using Application.Models.Requests;
using Application.Models.Response;

namespace Application.Interfaces
{
    public interface IProjectService
    {
        public void SetProject(ProjectRequestDto projectRequestDto);
        public ICollection<ProjectResponseDto> GetAllProjects();
        public ProjectResponseDto GetProject(int projectId);
    }
}
