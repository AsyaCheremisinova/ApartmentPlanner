using Application.Common.Exceptions;
using Application.Common.Interfaces;
using Application.Interfaces;
using Application.Models.Requests;
using File = Domain.Entities.File;

namespace Persistence.Services
{
    public class FileService : IFileService
    {
        private readonly IGenericRepository<File> _fileRepository;

        public FileService(IUnitOfWork unitOfWork)
        {
            _fileRepository = unitOfWork.FileRepository;
        }

        public FileResponseDto GetFileById(int id)
        {
            var file = _fileRepository.GetByID(id);

            if (file == null)
                throw new NotFoundException(nameof(File), id);

            return new FileResponseDto
            {
                Id = file.Id,
                Data = file.Data,
                Name = file.Name
            };
        }
    }
}
