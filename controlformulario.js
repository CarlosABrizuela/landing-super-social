function validacion(e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    alert(nombre);
    return false; /** para que no recargue la página al dar submit */
  }
  