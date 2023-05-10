using Microsoft.EntityFrameworkCore;
using Project3.Interface;
using Project3.Models;

namespace Project3.Repository
{
    public class PromotionRepository : IPromotionRepository
    {
        private readonly DatabaseContext _context;

        public PromotionRepository(DatabaseContext context)
        {
            _context = context;
        }

        public async Task<List<Promotion>> GetAll()
        {
            return await _context.Set<Promotion>().ToListAsync();
        }

        public async Task<Promotion> GetById(int id)
        {
            return await _context.Set<Promotion>().FindAsync(id);
        }

        public async Task<Promotion> Create(Promotion promotion)
        {
            _context.Set<Promotion>().Add(promotion);
            await _context.SaveChangesAsync();
            return promotion;
        }

        public async Task Update(Promotion promotion)
        {
            _context.Entry(promotion).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task Delete(int id)
        {
            var promotion = await _context.Set<Promotion>().FindAsync(id);
            if (promotion == null) return;

            _context.Set<Promotion>().Remove(promotion);
            await _context.SaveChangesAsync();
        }
    }

}
