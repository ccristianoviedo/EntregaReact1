import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import Productos from './components/Pages/Productos';
import ItemDetalles from './components/Pages/ItemDetalles';





function App() {
   
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/">
          <Route index element={<Home />}/>
          <Route path="productos">
            <Route index element={<Productos />}/>
            <Route path=':productosId' element={<ItemDetalles />}/>
          </Route>
        </Route>
     </Routes>         
    </BrowserRouter>
  )   
}
export default App;
