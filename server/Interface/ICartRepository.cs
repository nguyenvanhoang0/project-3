using Project3.Models;

namespace Project3.Interface
{
    public interface ICartRepository
    {
        Task<Cart> GetCartByIdAsync(int id);
        Task<IEnumerable<Cart>> GetCartsAsync();
        Task<IEnumerable<Cart>> GetCartsByAccountIdAsync(int accountId);
        Task<Cart> CreateCartAsync(Cart cart);
        Task UpdateCartAsync(Cart cart);
        Task DeleteCartAsync(int id);
    }
}
