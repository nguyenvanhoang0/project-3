using Microsoft.Data.SqlClient;
using Project3.Interface;
using Project3.Models;
using Dapper;

namespace Project3.Repository
{
    
    public class AccountRepository : IAccountRepository
    {
        private readonly string _connectionString;

        public AccountRepository(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("SqlConnection");
        }
        public async Task<IEnumerable<Account>> GetAllAccounts()
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                await connection.OpenAsync();
                return await connection.QueryAsync<Account>("SELECT * FROM Accounts");
            }
            throw new NotImplementedException();
        }

        public async Task<Account> GetAccountById(int id)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                await connection.OpenAsync();
                return await connection.QuerySingleOrDefaultAsync<Account>("SELECT * FROM Accounts WHERE Id = @Id", new { Id = id });
            }
            throw new NotImplementedException();
        }

       
        public async Task CreateAccount(Account account)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                await connection.OpenAsync();
                await connection.ExecuteAsync("INSERT INTO Accounts (Name, Email, Password, Phone, Address, CreatedAt, UpdatedAt) " +
                 "VALUES (@Name, @Email, @Password, @Phone, @Address, @CreatedAt, @UpdatedAt)", account);
            }
            throw new NotImplementedException();
        }

        public async Task UpdateAccount(Account account)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                await connection.OpenAsync();
                await connection.ExecuteAsync("UPDATE Accounts SET Name = @Name, Email = @Email, Password = @Password, " +
                    "Phone = @Phone, Address = @Address, UpdatedAt = @UpdatedAt WHERE Id = @Id", account);
            }
            throw new NotImplementedException();
        }
        public async Task DeleteAccount(int id)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                await connection.OpenAsync();
                await connection.ExecuteAsync("DELETE FROM Accounts WHERE Id = @Id", new { Id = id });
            }
            throw new NotImplementedException();
        }
    }
}
