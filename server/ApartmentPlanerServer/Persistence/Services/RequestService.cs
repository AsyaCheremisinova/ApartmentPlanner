﻿using Application.Common.Exceptions;
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
        private readonly IGenericRepository<RequestStatusLine> _requestStatusLineRepository;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public RequestService(IUnitOfWork unitOfWork, IHttpContextAccessor httpContextAccessor)
        {
            _furnitureRepository = unitOfWork.FurnitureRepository;
            _requestRepository = unitOfWork.RequestRepository;
            _statusRepository = unitOfWork.StatusRepository;
            _categoryRepository = unitOfWork.CategoryRepository;
            _requestStatusLineRepository = unitOfWork.RequestStatusLineRepository;
            _httpContextAccessor = httpContextAccessor;
        }

        public void SetRequest(CreateRequestRequestDto requestDto)
        {
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
                }
            };

            var status = _statusRepository.GetByID(1);

            _requestStatusLineRepository.Insert(new RequestStatusLine
            {
                Request = request,
                Status = status
            });
        }

        public ICollection<RequestResponseDto> GetAllRequests()
        {
            var requests = _requestRepository.GetList()
                .Include(request => request.Furniture)
                .Include(request => request.Furniture.Category)
                .Include(request => request.RequestStatusLines)
                .Include(request => request.Statuses);

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
                    },
                    StatusLines = request.RequestStatusLines.Select(line => new StatusLineResponseDto
                    {
                        Id = line.Id,
                        Commentary = line.Commentary,
                        Date = line.Date,
                        Status = new StatusResponseDto
                        {
                            Id = line.Status.Id,
                            Name = line.Status.Name
                        }
                    }).ToList()
                })
                .ToList();
        }

        public void UpdateRequestStatus(int id, RequestStatusLineRequestDto requestDto)
        {
            var request = _requestRepository.GetByID(id);
            if (request == null)
                throw new NotFoundException(nameof(Request), id);

            var status = _statusRepository.GetByID(requestDto.StatusId);
            if (status == null)
                throw new NotFoundException(nameof(Status), requestDto.StatusId);

            _requestStatusLineRepository.Insert(new RequestStatusLine
            {
                Commentary = requestDto.Commentary,
                Request = request,
                Status = status
            });
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
