using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Project3.Models
{
    [Table("Order_Details")]
    public class OrderDetail
    {
        [Column("id")]
        public int Id { get; set; }
        [Required]
        [Column("order_id")]
        public int OrderId { get; set; }
        [Required]
        [Column("product_id")]
        public int ProductId { get; set; }
        [Required]
        [Column("quantity")]
        public int Quantity { get; set; }
        [Required]
        [Column("price")]
        public decimal Price { get; set; }
        [Column("created_at")]
        public DateTime CreatedAt { get; set; }
        [Column("updated_at")]
        public DateTime UpdatedAt { get; set; }
        public Order Order { get; set; }
        public Product Product { get; set; }
    }


}
