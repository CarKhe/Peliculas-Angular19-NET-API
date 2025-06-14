using PeliculasAPI.Entidades;

namespace PeliculasAPI
{
    public class RepositorioPrueba
    {
        private List<Genero> _generos;

        public RepositorioPrueba()
        {
            _generos = new List<Genero>
            {
                new Genero { Id = 1, Nombre = "Comedia" },
                new Genero { Id = 2, Nombre = "Accion" },
                new Genero { Id = 3, Nombre = "Drama" }
            };
        }

        public List<Genero> GetAllGeneros() 
        {
            return _generos;
        }

        public Genero? GetOne(int id) 
        { 
            return _generos.FirstOrDefault(o => o.Id == id);
        }
    }
}
