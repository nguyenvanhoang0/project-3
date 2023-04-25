
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Client;
using Project3.Interface;
using Project3.Models;
using Project3.Repository;

namespace Project3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
        private readonly IAccountRepository _accountRepository;
        public AccountsController(IAccountRepository accountRepository)
        {
            _accountRepository = accountRepository;
        }

        // GET: api/Accounts

        [HttpGet("{id}")]
        [Produces("application/json")]
        public async Task<ActionResult<Account>> GetByIdAsync(int id)
        {
            var accounts = await _accountRepository.GetByIdAsync(id);

            if (accounts == null)
            {
                return NotFound();
            }

            return accounts;
        }

        [HttpGet]
        [Produces("application/json")]
        public async Task<ActionResult<IEnumerable<Account>>> GetAllAsync()
        {
            var accounts = await _accountRepository.GetAllAsync();

            if (!accounts.Any())
            {
                return NotFound();
            }

            return Ok(accounts);
        }

        [HttpPost]
       
        public async Task<ActionResult> AddAsync([FromBody] Account account)
        {
            await _accountRepository.AddAsync(account);

            return CreatedAtAction(nameof(GetByIdAsync), new { id = account.Id }, account);
        }

        [HttpPut("{id}")]
        [Produces("application/json")]
        public async Task<ActionResult> UpdateAsync(int id, [FromBody] Account account)
        {
            if (id != account.Id)
            {
                return BadRequest();
            }

            await _accountRepository.UpdateAsync(account);

            return NoContent();
        }

        [HttpDelete("{id}")]
        [Produces("application/json")]
        public async Task<ActionResult> DeleteAsync(int id)
        {
            var accounts = await _accountRepository.GetByIdAsync(id);

            if (accounts == null)
            {
                return NotFound();
            }

            await _accountRepository.DeleteAsync(accounts);
            return NoContent();
        }
    }
}
