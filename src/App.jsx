import './App.css'
import { useState ,useEffect } from 'react';
import { Routes ,Route } from "react-router-dom";
import Cart from './pages/Cart';
import Home from './pages/Home';
import Navbar from './component/Navbar';
import toast from 'react-hot-toast';
import Notfoundpage from './pages/Notfoundpage';



toast

function App() {
  
  const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
  const [cart, setcart] = useState(savedCart); 
 
  //add product to cart 
  const addToCart = (product) => {
  const existingItem = cart.find(item => item.id === product.id);
  
  if (existingItem) {
    // If already in cart, increase quantity
      const updatedCart = cart.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setcart(updatedCart);

   toast.success('Product is added to cart') 
  
  } 
  else {
    // If new product, add to cart with quantity 1
    setcart([...cart, { ...product, quantity: 1 }]);
  }
 };

  useEffect(()=>{
    localStorage.setItem('cart' , JSON.stringify(cart))
  },[cart])
 

  
  return (
    
  <div>
    <div className="bg-slate-900"> 
    <Navbar/>

    </div>
      
   <Routes>
    <Route path="/" element={<Home addToCart={addToCart} > </Home>}></Route>
    <Route path="/cart" element={<Cart cart = {cart} setcart ={setcart}>  </Cart>}></Route>
    <Route></Route>
     {/* NOt found route */}
      <Route path='*' element={<Notfoundpage></Notfoundpage>} />
   </Routes>
  </div>
    
  )
}

export default App
