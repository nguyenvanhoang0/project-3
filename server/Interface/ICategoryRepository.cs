using Project3.Models;
namespace Project3.Interface;

public interface ICategoryRepository
{
    Task<ICollection<Category>> GetAllAsync();
    Task<Category> GetByIdAsync(int id);
    Task CreateAsync(Category category);
    Task UpdateAsync(Category category);
    Task DeleteAsync(int id);
}
