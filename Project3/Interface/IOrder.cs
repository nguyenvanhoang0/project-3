using Project3.Models;

namespace Project3.Interface
{
    public interface IOrder
    {
        Task<IEnumerable<Order>> GetAllOrdersAsync();
        Task<Order> GetOrderByIdAsync(int id);
        Task<Order> CreateOrderAsync(Order order);
        Task<Order> UpdateOrderAsync(int id, Order order);
        Task DeleteOrderAsync(int id);
    }  
}
