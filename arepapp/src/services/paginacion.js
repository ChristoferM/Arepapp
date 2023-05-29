import BaseUrl from "./enviroment/enviroment";

// ejemplo de prueba http://localhost:5000/products?_start=0&_limit=3
// Obtener todos los registros de una entidad con paginación
export async function getAllWithPagination(entity, page, limit) {
    const offset = (page - 1) * limit;
    const url = `${BaseUrl}/${entity}?_start=${offset}&_limit=${limit}`;
   
    return await fetch(url)
      .then(response => response.json())
      .then(data => {
        return data;
      });
  }