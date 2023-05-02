using Application.Models.Response;

namespace Application.Interfaces
{
    public interface ICategoryService
    {
        public ICollection<CategoryResponseDto> GetCategories();
    }
}
