using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Project3.Models
{

    [Table("promotions")]
    public class Promotion
    {
        [Column("id")]
        public int Id { get; set; }
        [Required]
        [Column("name")]
        public string? Name { get; set; }
        [Column("description")]
        public string? Description { get; set; }
        [Required]
        [Column("start_date")]
        public DateTime StartDate { get; set; }
        [Required]
        [Column("discount")]
        public decimal Discount { get; set; }
        [Required]
        [Column("end_date")]
        public DateTime EndDate { get; set; }
        [Column("created_at")]
        public DateTime CreatedAt { get; set; }
        [Column("updated_at")]
        public DateTime UpdatedAt { get; set; }
        public virtual ICollection<Product> Products { get; set; } = new List<Product>();
        public virtual ICollection<Product> ProductsNavigation { get; set; } = new List<Product>();
    }



}
