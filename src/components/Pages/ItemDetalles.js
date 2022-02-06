import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Navbar from "../Navbar";
import './ItemDetalles.css'
import { useNavigate } from "react-router-dom";




const ItemDetalles=()=> {
  const { productosId }=  useParams()
  const [product, setProduct] = useState();
  let navigate1 = useNavigate()
  const IrAProductos=()=>{
   navigate1("/Productos")
  };

  useEffect(()=>{
      const URL = `http://localhost:3001/productos/${productosId}`;
      fetch(URL).then((res)=> res.json())
                .then((data)=> setProduct(data));

  },[productosId]);
   
  if (product) {
      console.log(product)
    return (
      <>    
      <header className="App-header1">
        <h1>VINOTECA OVIEDO</h1>
        <Navbar />  
      </header>
      <div className="itemIndividual1">
            <h3>{product.producto}</h3>
            <img src={product.img} alt={product.productos} className='img1'/>           
            <p>Precio: ${product.precio}</p>
            <h5>Stock:{product.stock}</h5>
            <button onClick={IrAProductos}className="btn btn-info">CERRAR</button>
      </div>
      
      </>     
    )
    }return null
    
  }
  export default ItemDetalles;