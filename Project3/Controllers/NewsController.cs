using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Project3.Models;
using Project3.Repositories;

namespace Project3.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class NewsController : ControllerBase
    {
        private readonly INewsRepository _newsRepository;
        public NewsController(INewsRepository newsRepository)
        {
            _newsRepository = newsRepository;
        }

        [HttpGet]
        public async Task<ActionResult<List<News>>> GetAllNews()
        {
            return await _newsRepository.GetAllNewsAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<News>> GetNewsById(int id)
        {
            var news = await _newsRepository.GetNewsByIdAsync(id);

            if (news == null)
            {
                return NotFound();
            }

            return news;
        }

        [HttpPost]
        public async Task<IActionResult> CreateNews(News news)
        {
            await _newsRepository.AddNewsAsync(news);

            return CreatedAtAction(nameof(GetNewsById), new { id = news.Id }, news);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateNews(int id, News news)
        {
            var existingNews = await _newsRepository.GetNewsByIdAsync(id);

            if (existingNews == null)
            {
                return NotFound();
            }

            await _newsRepository.UpdateNewsAsync(id, news);

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNews(int id)
        {
            var existingNews = await _newsRepository.GetNewsByIdAsync(id);

            if (existingNews == null)
            {
                return NotFound();
            }

            await _newsRepository.DeleteNewsAsync(id);

            return NoContent();
        }
    }
}

