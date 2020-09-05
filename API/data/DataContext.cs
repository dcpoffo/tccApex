using System;
using System.Collections.Generic;
using API.models;
using Microsoft.EntityFrameworkCore;

namespace API.data
{
     public class DataContext : DbContext
     {
          public DataContext(DbContextOptions<DataContext> options) : base(options)
          { }

          public DbSet<Produto> Produto { get; set; }
          public DbSet<Cliente> Cliente { get; set; }
          public DbSet<Problema> Problema { get; set; }
          public DbSet<NaoConformidade> NaoConformidade { get; set; }

          protected override void OnModelCreating(ModelBuilder builder)
          {
               builder.Entity<Produto>()
                   .HasData(new List<Produto>(){
                   new Produto(1, "Cabo PP Plano 3x0,50 NBR14897","Metro"),
                   new Produto(2, "Cabo PP Circular 3x0,50 NBR247","Metro"),
                   new Produto(3, "Cabo Techflex 1x0,50 NBR9117 - BR","Metro"),
                   new Produto(4, "Cabo Techflex 1x0,75 DIN - PT","Metro"),
                   });

               builder.Entity<Cliente>()
                   .HasData(new List<Cliente>(){
                   new Cliente(1, "Thor"),
                   new Cliente(2, "Howe"),
                   });

               builder.Entity<Problema>()
                   .HasData(new List<Problema>(){
                   new Problema(1, "Cabo não decapa"),
                   new Problema(2, "Diâmetro acima do especificado"),
                   new Problema(3, "Diâmetro abaixo do especificado"),
                   new Problema(4, "Cabo com tonalidade"),
                   });

               builder.Entity<NaoConformidade>()
               .HasData(new List<NaoConformidade>(){
                   new NaoConformidade(1, 10,  DateTime.Now, 1,1,1),
                   new NaoConformidade(2, 100,  DateTime.Now, 2,2,2),
                   new NaoConformidade(3, 50,  DateTime.Now, 2,3,4),
               });
          }
     }
}