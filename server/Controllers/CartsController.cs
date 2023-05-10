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
    public class CartsController : ControllerBase
    {
        private readonly ICartRepository _cartRepository;

        public CartsController(ICartRepository cartRepository)
        {
            _cartRepository = cartRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cart>>> GetCarts()
        {
            var carts = await _cartRepository.GetCartsAsync();
            return Ok(carts);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Cart>> GetCart(int id)
        {
            var cart = await _cartRepository.GetCartByIdAsync(id);
            if (cart == null)
            {
                return NotFound();
            }
            return Ok(cart);
        }

        [HttpGet("account/{accountId}")]
        public async Task<ActionResult<IEnumerable<Cart>>> GetCartsByAccountId(int accountId)
        {
            var carts = await _cartRepository.GetCartsByAccountIdAsync(accountId);
            return Ok(carts);
        }

        [HttpPost]
        public async Task<ActionResult<Cart>> CreateCart(Cart cart)
        {
            await _cartRepository.CreateCartAsync(cart);
            return CreatedAtAction(nameof(GetCart), new { id = cart.Id }, cart);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateCart(int id, Cart cart)
        {
            if (id != cart.Id)
            {
                return BadRequest();
            }
            await _cartRepository.UpdateCartAsync(cart);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteCart(int id)
        {
            await _cartRepository.DeleteCartAsync(id);
            return NoContent();
        }
    }
}
