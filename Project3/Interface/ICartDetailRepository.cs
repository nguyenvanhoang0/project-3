using Project3.Models;

namespace Project3.Interface
{
    public interface ICartDetailRepository
    {
        Task<CartDetail> GetCartDetailByIdAsync(int id);
        Task<IEnumerable<CartDetail>> GetCartDetailsAsync();
        Task<IEnumerable<CartDetail>> GetCartDetailsByCartIdAsync(int cartId);
        Task<CartDetail> CreateCartDetailAsync(CartDetail cartDetail);
        Task UpdateCartDetailAsync(CartDetail cartDetail);
        Task DeleteCartDetailAsync(int id);
    }
}
