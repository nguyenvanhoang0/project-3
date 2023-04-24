using Project3.Models;
using System.Numerics;

namespace Project3.Interface
{
    public interface IAccountRepository
    {
        Task<IEnumerable<Account>> GetAllAccounts();
        Task<Account> GetAccountById(int id);
        Task CreateAccount(Account account);
        Task UpdateAccount(Account account);
        Task DeleteAccount(int id);

    }
}
