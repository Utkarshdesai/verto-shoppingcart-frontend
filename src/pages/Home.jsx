import React from 'react'
import { useEffect, useState } from "react"
import { Loader } from '../component/Loader'
import { ProductCard } from '../component/ProductCard'


const Home = ({addToCart ,cart}) => {
  
    const [productdata ,setproductdata] = useState([])
    const [loading , setloading] = useState(false) 

    const Getproductdata = async () => {
           try {
               
               setloading(true)
               const data = await fetch('https://verto-backend-tv7u.onrender.com/api/v1/product')
               const res = await data.json()
               console.log(res)
               setproductdata(res.products) 
                    

           } catch (error) {
               console.log(error)
               setproductdata([])
           }

           setloading(false)  
    }

   useEffect(() => {
         Getproductdata()
   },[]) 

  return (
    <> 
      
       {  
       loading ? 
         <Loader/>
       : (productdata.length > 0)  ?  

        ( <div className='grid xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'>
           {
            productdata.map( (item )=>  
            <ProductCard 
              addToCart = {addToCart}
              cart = {cart}
              item = {item} key={item.id}  >
            </ProductCard> 
            ) 
           }
          </div>
        )
            :  ( 
                 <div className='flex justify-center items-center'> 
                          <p > No data found </p>
                         </div>
              )
        
      }
   
   
    </>
  )
}

export default Home