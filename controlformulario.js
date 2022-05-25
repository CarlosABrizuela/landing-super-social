function validacion(e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const mensaje = document.getElementById("mensaje").value;
    const selectPais = document.getElementById("pais").value;
    let retorno = true;

    /* limitar campos */
    if(nombre.length > 50 || apellido > 50){
      retorno = false;
      alert("nombre o apellido más largo de lo permitido");
    }
    else if(mensaje.length > 500){
      retorno = false;
      alert("mensaje más largo de lo permitido");
    }
    /* Validar que no se ingresen numeros en campos */
    if(/\d+/i.test(nombre) || /\d+/i.test(apellido)){
      retorno = false;
      alert("El nombre o apellido posee algún número");
    }

    if(retorno){
	alert(`Mensaje enviado. -> Nombre: ${nombre}, Apellido: ${apellido}, pais: ${selectPais}, Mensaje: ${mensaje}`);
    }
    return false;
  }
  