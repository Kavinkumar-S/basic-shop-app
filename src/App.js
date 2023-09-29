import Cart from './component/Cart';
import Home from './component/Home';
import Product from './component/Prouduct';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {


  return (
   <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart/>} />
        
      </Routes>
    </BrowserRouter>
   </>
    );
}

export default App;
