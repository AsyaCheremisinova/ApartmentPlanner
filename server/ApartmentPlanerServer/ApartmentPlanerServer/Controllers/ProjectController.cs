using Application.Interfaces;
using Application.Models.Requests;
using Application.Models.Response;
using Microsoft.AspNetCore.Mvc;

namespace ApartmentPlanerServer.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProjectController : ControllerBase
    {
        private readonly IProjectService _projectService;

        public ProjectController(IProjectService projectService)
        {
            _projectService = projectService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateProject()
        {
            var projectFile = HttpContext.Request.Form.Files.GetFile("project_file");
            var name = HttpContext.Request.Form["project_name"].ToString();

            if (projectFile == null)
            {
                return BadRequest();
            }

            var projectFileRequest = new FileRequestDto();
            using (MemoryStream memoryStream = new MemoryStream())
            {
                await projectFile.CopyToAsync(memoryStream);
                projectFileRequest.Data = memoryStream.ToArray();
                projectFileRequest.Name = projectFile.FileName;
            }

            _projectService.SetProject(new ProjectRequestDto
            {
                Name = name,
                ProjectFile = projectFileRequest
            });

            return NoContent();
        }

        [HttpGet]
        public ICollection<ProjectResponseDto> GetAllProjects()
        {
            return _projectService.GetAllProjects();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProject(int id)
        {
            var projectFile = HttpContext.Request.Form.Files.GetFile("project_file");
            var name = HttpContext.Request.Form["project_name"].ToString();

            if (projectFile == null)
            {
                return BadRequest();
            }

            var projectFileRequest = new FileRequestDto();
            using (MemoryStream memoryStream = new MemoryStream())
            {
                await projectFile.CopyToAsync(memoryStream);
                projectFileRequest.Data = memoryStream.ToArray();
                projectFileRequest.Name = projectFile.FileName;
            }

            _projectService.UpdateProject(id, new ProjectRequestDto
            {
                Name = name,
                ProjectFile = projectFileRequest
            });

            return NoContent();
        }

        [HttpDelete]
        public IActionResult DeleteProject(int projectId)
        {
            _projectService.DeleteProject(projectId);

            return NoContent();
        }
    }
}