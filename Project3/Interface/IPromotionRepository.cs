using Project3.Models;
namespace Project3.Interface
{
    public interface IPromotionRepository
    {
        Task<List<Promotion>> GetAll();
        Task<Promotion> GetById(int id);
        Task<Promotion> Create(Promotion promotion);
        Task Update(Promotion promotion);
        Task Delete(int id);
    }
}
