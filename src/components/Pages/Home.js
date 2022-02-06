import Navbar from "../Navbar";
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate()
   const IrAProductos=()=>{
    navigate("/productos")
   };
    return (
      <>    
      <header className="App-header1">
        <h1>VINOTECA OVIEDO</h1>
        <Navbar />              
      </header>
      <article>
        <div className="frente"> 
            <div>        
                <button className="btn1" onClick={IrAProductos}>TIENDA</button> 
            </div>  
                       
        </div>
      </article>
      
      </>     
    )
    
  }
  
  
  export default Home;
  