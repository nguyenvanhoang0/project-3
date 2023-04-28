using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Project3.Models
{
    [Table("Orders")]
    public class Order
        {
            [Column("id")]  
            public int Id { get; set; }
            [Required]
        [Column("account_id")]
        public int AccountId { get; set; }
            [Required]
        [Column("order_date")]
        public DateTime OrderDate { get; set; }
            [Required]
        [Column("total_price")]
        public decimal TotalPrice { get; set; }
        [Column("created_at")]
        public DateTime CreatedAt { get; set; }
        [Column("updated_at")]
        public DateTime UpdatedAt { get; set; }
       
        public virtual Account Account { get; set; }
        public virtual ICollection<OrderDetail> OrderDetails { get; set; } = new List<OrderDetail>();
    }
    

}
