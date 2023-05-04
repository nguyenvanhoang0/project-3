using Project3.Models;

namespace Project3.Interface
{
    public interface IProduct
    {
            Task<List<Product>> GetAllProductsAsync();
            Task<Product> GetProductByIdAsync(int id);
            Task<Product> CreateProductAsync(Product product);
            Task<Product> UpdateProductAsync(int id, Product product);
            Task DeleteProductAsync(int id); 
    }
}
