using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Project3.Models
{

    [Table("promotions")]
    public class Promotion
        {
            public int Id { get; set; }
            [Required]
            public string Name { get; set; }
            public string Description { get; set; }
            [Required]
            public DateTime StartDate { get; set; }
            [Required]
            public decimal Discount { get; set; }
            [Required]
            public DateTime EndDate { get; set; }
            public DateTime CreatedAt { get; set; }
            public DateTime UpdatedAt { get; set; }
            public virtual ICollection<Product> Products { get; set; }
    }
    

}
