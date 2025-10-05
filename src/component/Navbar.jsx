import React from 'react'
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div>
<div className="">
      <nav className="flex justify-between items-center h-20 max-w-6xl 
      mx-auto">
      <div className=" ml-5">
          <Link to="/">
              <div>
              <img src={logo} className=" h-14"/>
              </div>
          </Link>
      </div>

        <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
          <Link to='/'>
            <p className="cursor-pointer hover:text-green-400 transition duration-300 ease-in"> Home </p>
          </Link>
        

         <div className='relative'>
          <Link to="/cart">
           <ShoppingCart/>
        </Link>
         </div>

         </div>  

      </nav>
    </div>




    </div>
  )
}

export default Navbar