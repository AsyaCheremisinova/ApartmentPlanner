using Application.Models.Requests;

namespace Application.Interfaces
{
    public interface IFurnitureService
    {
        public void SetFurniture(FurnitureRequestDto furnitureRequestDto);
    }
}
