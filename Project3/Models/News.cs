using System.ComponentModel.DataAnnotations.Schema;

namespace Project3.Models
{
    [Table("News")]
    public class News
    {
        [Column("id")]
        public int Id { get; set; }
        [Column("title")]
        public string Title { get; set; }
        [Column("content")]
        public string Content { get; set; }
        [Column("image")]
        public string Image { get; set; }
        [Column("author")]
        public string Author { get; set; }
        [Column("published_date")]
        public DateTime PublishedDate { get; set; }
    }
}
