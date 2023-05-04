
using Project3.Models;

namespace Project3.Interface
{
    public interface IMaterial
    {
        Task<IEnumerable<Material>> GetAllMaterialsAsync();
        Task<Material> GetMaterialByIdAsync(int id);
        Task AddMaterialAsync(Material material);
        Task UpdateMaterialAsync(Material material);
        Task DeleteMaterialAsync(Material material);
    }
}
