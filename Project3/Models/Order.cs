using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Project3.Models
{
    [Table("orders")]
    public class Order
        {
            public int Id { get; set; }
            [Required]
            public int CustomerId { get; set; }
            [Required]
            public DateTime OrderDate { get; set; }
            [Required]
            public decimal TotalPrice { get; set; }
            public DateTime CreatedAt { get; set; }
            public DateTime UpdatedAt { get; set; }
            public virtual Account Account { get; set; }
            public virtual ICollection<OrderDetail> OrderDetails { get; set; }
    }
    

}
