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
    if(nombre != /\d+/ || apellido != /\d+/){
      retorno = false;
      alert("El nombre o apellido posee algún número");
    }

    console.log(nombre+apellido+mensaje+selectPais);
    return false; /** return retorno; para que no recargue la página al dar submit */
  }
  