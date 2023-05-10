using Microsoft.Data.SqlClient;
using Project3.Interface;
using Project3.Models;
using Dapper;
using Project3.Controllers;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Project3.Repository
{
    
    public class AccountRepository : IAccountRepository
    {    
        private readonly DatabaseContext _dbContext;
        public AccountRepository(DatabaseContext context)
        {
            _dbContext = context;        
        }
        public async Task<List<Account>> GetAccountsByNameAsync(string name)
        {
            return await _dbContext.Accounts
                .Where(a => a.Name.Contains(name))
                .ToListAsync();
        }
        public async Task<Account> GetByIdAsync(int id)
        {
            return await _dbContext.Accounts.FindAsync(id); 
        }

        public async Task<IEnumerable<Account>> GetAllAsync()
        {
            return await _dbContext.Accounts.ToListAsync();
        }
        public async Task<Account> Register(Account account)
        {
            // Check if email already exists
            if (await _dbContext.Accounts.AnyAsync(x => x.Email == account.Email))
            {
                return null;
            }

            account.Password = BCrypt.Net.BCrypt.HashPassword(account.Password);

            await _dbContext.Accounts.AddAsync(account);
            await _dbContext.SaveChangesAsync();

            return account;
        }

        public async Task<object> Login(Account account)
        {
            var user = await _dbContext.Accounts.FirstOrDefaultAsync(x => x.Email == account.Email);

            // Check if email exists
            if (user == null)
            {
                return null;
            }

            // Check if password is correct
            if (!BCrypt.Net.BCrypt.Verify(account.Password, user.Password))
            {
                return null;
            }

            // Create JWT token
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes("your secret key here");

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Id.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);

            return new { Token = tokenString };
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
