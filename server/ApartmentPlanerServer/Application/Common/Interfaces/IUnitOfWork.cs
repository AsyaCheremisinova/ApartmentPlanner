using Domain.Entities;
using System;

namespace Application.Common.Interfaces
{
    public interface IUnitOfWork
    {
        public IGenericRepository<Request> GenreRepository { get; }
        public IGenericRepository<Status> StatusRepository { get; }
    }
}
