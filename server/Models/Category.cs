using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Project3.Models
{

    [Table("Categories")]
    public partial class Category
    {
        [Column("id")]
        public int Id { get; set; }
        [Column("name")]
        public string Name { get; set; } = null!;
        [Column("description")]
        public string? Description { get; set; }
        [Column("created_at")]
        public DateTime? CreatedAt { get; set; }
        [Column("updated_at")]
        public DateTime? UpdatedAt { get; set; }

        public virtual ICollection<Product> Products { get; set; } = new List<Product>();
    }
}
