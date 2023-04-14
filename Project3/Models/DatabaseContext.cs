using MySql.Data.MySqlClient;
using System.Data;
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;
using System.Configuration;

namespace Project3.Models
{
        public class DatabaseContext : DbContext
    {
            private readonly IConfiguration _configuration;
            private readonly string _connectionString;

            public DatabaseContext(IConfiguration configuration)
            {
                _configuration = configuration;
                _connectionString = _configuration.GetConnectionString("MySqlConnection");
            }
        public DbSet<Product> Products { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySQL(_connectionString);
        }



    }

        
    }

