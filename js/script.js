document.getElementById("formulario").addEventListener("submit", function(e){
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let mensaje = document.getElementById("mensaje").value;

    let texto = `Hola Jpturizo, soy ${nombre}. Mi email es ${email} y mi teléfono es ${telefono}. ${mensaje}`;
    let numero = "573022210307";

    let url = `https://wa.me/${573022210307}?text=${encodeURIComponent(texto)}`;

    window.location.href = url;

    document.getElementById("formulario").reset();
});




