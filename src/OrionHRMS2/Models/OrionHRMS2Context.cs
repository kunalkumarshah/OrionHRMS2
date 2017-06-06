using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace OrionHRMS2.Models
{
    public partial class OrionHRMS2Context : DbContext
    {
        public virtual DbSet<City> DicCity { get; set; }
        public virtual DbSet<Country> DicCountry { get; set; }
        public virtual DbSet<Designation> DicDesignation { get; set; }
        public virtual DbSet<Location> DicLocation { get; set; }
        public virtual DbSet<Region> DicRegion { get; set; }
        public virtual DbSet<StateOrProvince> DicStateOrProvince { get; set; }

        // Unable to generate entity type for table 'dbo.EmployeeMaster'. Please see the warning messages.

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            #warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
            optionsBuilder.UseSqlServer(@"Server=kunals\sql2014;Database=OrionHRMS2;Trusted_Connection=True;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<City>(entity =>
            {
                entity.HasKey(e => e.CityId)
                    .HasName("PK_dicCity");

                entity.ToTable("dicCity");

                entity.Property(e => e.CityId).HasColumnName("CityID");

                entity.Property(e => e.CityName)
                    .IsRequired()
                    .HasColumnType("varchar(255)");

                entity.Property(e => e.CountryId).HasColumnName("CountryID");

                entity.HasOne(d => d.Country)
                    .WithMany(p => p.DicCity)
                    .HasForeignKey(d => d.CountryId)
                    .HasConstraintName("FK_perCity");
            });

            modelBuilder.Entity<Country>(entity =>
            {
                entity.HasKey(e => e.Id)
                    .HasName("PK_dicCountry");
                entity.Ignore(e => e.ParentId);
                entity.ToTable("dicCountry");

                entity.Property(e => e.Id).HasColumnName("CountryID");

                entity.Property(e => e.CountryName)
                    .IsRequired()
                    .HasColumnType("varchar(255)");

                entity.Property(e => e.RegionId).HasColumnName("RegionID");

                entity.HasOne(d => d.Region)
                    .WithMany(p => p.DicCountry)
                    .HasForeignKey(d => d.RegionId)
                    .HasConstraintName("FK_perCountry");
            });

            modelBuilder.Entity<Designation>(entity =>
            {
                entity.HasKey(e => e.DesignationId)
                    .HasName("PK_dicDesignation");

                entity.ToTable("dicDesignation");

                entity.Property(e => e.DesignationId).HasColumnName("DesignationID");

                entity.Property(e => e.DesignationName)
                    .IsRequired()
                    .HasColumnType("varchar(255)");

                entity.Property(e => e.Responsibilities).HasColumnType("varchar(255)");
            });

            modelBuilder.Entity<Location>(entity =>
            {
                entity.HasKey(e => e.LocationId)
                    .HasName("PK_dicLocation");

                entity.ToTable("dicLocation");

                entity.Property(e => e.LocationId).HasColumnName("LocationID");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasColumnType("varchar(255)");

                entity.Property(e => e.CityId).HasColumnName("CityID");

                entity.Property(e => e.CountryId).HasColumnName("CountryID");

                entity.Property(e => e.StateOrProvinceId).HasColumnName("StateOrProvinceID");

                entity.HasOne(d => d.Country)
                    .WithMany(p => p.DicLocation)
                    .HasForeignKey(d => d.CountryId)
                    .HasConstraintName("FK_perLocation");
            });

            modelBuilder.Entity<Region>(entity =>
            {
                entity.HasKey(e => e.RegionId)
                    .HasName("PK_dicRegion");

                entity.ToTable("dicRegion");

                entity.Property(e => e.RegionId).HasColumnName("RegionID");

                entity.Property(e => e.RegionName)
                    .IsRequired()
                    .HasColumnType("varchar(255)");
            });

            modelBuilder.Entity<StateOrProvince>(entity =>
            {
                entity.HasKey(e => e.StateOrProvinceId)
                    .HasName("PK_dicStateOrProvince");

                entity.ToTable("dicStateOrProvince");

                entity.Property(e => e.StateOrProvinceId).HasColumnName("StateOrProvinceID");

                entity.Property(e => e.CountryId).HasColumnName("CountryID");

                entity.Property(e => e.StateOrProvinceName)
                    .IsRequired()
                    .HasColumnType("varchar(255)");

                entity.HasOne(d => d.Country)
                    .WithMany(p => p.DicStateOrProvince)
                    .HasForeignKey(d => d.CountryId)
                    .HasConstraintName("FK_perStateOrProvince");
            });
        }
        
    }
}