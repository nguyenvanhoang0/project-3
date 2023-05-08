using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project3.Interface;
using Project3.Models;

namespace Project3.Controllers
{
    [ApiController]
    [Route("api/promotions")]
    public class PromotionController : ControllerBase
    {
        private readonly IPromotionRepository _repository;

        public PromotionController(IPromotionRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var promotions = await _repository.GetAll();
            return Ok(promotions);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var promotion = await _repository.GetById(id);
            if (promotion == null) return NotFound();
            return Ok(promotion);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] Promotion promotion)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var createdPromotion = await _repository.Create(promotion);
            return CreatedAtAction(nameof(GetById), new { id = promotion.Id }, promotion);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] Promotion promotion)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            if (id != promotion.Id) return BadRequest();

            var existingPromotion = await _repository.GetById(id);
            if (existingPromotion == null) return NotFound();

            await _repository.Update(promotion);

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var existingPromotion = await _repository.GetById(id);
            if (existingPromotion == null) return NotFound();

            await _repository.Delete(id);

            return NoContent();
        }

    }
}
