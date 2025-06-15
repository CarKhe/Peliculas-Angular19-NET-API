using System.ComponentModel.DataAnnotations;

namespace PeliculasAPI.Entidades
{
    public class Genero
    {
        [Required]
        public  int Id { get; set; }
        
        [Required]
        public required string Nombre { get; set; }

    }
}
