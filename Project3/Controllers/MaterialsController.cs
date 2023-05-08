using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Project3.Interface;
using Project3.Models;
using Project3.Repositories;

namespace Project3.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MaterialsController : ControllerBase
    {
        private readonly IMaterialRepository _repository;

        public MaterialsController(IMaterialRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<IEnumerable<Material>> GetAllMaterials()
        {
            return await _repository.GetAllMaterialsAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Material>> GetMaterialById(int id)
        {
            var material = await _repository.GetMaterialByIdAsync(id);

            if (material == null)
            {
                return NotFound();
            }

            return material;
        }

        [HttpPost]
        public async Task<ActionResult<Material>> AddMaterial(Material material)
        {
            await _repository.AddMaterialAsync(material);

            return CreatedAtAction(nameof(GetMaterialById), new { id = material.Id }, material);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateMaterial(int id, Material material)
        {
            if (id != material.Id)
            {
                return BadRequest();
            }

            await _repository.UpdateMaterialAsync(material);

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMaterial(int id)
        {
            var material = await _repository.GetMaterialByIdAsync(id);

            if (material == null)
            {
                return NotFound();
            }

            await _repository.DeleteMaterialAsync(material);

            return NoContent();
        }
    }
}
