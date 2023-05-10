using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Project3.Models;

namespace Project3.Repositories
{
    public interface INewsRepository
    {
        Task<List<News>> GetAllNewsAsync();
        Task<News> GetNewsByIdAsync(int id);
        Task AddNewsAsync(News news);
        Task UpdateNewsAsync(int id, News news);
        Task DeleteNewsAsync(int id);
    }
}