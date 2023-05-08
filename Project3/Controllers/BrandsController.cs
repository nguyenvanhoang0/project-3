using Microsoft.AspNetCore.Mvc;
using Project3.Models;
using Project3.Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Project3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BrandsController : ControllerBase
    {
        private readonly IBrandRepository _repository;

        public BrandsController(IBrandRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<IEnumerable<Brand>> GetAllAsync()
        {
            return await _repository.GetAllAsync();
        }

        [HttpGet("{id}")]
        public async Task<Brand> GetByIdAsync(int id)
        {
            return await _repository.GetByIdAsync(id);
        }

        [HttpPost]
        public async Task<Brand> CreateAsync(Brand brand)
        {
            return await _repository.CreateAsync(brand);
        }

        [HttpPut("{id}")]
        public async Task UpdateAsync(int id, Brand brand)
        {
            var existingBrand = await _repository.GetByIdAsync(id);
            if (existingBrand != null)
            {
                brand.Id = id;
                await _repository.UpdateAsync(brand);
            }
        }

        [HttpDelete("{id}")]
        public async Task DeleteAsync(int id)
        {
            var existingBrand = await _repository.GetByIdAsync(id);
            if (existingBrand != null)
            {
                await _repository.DeleteAsync(existingBrand);
            }
        }
    }
}
