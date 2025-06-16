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
        private readonly IRepositorio repositorio;
        private readonly ServicioTransient transient;
        private readonly ServicioTransient transient2;
        private readonly ServicioScoped scoped;
        private readonly ServicioScoped scoped2;
        private readonly ServicioSingleton singleton;

        public GenerosController(IRepositorio repositorio,
            ServicioTransient transient,
            ServicioTransient transient2,
            ServicioScoped scoped,
            ServicioScoped scoped2,
            ServicioSingleton singleton)
        {
            //Se crea dentro del constructor el repositorio, en este caso puede ser la conexion a la bd
            this.repositorio = repositorio;
            this.transient = transient;
            this.transient2 = transient2;
            this.scoped = scoped;
            this.scoped2 = scoped2;
            this.singleton = singleton;
        }

        [HttpGet("TiemposVida")]
        public IActionResult GetTiempoVida() 
        {
            return Ok(new
            {
                Transients = new { transient = transient.GetGuid, transient2 = transient2.GetGuid },
                Scopeds = new { scoped = scoped.GetGuid, scoped2 = scoped2.GetGuid },
                Singleton  = singleton.GetGuid
            });
        }

        [HttpGet] //Tipo de Metodo HTTP  aqui es "api/generos"
        [HttpGet("Listado")] // "api/generos/Listado"
        [HttpGet("/Listado-generos")] // "Listado-generos"
        public List<Genero> Get()
        {
            return repositorio.GetAllGeneros();
        }

        [HttpGet("{id:int}/{nombre?}")]//Sub ruteo que permite utilizar 2 Metodos distintos aqui es "api/generos/1/Roberto el ? es por valor default"
        public async Task<Genero?> GetOne(int id, string nombre = "Roberto") 
        {
            return await repositorio.GetOne(id);
        }

        [HttpGet("{id:int}")]
        [OutputCache] //Asignar que se utilizara cache en esta funcion
        public async  Task<ActionResult<Genero>> GetOne404(int id)
        {
            
            var genero = await repositorio.GetOne(id);
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
        public IActionResult Post([FromBody]Genero genero) //Frombody para que no se vena los parametros en la url del api
        {
            if (repositorio.IsExist(genero.Nombre)) return BadRequest($"Genero ya existe el genero {genero.Nombre}");
            return Ok();
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
