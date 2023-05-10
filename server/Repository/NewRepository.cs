using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Project3.Models;

namespace Project3.Repositories
{
    public class NewsRepository : INewsRepository
    {
        private readonly DatabaseContext _context;
        public NewsRepository(DatabaseContext context)
        {
            _context = context;
        }

        public async Task<List<News>> GetAllNewsAsync()
        {
            return await _context.News.ToListAsync();
        }

        public async Task<News> GetNewsByIdAsync(int id)
        {
            return await _context.News.FindAsync(id);
        }

        public async Task AddNewsAsync(News news)
        {
            await _context.News.AddAsync(news);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateNewsAsync(int id, News news)
        {
            var existingNews = await _context.News.FindAsync(id);
            existingNews.Title = news.Title;
            existingNews.Content = news.Content;
            existingNews.Image = news.Image;
            existingNews.Author = news.Author;
            existingNews.PublishedDate = news.PublishedDate;

            await _context.SaveChangesAsync();
        }

        public async Task DeleteNewsAsync(int id)
        {
            var newsToDelete = await _context.News.FindAsync(id);
            _context.News.Remove(newsToDelete);
            await _context.SaveChangesAsync();
        }
    }
}
