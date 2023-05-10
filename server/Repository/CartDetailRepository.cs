using Microsoft.EntityFrameworkCore;
using Project3.Interface;
using Project3.Models;

namespace Project3.Repository
{
    public class CartDetailRepository:ICartDetailRepository
    {
        private readonly DatabaseContext _context;

        public CartDetailRepository(DatabaseContext context)
        {
            _context = context;
        }
        public async Task<CartDetail> GetCartDetailByIdAsync(int id)
        {
            return await _context.CartDetails.FindAsync(id);
        }

        public async Task<IEnumerable<CartDetail>> GetCartDetailsAsync()
        {
            return await _context.CartDetails.ToListAsync();
        }

        public async Task<IEnumerable<CartDetail>> GetCartDetailsByCartIdAsync(int cartId)
        {
            return await _context.CartDetails.Where(cd => cd.CartId == cartId).ToListAsync();
        }

        public async Task<CartDetail> CreateCartDetailAsync(CartDetail cartDetail)
        {
            _context.CartDetails.Add(cartDetail);
            await _context.SaveChangesAsync();
            return cartDetail;
        }

        public async Task UpdateCartDetailAsync(CartDetail cartDetail)
        {
            _context.Entry(cartDetail).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteCartDetailAsync(int id)
        {
            var cartDetail = await _context.CartDetails.FindAsync(id);
            _context.CartDetails.Remove(cartDetail);
            await _context.SaveChangesAsync();
        }
    }
}
