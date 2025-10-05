import React from 'react'




export const ProductCard = ({item , addToCart}) => {

    return (
    <div className="flex flex-col items-center justify-between 
     p-4 mt-10 ml-5 rounded-xl  shadow-lg hover:shadow-gray-800">
    
      <div className='h-[180px]'>  
      <img src={item.imageUrl} alt='card-image' className="h-full w-full"/>
      </div>

        <div> 
        <p className='text-gray-700 font-semibold text-lg text-center truncate w-40 mt-1'> {item.name}  </p> 
        </div>

          
       <div className='flex justify-center items-center gap-12  w-full mt-5'> 
         <p className='text-green-600 font-semibold'> {`${item.price}`} </p> 
        </div>

          <button 
            className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
            text-[12px] p-1 px-3 uppercase 
            hover:bg-gray-700
            hover:text-white transition duration-300 ease-in'
           onClick={() => addToCart(item)}
       >
          Add to Cart
    </button>
        
       
       
    </div>
  )
}