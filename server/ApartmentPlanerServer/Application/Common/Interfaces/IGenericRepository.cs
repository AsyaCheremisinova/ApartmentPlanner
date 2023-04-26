namespace Application.Common.Interfaces
{
    public interface IGenericRepository<TEntity> where TEntity : class
    {
        IQueryable<TEntity> GetList();

        TEntity? GetByID(object id);

        void Insert(TEntity entity);

        void Delete(TEntity entity);

        void Update(TEntity entityToUpdate);

        void SaveChanges();
    }
}
