
const handleError = (error) => {
  console.error("Error:", error);
  throw new Error("Ha ocurrido un error. Por favor, inténtalo nuevamente más tarde.");
};

  
  const consultarProductos = () => {
    return fetch("http://localhost:3000/categorias?_embed=productos")
      .then((respuesta) => respuesta.json())
      .catch(handleError);
  };
  
  const consultarCategorias = () => {
    return fetch("http://localhost:3000/categorias")
      .then((respuesta) => respuesta.json())
      .catch(handleError);
  };
  
  const crearProducto = (producto) => {
    return fetch("http://localhost:3000/productos", {
      method: "POST",
      body: JSON.stringify(producto),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((respuesta) => respuesta.json())
      .catch(handleError);
  };
  
  const editarProducto = (id, producto) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
      method: "PUT",
      body: JSON.stringify(producto),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((respuesta) => respuesta.json())
      .catch(handleError);
  };
  
  const consultarProductoPorId = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`)
      .then((respuesta) => respuesta.json())
      .catch(handleError);
  };
  const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
      method: "DELETE",
    
  })
  };
  
  export const serviciosProductos = {
    consultarProductos,
    consultarCategorias,
    crearProducto,
    editarProducto,
    consultarProductoPorId,
    eliminarProducto,
  };
  

  
  


