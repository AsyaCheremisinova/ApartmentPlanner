using Application.Common.Exceptions;
using Application.Common.Interfaces;
using Application.Interfaces;
using Application.Models.Requests;
using Application.Models.Response;
using Domain.Entities;
using File = Domain.Entities.File;

namespace Persistence.Services
{
    public class RequestService : IRequestService
    {
        private readonly IGenericRepository<Request> _requestRepository;
        private readonly IGenericRepository<Status> _statusRepository;
        private readonly IGenericRepository<Furniture> _furnitureRepository;
        private readonly IGenericRepository<File> _fileRepository;
        private readonly IGenericRepository<Category> _categoryRepository;

        public RequestService(IUnitOfWork unitOfWork)
        {
            _requestRepository = unitOfWork.RequestRepository;
            _statusRepository = unitOfWork.StatusRepository;
            _furnitureRepository = unitOfWork.FurnitureRepository;
            _fileRepository = unitOfWork.FileRepository;
            _categoryRepository = unitOfWork.CategoryRepository;
        }

        public void SetRequest(RequestRequestDto requestDto)
        {
            var imageFile = new File
            {
                Data = requestDto.Furniture.Image.Data,
                Name = requestDto.Furniture.Image.Name
            };
            _fileRepository.Insert(imageFile);

            var sourceFile = new File
            {
                Data = requestDto.Furniture.SourceFile.Data,
                Name = requestDto.Furniture.SourceFile.Name
            };
            _fileRepository.Insert(sourceFile);

            var furniture = new Furniture
            {
                Name = requestDto.Furniture.Name,
                Image = imageFile,
                SourceFile = sourceFile,
                Depth = requestDto.Furniture.Depth,
                Width = requestDto.Furniture.Width,
                Height = requestDto.Furniture.Height,
                ProductLink = requestDto.Furniture.ProductLink,
                Category = FindCategoryById(requestDto.Furniture.CategoryId)
            };
            _furnitureRepository.Insert(furniture);

            _requestRepository.Insert(new Request
            {
                Furniture = furniture,
            });
        }

        public List<RequestResponseDto> GetAllRequests()
        {
            throw new NotImplementedException();
        }

        public RequestResponseDto GetRequestById(Guid id)
        {
            throw new NotImplementedException();
        }

        public void UpdateRequest(Guid id, RequestRequestDto requestDto)
        {
        }

        private Category FindCategoryById(int id)
        {
            var category = _categoryRepository.GetByID(id);
            
            if (category == null)
                throw new BadRequestException();
            
            return category;
        }
    }
}
