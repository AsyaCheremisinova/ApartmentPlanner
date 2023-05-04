using Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Persistence.DbContext
{
    public class PlannerDbContextInitializer
    {
        public void SeedData(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Category>().HasData(
                new Category { Id = 1, Name = "Диваны" },
                new Category { Id = 2, Name = "Столы" },
                new Category { Id = 3, Name = "Стулья" },
                new Category { Id = 4, Name = "Кровати" },
                new Category { Id = 5, Name = "Интерьер" },
                new Category { Id = 6, Name = "Домашние растения" });

            modelBuilder.Entity<Status>().HasData(
                new Status { Id = 1, Name = "Черновик" },
                new Status { Id = 2, Name = "Обрабатывается" },
                new Status { Id = 3, Name = "Возвращена на редактирование" },
                new Status { Id = 4, Name = "Принята" },
                new Status { Id = 5, Name = "Отклонена" });
        }
    }
}
