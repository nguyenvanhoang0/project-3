using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

using Project3.Interface;
using Project3.Models;

namespace Project3.Repositories
{
    public class MaterialRepository : IMaterialRepository
    {
        private readonly DatabaseContext _context;

        public MaterialRepository(DatabaseContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Material>> GetAllMaterialsAsync()
        {
            return await _context.Materials.ToListAsync();
        }

        public async Task<Material> GetMaterialByIdAsync(int id)
        {
            return await _context.Materials.FindAsync(id);
        }

        public async Task AddMaterialAsync(Material material)
        {
            _context.Materials.Add(material);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateMaterialAsync(Material material)
        {
            _context.Entry(material).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteMaterialAsync(Material material)
        {
            _context.Materials.Remove(material);
            await _context.SaveChangesAsync();
        }
    }
}
