using Domain.Entities;

namespace Application.Common.Interfaces
{
    public interface IUnitOfWork
    {
        public IGenericRepository<Request> GenreRepository { get; }
        public IGenericRepository<Status> StatusRepository { get; }
        public IGenericRepository<Furniture> FurnitureRepository { get; }
    }
}
