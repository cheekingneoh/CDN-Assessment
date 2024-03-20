using System.ComponentModel.DataAnnotations;

namespace CDN_Assessment.Server.Models
{
    public class User
    {
        [Key]
        [Required]
        public String Username { get; set; }
        
        [Required]
        [EmailAddress]
        public String Mail { get; set; }

        [Required]
        public String PhoneNumber { get; set; }

        [Required]
        public String[] Skillsets { get; set; }

        [Required]
        public String Hobby { get; set; }
    }
}
