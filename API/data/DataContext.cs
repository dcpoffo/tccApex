using System.Collections.Generic;
using API.models;
using Microsoft.EntityFrameworkCore;

namespace API.data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {}

        public DbSet<Produto> Produto { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Produto>()
                .HasData(new List<Produto>(){
                   new Produto(1, "Cabo PP Plano 3x0,50 NBR14897","Metro"),
                   new Produto(2, "Cabo PP Circular 3x0,50 NBR247","Metro"),
                   new Produto(3, "Cabo Techflex 1x0,50 NBR9117 - BR","Metro"),
                   new Produto(4, "Cabo Techflex 1x0,75 DIN - PT","Metro"),
                });
        }
    }
}