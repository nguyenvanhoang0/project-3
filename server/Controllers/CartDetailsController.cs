using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project3.Interface;
using Project3.Models;

namespace Project3.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CartsDetailController : ControllerBase
    {
        private readonly ICartDetailRepository _cartDetail;

        public CartsDetailController(ICartDetailRepository cartRepository)
        {
            _cartDetail = cartRepository;
        }

        [HttpGet("details")]
        public async Task<ActionResult<IEnumerable<CartDetail>>> GetCartDetails()
        {
            var cartDetails = await _cartDetail.GetCartDetailsAsync();
            return Ok(cartDetails);
        }

        [HttpGet("details/{id}")]
        public async Task<ActionResult<CartDetail>> GetCartDetail(int id)
        {
            var cartDetail = await _cartDetail.GetCartDetailByIdAsync(id);
            if (cartDetail == null)
            {
                return NotFound();
            }
            return Ok(cartDetail);
        }

        [HttpGet("{cartId}/details")]
        public async Task<ActionResult<IEnumerable<CartDetail>>> GetCartDetailsByCartId(int cartId)
        {
            var cartDetails = await _cartDetail.GetCartDetailsByCartIdAsync(cartId);
            return Ok(cartDetails);
        }

        [HttpPost("details")]
        public async Task<ActionResult<CartDetail>> CreateCartDetail(CartDetail cartDetail)
        {
            await _cartDetail.CreateCartDetailAsync(cartDetail);
            return CreatedAtAction(nameof(GetCartDetail), new { id = cartDetail.Id }, cartDetail);
        }

        [HttpPut("details/{id}")]
        public async Task<ActionResult> UpdateCartDetail(int id, CartDetail cartDetail)
        {
            if (id != cartDetail.Id)
            {
                return BadRequest();
            }
            await _cartDetail.UpdateCartDetailAsync(cartDetail);
            return NoContent();
        }

        [HttpDelete("details/{id}")]
        public async Task<ActionResult> DeleteCartDetail(int id)
        {
            await _cartDetail.DeleteCartDetailAsync(id);
            return NoContent();
        }
    }
}
