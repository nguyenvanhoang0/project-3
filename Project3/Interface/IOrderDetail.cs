using Project3.Models;

namespace Project3.Interface
{
    public interface IOrderDetail
    {
        Task<IEnumerable<OrderDetail>> GetOrderDetailsAsync(int orderId);

        // Get an order detail by Id
        Task<OrderDetail> GetOrderDetailByIdAsync(int id);

        // Create a new order detail
        Task<OrderDetail> CreateOrderDetailAsync(OrderDetail orderDetail);

        // Update an existing order detail
        Task<OrderDetail> UpdateOrderDetailAsync(int id, OrderDetail orderDetail);

        // Delete an order detail
        Task DeleteOrderDetailAsync(int id);
    }
}
