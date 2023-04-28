using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Project3.Models
{
        [Table("Products")]
        public class Product
        {
            public int Id { get; set; }

            [Required(ErrorMessage = "Name is required")]
            [MaxLength(255, ErrorMessage = "Name cannot exceed 255 characters")]
            public string Name { get; set; }

            public string Description { get; set; }

            [Required(ErrorMessage = "Price is required")]
            [Range(0.01, double.MaxValue, ErrorMessage = "Price must be greater than 0")]
            public decimal Price { get; set; }

            public string ImageUrl { get; set; }

            [Required(ErrorMessage = "Category is required")]
            public int CategoryId { get; set; }

            [Required(ErrorMessage = "Brand is required")]
            public int BrandId { get; set; }

            public int? PromotionId { get; set; }

            public DateTime CreatedAt { get; set; }

            public DateTime UpdatedAt { get; set; }
  
        //public virtual Category Category { get; set; }//
            public virtual Brand Brand { get; set; }
            public virtual Promotion Promotion { get; set; }
        }
    


}
