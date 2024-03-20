using CDN_Assessment.Server.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace CDN_Assessment.Server.Data
{
    public class AppDbContext: DbContext
    {
        protected readonly IConfiguration Configuration;

        public AppDbContext(IConfiguration configuration)
        {
            // Configuring Configuration to be accesible through dependency injection
            Configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            // Connect to postgres DB with the connection string form the app settings
            options.UseNpgsql(Configuration.GetConnectionString("DbConnection"));
        }

        public DbSet<User> Users { get; set; }

    }
}
