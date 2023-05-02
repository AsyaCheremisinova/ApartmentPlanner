using Application.Common.Interfaces;
using Application.Interfaces;
using Application.Models.Response;
using Domain.Entities;

namespace Persistence.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly IGenericRepository<Category> _categoryRepository;

        public CategoryService(IUnitOfWork unitOfWork)
        {
            _categoryRepository = unitOfWork.CategoryRepository;
        }

        public ICollection<CategoryResponseDto> GetCategories()
        {
            var categories = _categoryRepository.GetList();
            
            return categories.Select(category => new CategoryResponseDto
            {
                Id = category.Id,
                Name = category.Name
            }).ToList();
        }
    }
}
