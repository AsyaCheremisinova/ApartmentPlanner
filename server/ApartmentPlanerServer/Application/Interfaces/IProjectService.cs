using Application.Models.Requests;

namespace Application.Interfaces
{
    public interface IProjectService
    {
        public void SetProject(ProjectRequestDto projectRequestDto);
    }
}
