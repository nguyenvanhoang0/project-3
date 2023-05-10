using Microsoft.EntityFrameworkCore;
using Project3.Interface;
using Project3.Models;

namespace Project3.Repository
{
    public class OrderRepository : IOrderRepository
    {
        private readonly DatabaseContext _context;

        public OrderRepository(DatabaseContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Order>> GetAllOrdersAsync()
        {
            return await _context.Set<Order>().ToListAsync();
        }

        public async Task<Order> GetOrderByIdAsync(int id)
        {
            return await _context.Set<Order>().FindAsync(id);
        }

        public async Task<Order> CreateOrderAsync(Order order)
        {
            await _context.Set<Order>().AddAsync(order);
            await _context.SaveChangesAsync();
            return order;
        }

        public async Task<Order> UpdateOrderAsync(int id, Order order)
        {
            var existingOrder = await _context.Set<Order>().FindAsync(id);

            if (existingOrder == null)
            {
                return null;
            }
            
            existingOrder.AccountId = order.AccountId;
            existingOrder.OrderDate = order.OrderDate;
            existingOrder.TotalPrice = order.TotalPrice;

            _context.Entry(existingOrder).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return existingOrder;
        }

        public async Task DeleteOrderAsync(int id)
        {
            var existingOrder = await _context.Set<Order>().FindAsync(id);

            if (existingOrder != null)
            {
                _context.Set<Order>().Remove(existingOrder);
                await _context.SaveChangesAsync();
            }
        }

    }
}
