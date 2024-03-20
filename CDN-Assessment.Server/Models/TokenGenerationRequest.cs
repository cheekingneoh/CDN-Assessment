using System.ComponentModel.DataAnnotations;

namespace CDN_Assessment.Server.Models
{
    public class TokenGenerationRequest
    {
        [Required]
        [EmailAddress]
        public String Email { get; set; }
    }
}
