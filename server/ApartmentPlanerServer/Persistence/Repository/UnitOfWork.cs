using Persistence.DbContext;
using Domain.Entities;
using Application.Common.Interfaces;
using System;

namespace Persistence.Repository
{
    public class UnitOfWork : IUnitOfWork, IDisposable
    {
        private readonly IPlannerDbContext _context;
        private GenericRepository<Request> _requestRepository;
        private GenericRepository<Status> _statusRepository;



        public UnitOfWork(IPlannerDbContext context)
        {
            _context = context;
        }

        public IGenericRepository<Request> GenreRepository => _requestRepository ??= new GenericRepository<Request>(_context);
        public IGenericRepository<Status> StatusRepository => _statusRepository ??= new GenericRepository<Status>(_context);


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
