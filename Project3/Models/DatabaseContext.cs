
using System.Data;
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;
using System.Configuration;
using Project3.Models;

namespace Project3.Models
{
        public class DatabaseContext : DbContext
    {
            private readonly IConfiguration _configuration;
            private readonly string _connectionString;

            public DatabaseContext(IConfiguration configuration)
            {
                _configuration = configuration;
                _connectionString = _configuration.GetConnectionString("SqlConnection");
            }
        public DbSet<Product> Products { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }

        public DbSet<Project3.Models.Account> Account { get; set; } = default!;

        public DbSet<Project3.Models.Order> Order { get; set; } = default!;

        public DbSet<Project3.Models.Brand> Brand { get; set; } = default!;



    }

        
    }

