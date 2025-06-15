var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
//builder.Services.AddOpenApi();
builder.Services.AddEndpointsApiExplorer(); //Se agrega el end pont de la API
builder.Services.AddSwaggerGen(); //se especifica que se usara swagger


builder.Services.AddOutputCache( opciones => //Agregando el servicio de cache
{
    opciones.DefaultExpirationTimeSpan = TimeSpan.FromSeconds(15); //Tiempo asignado para el cache
});
var app = builder.Build();

//Los MiddleWare

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    //app.MapOpenApi();
    app.UseSwagger(); //Uso de Swagger
    app.UseSwaggerUI(); //Uso interfaz de swagger
}

app.UseHttpsRedirection(); //MiddleWare

app.UseOutputCache();  //MiddleWare

app.UseAuthorization(); //MiddleWare

app.MapControllers(); //MiddleWare

app.Run(); //Fin
