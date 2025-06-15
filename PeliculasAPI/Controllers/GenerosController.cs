using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OutputCaching;
using PeliculasAPI.Entidades;

namespace PeliculasAPI.Controllers
{
    [ApiController] //Especificar que es API controller
    [Route("api/[controller]")] //Ruta que tendra mi Controlador el uso del [controller] es para especificar el tipo sin
    //el controller de la clase
    public class GenerosController: ControllerBase
    {
        [HttpGet] //Tipo de Metodo HTTP  aqui es "api/generos"
        [HttpGet("Listado")] // "api/generos/Listado"
        [HttpGet("/Listado-generos")] // "Listado-generos"
        public List<Genero> Get()
        {
            return new RepositorioPrueba().GetAllGeneros();
        }

        [HttpGet("{id:int}/{nombre?}")]//Sub ruteo que permite utilizar 2 Metodos distintos aqui es "api/generos/1/Roberto el ? es por valor default"
        public async Task<Genero?> GetOne(int id, string nombre = "Roberto") 
        {
            return await new RepositorioPrueba().GetOne(id);
        }

        [HttpGet("{id:int}")]
        [OutputCache] //Asignar que se utilizara cache en esta funcion
        public async  Task<ActionResult<Genero>> GetOne404(int id)
        {
            var repo = new RepositorioPrueba();
            var genero = await repo.GetOne(id);
            if (genero is null)
            {
                return NotFound();
            }
            return genero;
        }

        //[HttpGet("{id:int}")]
        //public IActionResult GetOk(int id)
        //{
        //    var genero = new RepositorioPrueba().GetOne(id);
        //    if (genero is null)
        //    {
        //        return NotFound();
        //    }
        //    return Ok(genero);
        //}


        [HttpPost]
        public void Post([FromBody]Genero genero) //Frombody para que no se vena los parametros en la url del api
        {
            
        }

        [HttpPut]
        public void Put() 
        {
            
        }

        [HttpDelete]
        public void Delete() 
        {

        }
    }
}
