using Application.Common.Interfaces;
using Application.Interfaces;
using Application.Models.Requests;
using Domain.Entities;

namespace Persistence.Services
{
    public class FurnitureService : IFurnitureService
    {
        private readonly IGenericRepository<Furniture> _furnitureRepository;

        public FurnitureService(IUnitOfWork unitOfWork)
        {
            _furnitureRepository = unitOfWork.FurnitureRepository;
        }

        
        public void SetFurniture(FurnitureRequestDto furnitureRequestDto)
        {
        }
    }
}
