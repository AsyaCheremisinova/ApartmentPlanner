using Application.Models.Requests;

namespace Application.Interfaces
{
    public interface IFileService
    {
        public FileResponseDto GetFileById(int id);
    }
}
