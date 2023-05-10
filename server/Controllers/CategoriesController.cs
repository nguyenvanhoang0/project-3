using Microsoft.AspNetCore.Mvc;
using Project3.Interface;
using Project3.Models;

namespace Project3.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryRepository _categoryRepository;

        public CategoryController(ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }

        [HttpGet]
        public async Task<ActionResult<ICollection<Category>>> GetAllAsync()
        {
            var categories = await _categoryRepository.GetAllAsync();
            return Ok(categories);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Category>> GetByIdAsync(int id)
        {
            var category = await _categoryRepository.GetByIdAsync(id);
            if (category == null)
            {
                return NotFound();
            }
            return Ok(category);
        }

        [HttpPost]
        public async Task<ActionResult<Category>> CreateAsync([FromBody] Category category)
        {
            if (category == null)
            {
                return BadRequest();
            }
            await _categoryRepository.CreateAsync(category);
            return CreatedAtAction(nameof(GetByIdAsync), new { id = category.Id }, category);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Category>> UpdateAsync(int id, [FromBody] Category category)
        {
            if (category == null || category.Id != id)
            {
                return BadRequest();
            }
            var existingCategory = await _categoryRepository.GetByIdAsync(id);
            if (existingCategory == null)
            {
                return NotFound();
            }
            existingCategory.Name = category.Name;
            existingCategory.Description = category.Description;
            await _categoryRepository.UpdateAsync(existingCategory);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Category>> DeleteAsync(int id)
        {
            var category = await _categoryRepository.GetByIdAsync(id);
            if (category == null)
            {
                return NotFound();
            }
            await _categoryRepository.DeleteAsync(id);
            return NoContent();
        }
    }
}
