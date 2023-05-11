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
    public class FurnitureService : IFurnitureService
    {
        private readonly IGenericRepository<Furniture> _furnitureRepository;
        private readonly IGenericRepository<Category> _categoryRepository;
        private readonly IGenericRepository<File> _fileRepository;

        public FurnitureService(IUnitOfWork unitOfWork)
        {
            _furnitureRepository = unitOfWork.FurnitureRepository;
            _fileRepository = unitOfWork.FileRepository;
            _categoryRepository = unitOfWork.CategoryRepository;
        }

        public ICollection<FurnitureResponseDto> GetAllFurniture()
        {
            return _furnitureRepository.GetList()
                .Include(furniture => furniture.Category)
                .Select(furniture => new FurnitureResponseDto
                {
                    Id = furniture.Id,
                    Depth = furniture.Depth,
                    Height = furniture.Height,
                    Width = furniture.Width,
                    ImageId = furniture.ImageId,
                    SourceFileId = furniture.SourceFileId,
                    Name = furniture.Name,
                    ProductLink = furniture.ProductLink,
                    Category = new CategoryResponseDto
                    {
                        Id = furniture.Category.Id,
                        Name = furniture.Category.Name
                    }
                }).ToList();
        }

        public void UpdateFurniture(int furnitureId, FurnitureRequestDto furnitureRequestDto)
        {
            var furniture = _furnitureRepository.GetByID(furnitureId);
            if (furniture == null)
                throw new NotFoundException(nameof(Furniture), furnitureId);

            var category = _categoryRepository.GetByID(furnitureRequestDto.CategoryId);
            if (category == null)
                throw new NotFoundException(nameof(Category), furnitureRequestDto.CategoryId);

            var sourceFile = _fileRepository.GetByID(furniture.SourceFileId);
            sourceFile.Data = furnitureRequestDto.SourceFile.Data;
            sourceFile.Name = furnitureRequestDto.SourceFile.Name;

            var imageFile = _fileRepository.GetByID(furniture.ImageId);
            imageFile.Data = furnitureRequestDto.Image.Data;
            imageFile.Name = furnitureRequestDto.Image.Name;


            _furnitureRepository.Update(new Furniture
            {
                Id = furnitureId,
                Height = furnitureRequestDto.Height,
                Depth = furnitureRequestDto.Depth,
                Width = furnitureRequestDto.Width,
                Category = category,
                Name = furnitureRequestDto.Name,
                ProductLink = furnitureRequestDto.ProductLink
            });
        }
    }
}
