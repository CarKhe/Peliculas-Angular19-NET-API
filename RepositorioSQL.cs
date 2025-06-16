using PeliculasAPI.Entidades;

namespace PeliculasAPI
{
    public class RepositorioSQL : IRepositorio
    {
        public List<Genero> GetAllGeneros()
        {
            throw new NotImplementedException();
        }

        public Task<Genero?> GetOne(int id)
        {
            throw new NotImplementedException();
        }

        public bool IsExist(string nombre)
        {
            throw new NotImplementedException();
        }
    }
}
