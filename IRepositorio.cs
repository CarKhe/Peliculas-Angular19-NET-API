using PeliculasAPI.Entidades;

namespace PeliculasAPI
{
    public interface IRepositorio
    {
        List<Genero> GetAllGeneros();
        Task<Genero?> GetOne(int id);

        bool IsExist(string nombre);
    }
}
