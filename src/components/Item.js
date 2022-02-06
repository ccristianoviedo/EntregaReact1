import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';

import './Item.css'


let contenedor=[]

//Funciones
function  detalle (e) {
  let hijo = e.target
  let padre = hijo.parentNode
  

  let nombreProducto = padre.querySelector('h1').textContent;
  let imagen = padre.querySelector('img').src;
  let descripcion = padre.querySelector('p').textContent;
  let precio = padre. querySelector('h2').textContent;
  let stock = padre. querySelector('h5').textContent;

   
  const producto ={
    nombre:nombreProducto,
    imagen:imagen,
    descripcion:descripcion,
    precio:precio,
    stock:stock,
  }
  contenedor.push({producto})
  
  mostrarContenedor({producto})
}

function mostrarContenedor({producto}) {
  
  let verDetalle = document.createElement('div');
  verDetalle.classList.add('itemDetalles2')
  verDetalle.innerHTML = `<h1 className='title'>${producto.nombre}</h1>
                    <img src=${producto.imagen}  />
                    <p>Descripcion:${producto.descripcion}</p>
                    <h2>Precio: $${producto.precio}</h2>  
                    <h5>${producto.stock}</h5>  
                    <td><button class="btnEliminar"> CERRAR </button></td>     
                                
                    `
  let tbody = document.querySelector('.tbody');
  tbody.appendChild(verDetalle);
  verDetalle.querySelector('.btnEliminar').addEventListener('click', eliminar)
}

function eliminar(e) {
  let btnEliminar = e.target;
  let btnX = btnEliminar.closest('.itemDetalles2');
  const title = btnX.querySelectorAll('.title').textContent;
  for(let i=0; i<contenedor.length ; i++){
    if(contenedor[i].title === title){
      contenedor.splice(i, 1)
    }
  }
   
  btnX.remove();  
}

       
const Items = ({productos})=> {
  const [counter, setCounter] = useState(1);
  const navigate=useNavigate()
    
    
    const contar = () => {
      setCounter(counter + 1);
      
    }
    const restar = () => {
      setCounter(counter - 1);    
    }
    const reset = () =>  {
      setCounter (0);
    }
    if (counter>=1){
      console.log(productos)
      if (productos.stock>=1){
          return (
            <div className="itemIndividual">
              <img src={productos.img} alt={productos.productos}/>
              <h3>{productos.producto}</h3>
              <p>Precio: ${productos.precio}</p>
              <h5>Stock:{productos.stock}</h5>
              <button className='btn btn-warning'onClick={detalle}>AMPLIAR</button>
              <button className='btn btn-warning'onClick={()=> navigate(`/productos/${productos.id}`)}>VER MAS</button>
              <br/>
              <br/>
              <div className='producto'>
                  <br/>                    
                    <input type="submit" min="1" value={counter} />
                    <br/>
                    <br/>
                    <button type='button' className=' btn btn-info' onClick={contar}>COMPRAR</button>
                    <br/>
                    <button type='button' className=' btn btn-info' onClick={restar}>RESTAR</button>
                    <br/>
                    <button type='button' className=' btn btn-info' onClick={reset}>ANULAR</button>
                    
              </div>      
              <main className='tbody'></main>
              <div className='itemDetalles3'>
                <h1>{productos.producto}</h1>
                      <img src={productos.img} alt={productos.productos} />
                      <p>Descripcion:{productos.descripcion}</p>
                      <h2>{productos.precio}</h2>
                      <h5>Stock:{productos.stock}</h5>                                                        
              </div>      
            </div>              
          )
      }  
  }
  else if (counter<1){
    return (
        <div className="itemIndividual">
          <img src={productos.img} alt={productos.productos} />
          <h3>{productos.producto}</h3>
          <p>Precio: ${productos.precio}</p>
          <h5>Stock:{productos.stock}</h5>
          <button className='btn btn-warning'onClick={detalle}>Detalles</button>
          <button className='btn btn-warning'onClick={detalle}>VER MAS</button>
          <br/>
          <br/>
            <div className='producto'>                  
              <input type="submit" min="1" value={counter} />
              <br/>
              <br/>
              <button type='button' className=' btn btn-danger' onClick={contar}>COMPRAR</button>     
            </div>            
          <main className='tbody'></main>
          <div className='itemDetalles3'>
            <h1>{productos.producto}</h1>
                  <img src={productos.img} alt={productos.productos} />
                  <p>Descripcion:{productos.descripcion}</p>
                  <h2>{productos.precio}</h2>
                  <h5>Stock:{productos.stock}</h5>                                                        
          </div>      
        </div>
    )
  }
  else (productos.stock=0)
  return (
    <div className="itemIndividual">
      <img src={productos.img} alt={productos.productos} />
      <h3>{productos.producto}</h3>
      <p>Precio: ${productos.precio}</p>
      <h5>Stock:{productos.stock}</h5>
      <button className='btn btn-warning'onClick={detalle}>Detalles</button>
      <button className='btn btn-warning'onClick={detalle}>VER MAS</button>
      <br/>
      <br/>
        <h3>No hay Stock</h3>          
      <main className='tbody'></main>
      <div className='itemDetalles3'>
        <h1>{productos.producto}</h1>
              <img src={productos.img} alt={productos.productos} />
              <p>Descripcion:{productos.descripcion}</p>
              <h2>{productos.precio}</h2>
              <h5>Stock:{productos.stock}</h5>                                                        
      </div>      
    </div>
)
    
                     
} 
           
      
  

export default Items;