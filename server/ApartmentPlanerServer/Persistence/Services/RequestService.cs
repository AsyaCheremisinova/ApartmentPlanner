using Application.Common.Exceptions;
using Application.Common.Interfaces;
using Application.Interfaces;
using Application.Models.Requests;
using Application.Models.Response;
using Domain.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using File = Domain.Entities.File;

namespace Persistence.Services
{
    public class RequestService : IRequestService
    {
        private readonly IGenericRepository<Request> _requestRepository;
        private readonly IGenericRepository<Status> _statusRepository;
        private readonly IGenericRepository<Category> _categoryRepository;
        private readonly IGenericRepository<Furniture> _furnitureRepository;
        private readonly IGenericRepository<File> _fileRepository;
        private readonly IGenericRepository<Furniture> _furnitureService;
        private readonly IGenericRepository<RequestStatusLine> _requestStatusLineRepository;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IAuthService _authService;

        public RequestService(IUnitOfWork unitOfWork, IHttpContextAccessor httpContextAccessor,
            IAuthService authService)
        {
            _furnitureRepository = unitOfWork.FurnitureRepository;
            _requestRepository = unitOfWork.RequestRepository;
            _statusRepository = unitOfWork.StatusRepository;
            _categoryRepository = unitOfWork.CategoryRepository;
            _fileRepository = unitOfWork.FileRepository;
            _furnitureRepository = unitOfWork.FurnitureRepository;
            _requestStatusLineRepository = unitOfWork.RequestStatusLineRepository;
            _httpContextAccessor = httpContextAccessor;
            _authService = authService;
        }

        public int SetRequestAndGetItsId(CreateRequestRequestDto requestDto)
        {
            var designer = _authService.GetCurrentUser();

            var request = new Request
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
                    Category = FindCategoryById(requestDto.Furniture.CategoryId),
                },
                User = designer
            };

            var status = _statusRepository.GetByID(1);

            _requestStatusLineRepository.Insert(new RequestStatusLine
            {
                Date = DateTime.UtcNow,
                Request = request,
                Status = status
            });

            return request.Id;
        }

        public void UpdateRequest(int id, string message, CreateRequestRequestDto requestDto)
        {
            var designer = _authService.GetCurrentUser();
            var request = _requestRepository.GetByID(id);

            if (requestDto.Furniture.Image == null)
            {
                var furniture = _furnitureRepository.GetByID(request.FurnitureId);
                var image = _fileRepository.GetByID(furniture.ImageId);

                requestDto.Furniture.Image = new FileRequestDto
                {
                    Data = image.Data,
                    Name = image.Name
                };
            }

            if (requestDto.Furniture.SourceFile == null)
            {
                var furniture = _furnitureRepository.GetByID(request.FurnitureId);
                var sourceFile = _fileRepository.GetByID(furniture.SourceFileId);

                requestDto.Furniture.SourceFile = new FileRequestDto
                {
                    Data = sourceFile.Data,
                    Name = sourceFile.Name
                };
            }

            request.User = designer;
            request.Furniture = new Furniture
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
                Category = FindCategoryById(requestDto.Furniture.CategoryId),
            };

            var status = _statusRepository.GetByID(2); // "Обрабатывается"

            _requestStatusLineRepository.Insert(new RequestStatusLine
            {
                Date = DateTime.UtcNow,
                Request = request,
                Commentary = message,
                Status = status
            });
        }

        public ICollection<RequestResponseDto> GetAllRequests()
        {
            var user = _authService.GetCurrentUser();
            var isDesigner = user.RoleId == 2 // "Дизайнер"
                ? true
                : false;


            var requests = _requestRepository.GetList()
                .Include(request => request.Furniture)
                .Include(request => request.Furniture.Category)
                .Include(request => request.RequestStatusLines)
                .Include(request => request.Statuses)
                .Include(request => request.User);

            return requests
                .Select(request => new RequestResponseDto
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
                    },
                    User = new DesignerResponseDto
                    {
                        Id = request.User.Id,
                        Name = request.User.Name,
                    },
                    StatusLines = request.RequestStatusLines
                        .Select(line => new StatusLineResponseDto
                        {
                            Id = line.Id,
                            Commentary = line.Commentary,
                            Date = line.Date,
                            Status = new StatusResponseDto
                            {
                                Id = line.Status.Id,
                                Name = line.Status.Name
                            }
                        })
                        .OrderByDescending(line => line.Date)
                        .ToList()
                })
                .Where(request =>
                    isDesigner && request.User.Id == user.Id ||
                    !isDesigner && request.StatusLines.First().Status.Id != 1) // Скрыть черновики от редактора
                .ToList();
        }

        public void DeleteRequest(int id)
        {
            var request = _requestRepository.GetByID(id);
            if (request == null)
                throw new NotFoundException(nameof(Request), id);

            _requestRepository.Delete(request);
        }

        public void UpdateRequestStatus(int id, RequestStatusLineRequestDto requestDto)
        {
            var request = _requestRepository.GetByID(id);
            if (request == null)
                throw new NotFoundException(nameof(Request), id);

            var status = _statusRepository.GetByID(requestDto.StatusId);
            if (status == null)
                throw new NotFoundException(nameof(Status), requestDto.StatusId);

            var furniture = _furnitureRepository.GetByID(request.FurnitureId);
            furniture.IsReady = status.Id == 4
                ? true
                : false;

            _requestStatusLineRepository.Insert(new RequestStatusLine
            {
                Commentary = requestDto.Commentary,
                Request = request,
                Status = status,
                Date = DateTime.UtcNow
            });
        }

        private Category FindCategoryById(int id)
        {
            var category = _categoryRepository.GetByID(id);
            if (category == null)
                throw new NotFoundException(nameof(Category), id);
            
            return category;
        }
    }
}
