using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Project3.Models
{
        [Table("Products")]
        public class Product
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public string Description { get; set; }
            public decimal Price { get; set; }
            public string ImageUrl { get; set; }
            public int CategoryId { get; set; }
            public int BrandId { get; set; }
            public int PromotionId { get; set; }
            public DateTime CreatedAt { get; set; }
            public DateTime UpdatedAt { get; set; }

            //public virtual Category Category { get; set; }//
            public virtual Brand Brand { get; set; }
            public virtual Promotion Promotion { get; set; }
        }
    


}
