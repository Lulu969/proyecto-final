function generarCorreo() {
    const nombre = document.getElementById("nombre").value.trim().split(" ");
    const apellido = document.getElementById("apellido").value.trim().split(" ");
    const fecha = document.getElementById("fecha").value;

    const primerNombre = nombre[0];
    const segundoNombre = nombre.length > 1 ? nombre[1] : primerNombre;
    const primerApellido = apellido[0];
    const segundoApellido = apellido.length > 1 ? apellido[1] : primerApellido;

    const correo = `${primerNombre.charAt(0)}${segundoNombre.charAt(0)}${segundoNombre.charAt(segundoNombre.length - 1)}${segundoApellido.charAt(segundoApellido.length - 2)}${primerApellido.slice(-3)}${fecha.substring(2, 4)}${fecha.substring(8, 10)}${fecha.substring(5, 7)}@gmail.com`;

    document.getElementById("correoGenerado").value = correo;
}
