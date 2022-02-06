import ItemPrincipal from "../ItemPrincipal";
import Navbar from "../Navbar";
import './Productos.css'



function Productos() {
   
    return (
      <>    
      <header className="App-header1">
        <h1>VINOTECA OVIEDO</h1>
        <Navbar />    
      </header>
      <main className="productosMain">
        <ItemPrincipal />
      </main>
      
      </>     
    )
    
  }
  
  
  export default Productos;
  