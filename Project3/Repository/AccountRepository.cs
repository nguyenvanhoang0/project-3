using Microsoft.Data.SqlClient;
using Project3.Interface;
using Project3.Models;
using Dapper;
using Project3.Controllers;
using Microsoft.EntityFrameworkCore;

namespace Project3.Repository
{
    
    public class AccountRepository : IAccountRepository
    {    
        private readonly DatabaseContext _dbContext;
        public AccountRepository(IConfiguration configuration,DatabaseContext context)
        {
            _dbContext = context;        
        }
        public async Task<Account> GetByIdAsync(int id)
        {
            return await _dbContext.Accounts.FindAsync(id); 
        }

        public async Task<IEnumerable<Account>> GetAllAsync()
        {
            return await _dbContext.Accounts.ToListAsync();
        }

        public async Task AddAsync(Account account)
        {
            await _dbContext.Accounts.AddAsync(account);
            await _dbContext.SaveChangesAsync();
        }

        public async Task UpdateAsync(Account account)
        {
            _dbContext.Accounts.Update(account);
            await _dbContext.SaveChangesAsync();
        }

        public async Task DeleteAsync(Account account)
        {
            _dbContext.Accounts.Remove(account);
            await _dbContext.SaveChangesAsync();
        }
    }

}
