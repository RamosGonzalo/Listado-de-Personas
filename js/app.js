const personas = [
    new Persona('Gonzalo', 'Ramos')
];

function mostrarPersonas()
{
    console.log('Mostrar personas...');
    let texto = '';
    for (let persona of personas) 
    {
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona()
{
    const form = document.forms['form'];
    const nombre = form['nombre'];
    const apellido = form['apellido'];
    if(nombre.value != '' && apellido.value != '')
    {
        const persona = new Persona(nombre.value, apellido.value);
        console.log(persona);
        personas.push(persona);
        mostrarPersonas();
    }
    else
    {
        console.log('No hay información que agregar');
    }
}