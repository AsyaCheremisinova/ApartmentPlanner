using Persistence.DbContext;
using Domain.Entities;
using Application.Common.Interfaces;
using File = Domain.Entities.File;

namespace Persistence.Repository
{
    public class UnitOfWork : IUnitOfWork, IDisposable
    {
        private readonly IPlannerDbContext _context;
        private GenericRepository<Request> _requestRepository;
        private GenericRepository<Status> _statusRepository;
        private GenericRepository<Furniture> _furnitureRepository;
        private GenericRepository<Category> _categoryRepository;
        private GenericRepository<File> _fileRepository;
        private GenericRepository<User> _userRepository;
        private GenericRepository<Role> _roleRepository;

        public UnitOfWork(IPlannerDbContext context)
        {
            _context = context;
        }

        public IGenericRepository<Request> RequestRepository => 
            _requestRepository ??= new GenericRepository<Request>(_context);
        public IGenericRepository<Status> StatusRepository => 
            _statusRepository ??= new GenericRepository<Status>(_context);
        public IGenericRepository<Furniture> FurnitureRepository =>
            _furnitureRepository ??= new GenericRepository<Furniture>(_context);
        public IGenericRepository<Category> CategoryRepository =>
            _categoryRepository ??= new GenericRepository<Category>(_context);
        public IGenericRepository<File> FileRepository =>
            _fileRepository ??= new GenericRepository<File>(_context);
        public IGenericRepository<User> UserRepository => 
            _userRepository ??= new GenericRepository<User>(_context);
        public IGenericRepository<Role> RoleRepository =>
            _roleRepository ??= new GenericRepository<Role>(_context);

        #region Dispose
        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
            }
            disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
        #endregion
    }
}
