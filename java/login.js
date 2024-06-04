let intentosFallidos = 0;

function validar() {
    let correo = document.getElementById("gmail").value.trim();
    let contraseña = document.getElementById("n2").value.trim();
    let usuario = document.getElementById("n3").value.trim();
    console.log(correo + " " + contraseña);
    const correoCorrecto = "admin@gmail.com";
    const contraseñaCorrecta = "123";
    const usuarioCorrecto = "admin";

    if (correo === correoCorrecto && contraseña === contraseñaCorrecta && usuario === usuarioCorrecto) {
        document.getElementById('res1').innerHTML = "Inicio de sesión correcto";
        window.location.href = 'index.html';
        console.log("entro");
    } else {
        intentosFallidos++;
        if (intentosFallidos >= 3) {
            document.getElementById('res1').innerHTML = "Demasiados intentos fallidos. Espere 10 segundos.";
            document.getElementById("iniciarSesionBtn").disabled = true;

            setTimeout(() => {
                document.getElementById('res1').innerHTML = "";
                document.getElementById("iniciarSesionBtn").disabled = false;
                intentosFallidos = 0;
            }, 10000);
        } else {
            document.getElementById('res1').innerHTML = "Correo electrónico o contraseña incorrecta o usuario";
        }
    }
}
