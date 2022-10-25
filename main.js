function nombreUsuario(){
    nombre=document.getElementById('nombre_usuario').value;
    const list = document.getElementById("msg_bienvenida");
    list.innerHTML = `BIENVENIDO(A) <span id="txt_name">`+nombre+`</span>`;
}

function conversion(){
    bs=document.getElementById('boliviano').value;
    dolar=document.getElementById('dolar').value;
    var calcular;
    if(bs){
        calcular=parseFloat(bs)/6.96;
        document.getElementById("dolar").value = calcular;
    }else if(dolar){
        calcular=parseFloat(dolar)*6.96;
        document.getElementById("boliviano").value = calcular;
    }
}

function limpiar(campo){
    if(campo=='bs'){
        document.getElementById("dolar").value = "";
    }else if(campo=='sus'){
        document.getElementById("boliviano").value = "";
    }
}