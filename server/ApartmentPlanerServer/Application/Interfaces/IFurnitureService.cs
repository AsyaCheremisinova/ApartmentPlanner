using Application.Models.Requests;

namespace Application.Interfaces
{
    public interface IFurnitureService
    {
        public void UpdateFurniture(int furnitureId, FurnitureRequestDto furnitureRequestDto);
    }
}
