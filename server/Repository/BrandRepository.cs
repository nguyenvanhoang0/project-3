using Microsoft.EntityFrameworkCore;
using Project3.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Project3.Repositories
{
    public class BrandRepository : IBrandRepository
    {
        private readonly DatabaseContext _context;

        public BrandRepository(DatabaseContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Brand>> GetAllAsync()
        {
            return await _context.Set<Brand>().ToListAsync();
        }

        public async Task<Brand> GetByIdAsync(int id)
        {
            return await _context.Set<Brand>().FindAsync(id);
        }

        public async Task<Brand> CreateAsync(Brand brand)
        {
            _context.Set<Brand>().Add(brand);
            await _context.SaveChangesAsync();
            return brand;
        }

        public async Task UpdateAsync(Brand brand)
        {
            _context.Entry(brand).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(Brand brand)
        {
            _context.Set<Brand>().Remove(brand);
            await _context.SaveChangesAsync();
        }
    }
}
