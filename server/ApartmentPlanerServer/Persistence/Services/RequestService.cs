using Application.Common.Exceptions;
using Application.Common.Interfaces;
using Application.Interfaces;
using Application.Models.Requests;
using Application.Models.Response;
using Domain.Entities;
using System.ComponentModel.DataAnnotations;
using static System.Net.Mime.MediaTypeNames;

namespace Persistence.Services
{
    public class RequestService : IRequestService
    {
        private readonly IGenericRepository<Request> _repository;
        private readonly IGenericRepository<Status> _statusRepository;

        public RequestService(IUnitOfWork unitOfWork)
        {
            _repository = unitOfWork.GenreRepository;
            _statusRepository = unitOfWork.StatusRepository;
        }

        public void SetRequest(RequestRequestDto requesDto)
        {
            var status = _statusRepository.GetByID(requesDto.StatusId);
            _repository.Insert(new Request
            {
                Name = requesDto.Name,
                Width = requesDto.Width,
                Height = requesDto.Height,
                Depth = requesDto.Depth,
                Material = requesDto.Material,
                Manufacturer = requesDto.Manufacturer,
                Link = requesDto.Link,
                Image = requesDto.Image,
                Status = status,
            });
        }
        public List<RequestResponseDto> GetAllRequests()
        {
            return _repository.GetList()
                .Select(request => new RequestResponseDto
                {
                    Id = request.Id,
                    Name = request.Name,
                    Width = request.Width,
                    Height = request.Height,
                    Depth = request.Depth,
                    Material = request.Material,
                    Manufacturer = request.Manufacturer,
                    Link = request.Link,
                    Image = request.Image,
                    Status = request.Status,               

                })
                .OrderBy(request => request.Name)
                .ToList();
        }
        public RequestResponseDto GetRequestById(Guid id)
        {
            var request = FindRequestById(id);

            return new RequestResponseDto
            {
                Id = request.Id,
                Name = request.Name,
                Width = request.Width,
                Height = request.Height,
                Depth = request.Depth,
                Material = request.Material,
                Manufacturer = request.Manufacturer,
                Link = request.Link,
                Image = request.Image,
                Status = request.Status,
            };
               
        }
        private Request FindRequestById(Guid id)
        {
            var request = _repository.GetByID(id);

            if (request == null)
                throw new NotFoundException(nameof(Request), id);

            return request;
        }

        public void UpdateRequest(Guid id, RequestRequestDto requestDto)
        {
            var request = FindRequestById(id);
            var status = _statusRepository.GetByID(requestDto.StatusId);

            request.Name = requestDto.Name;
            request.Width = requestDto.Width;
            request.Height = requestDto.Height;
            request.Depth = requestDto.Depth;
            request.Material = requestDto.Material;
            request.Manufacturer = requestDto.Manufacturer;
            request.Link = requestDto.Link;
            request.Image = requestDto.Image;
            request.Status = status;

            _repository.SaveChanges();
        }
    }
}
