using Project3.Models;

namespace Project3.Interface
{
    public interface IOrderRepository
    {

        Task<IEnumerable<Order>> GetAllOrdersAsync();

        // Get order by Id
        Task<Order> GetOrderByIdAsync(int id);

        // Create a new order
        Task<Order> CreateOrderAsync(Order order);

        // Update an existing order
        Task<Order> UpdateOrderAsync(int id, Order order);

        // Delete an order
        Task DeleteOrderAsync(int id);
    }

    
}
