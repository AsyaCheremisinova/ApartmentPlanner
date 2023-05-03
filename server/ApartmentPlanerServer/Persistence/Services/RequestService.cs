using Application.Common.Exceptions;
using Application.Common.Interfaces;
using Application.Interfaces;
using Application.Models.Requests;
using Application.Models.Response;
using Domain.Entities;
using Microsoft.EntityFrameworkCore;
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
            _requestRepository.Insert(new Request
            {
                Furniture = new Furniture
                {
                    Name = requestDto.Furniture.Name,
                    Image = new File
                    {
                        Data = requestDto.Furniture.Image.Data,
                        Name = requestDto.Furniture.Image.Name
                    },
                    SourceFile = new File
                    {
                        Data = requestDto.Furniture.SourceFile.Data,
                        Name = requestDto.Furniture.SourceFile.Name
                    },
                    Depth = requestDto.Furniture.Depth,
                    Width = requestDto.Furniture.Width,
                    Height = requestDto.Furniture.Height,
                    ProductLink = requestDto.Furniture.ProductLink,
                    Category = FindCategoryById(requestDto.Furniture.CategoryId)
                }
            });
        }

        public ICollection<RequestResponseDto> GetAllRequests()
        {
            var requests = _requestRepository.GetList()
                .Include(request => request.Furniture)
                .Include(request => request.Furniture.Category);

            return requests.Select(request => new RequestResponseDto
                {
                    Id = request.Id,
                    Furniture = new FurnitureResponseDto
                    {
                        Id = request.Furniture.Id,
                        Name = request.Furniture.Name,
                        Depth = request.Furniture.Depth,
                        Height = request.Furniture.Height,
                        Width = request.Furniture.Width,
                        ProductLink = request.Furniture.ProductLink,
                        ImageId = request.Furniture.ImageId,
                        SourceFileId = request.Furniture.SourceFileId,
                        Category = new CategoryResponseDto
                        {
                            Id = request.Furniture.Category.Id,
                            Name = request.Furniture.Category.Name
                        }
                    }
                })
                .ToList();
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
