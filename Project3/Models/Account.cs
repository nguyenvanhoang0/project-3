using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Project3.Models
{
    [Table("accounts")]
    public class Account
    {
        
        [Key]
        [Column("account_id")]
        public int AccountId { get; set; }

        [Column("username")]
        public string UserName { get; set; }

        [Column("email")]
        public string Email { get; set; }
        [Column("password")]
        public string Password { get; set; }
        [Column("status")]
        public string Status { get; set; }
        [Column("role")]
        public string Role { get; set; }



    }
}
