using Domain.Entities;
using File = Domain.Entities.File;

namespace Application.Common.Interfaces
{
    public interface IUnitOfWork
    {
        public IGenericRepository<Request> RequestRepository { get; }
        public IGenericRepository<Status> StatusRepository { get; }
        public IGenericRepository<Furniture> FurnitureRepository { get; }
        public IGenericRepository<Category> CategoryRepository { get; }
        public IGenericRepository<File> FileRepository { get; }
        public IGenericRepository<User> UserRepository { get; }
        public IGenericRepository<Role> RoleRepository { get; }
    }
}
