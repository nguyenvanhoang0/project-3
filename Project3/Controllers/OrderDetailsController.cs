using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NuGet.Protocol.Core.Types;
using Project3.Models;
using Project3.Repository;

namespace Project3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderDetailsController : ControllerBase
    {
        private readonly OrderDetailRepository _orderDetail ;

        public OrderDetailsController(OrderDetailRepository orderDetail)
        {
            _orderDetail = orderDetail;
        }

        // GET: api/orders/5/orderdetails
        [HttpGet("{id}/orderdetails")]
        public async Task<ActionResult<IEnumerable<OrderDetail>>> GetOrderDetails(int id)
        {
            var orderDetails = await _orderDetail.GetOrderDetailsAsync(id);
            return Ok(orderDetails);
        }

        // GET: api/orders/5/orderdetails/1
        [HttpGet("{id}/orderdetails/{orderDetailId}")]
        public async Task<ActionResult<OrderDetail>> GetOrderDetailById(int id, int orderDetailId)
        {
            var orderDetail = await _orderDetail.GetOrderDetailByIdAsync(orderDetailId);

            if (orderDetail == null || orderDetail.OrderId != id)
            {
                return NotFound();
            }

            return Ok(orderDetail);
        }

        [HttpPost("{orderId}/orderdetails")]
        public IActionResult AddOrderDetail(int orderId, [FromBody] OrderDetail orderDetail)
        {
            var order = _orderDetail.GetOrderDetailByIdAsync(orderId);
            //var order = _orderDetail.GetOrder(orderId);

            if (order == null)
            {
                return NotFound();
            }

            orderDetail.OrderId = orderId;
            orderDetail.CreatedAt = DateTime.Now;
            orderDetail.UpdatedAt = DateTime.Now;

            _orderDetail.CreateOrderDetailAsync(orderDetail);

            return CreatedAtRoute("GetOrderDetail", new { orderId = orderDetail.OrderId, id = orderDetail.Id }, orderDetail);
        }

        // PUT: api/orders/5/orderdetails/1
        [HttpPut("{id}/orderdetails/{orderDetailId}")]
        public async Task<IActionResult> UpdateOrderDetail(int id, int orderDetailId, OrderDetail orderDetail)
        {
            if (orderDetail.OrderId != id || orderDetail.Id != orderDetailId)
            {
                return BadRequest();
            }

            var existingOrderDetail = await _orderDetail.GetOrderDetailByIdAsync(orderDetailId);

            if (existingOrderDetail == null || existingOrderDetail.OrderId != id)
            {
                return NotFound();
            }

            await _orderDetail.UpdateOrderDetailAsync(orderDetailId, orderDetail);
            return NoContent();
        }

        // DELETE: api/orders/5/orderdetails/1
        [HttpDelete("{id}/orderdetails/{orderDetailId}")]
        public async Task<IActionResult> DeleteOrderDetail(int id, int orderDetailId)
        {
            var existingOrderDetail = await _orderDetail.GetOrderDetailByIdAsync(orderDetailId);

            if (existingOrderDetail == null || existingOrderDetail.OrderId != id)
            {
                return NotFound();
            }

            await _orderDetail.DeleteOrderDetailAsync(orderDetailId);
            return NoContent();
        }
    }
}
