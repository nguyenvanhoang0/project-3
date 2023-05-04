using Project3.Models;

namespace Project3.Interface
{
    public interface IOrderDetail
    {
        Task<IEnumerable<OrderDetail>> GetOrderDetailsAsync(int orderId);
        Task<OrderDetail> GetOrderDetailByIdAsync(int id);
        Task<OrderDetail> CreateOrderDetailAsync(OrderDetail orderDetail);
        Task<OrderDetail> UpdateOrderDetailAsync(int id, OrderDetail orderDetail);
        Task DeleteOrderDetailAsync(int id);
    }
}
