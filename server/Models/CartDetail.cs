using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Project3.Models
{
    [Table("Cart_Details")]

    public partial class CartDetail
    {
        [Column("id")]
        public int Id { get; set; }
        [Column("cart_id")]
        public int CartId { get; set; }
        [Column("product_id")]
        public int ProductId { get; set; }
        [Column("quantity")]
        public int Quantity { get; set; }
        [Column("price")]
        public decimal Price { get; set; }
        [Column("created_at")]
        public DateTime? CreatedAt { get; set; }
        [Column("updated_at")]
        public DateTime? UpdatedAt { get; set; }

        public virtual Cart Cart { get; set; } = null!;

        public virtual Product Product { get; set; } = null!;
    }
}
