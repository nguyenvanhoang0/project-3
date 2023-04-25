using Project3.Models;
using System.Numerics;

namespace Project3.Interface
{
    public interface IAccountRepository
    {
        Task<Account> GetByIdAsync(int id);
        Task<IEnumerable<Account>> GetAllAsync();
        Task AddAsync(Account account);
        Task UpdateAsync(Account account);
        Task DeleteAsync(Account account);

    }
}
