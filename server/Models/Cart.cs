using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Project3.Models
{
    [Table("Carts")]
    public partial class Cart
    {
        [Column("id")]
        public int Id { get; set; }
        [Column("account_id")]
        public int AccountId { get; set; }
        [Column("total_price")]
        public decimal TotalPrice { get; set; }
        [Column("created_at")]
        public DateTime? CreatedAt { get; set; }
        [Column("updated_at")]
        public DateTime? UpdatedAt { get; set; }

        public virtual Account Account { get; set; } = null!;

        public virtual ICollection<CartDetail> CartDetails { get; set; } = new List<CartDetail>();
    }
}
