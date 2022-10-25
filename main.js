function nombreUsuario(){
    nombre=document.getElementById('nombre_usuario').value;
    const list = document.getElementById("msg_bienvenida");
    list.innerHTML = `BIENVENIDO(A) `+nombre;
}