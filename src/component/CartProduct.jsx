import React from 'react'

const CartProduct= ({CartItem ,Addquantity ,Removequantity}) => {

   
    


  return (
    <div className='flex items-center p-2 md:p-5 justify-between border-b-2 border-slate-500  mt-2 mb-2 md:mx-5 '>
    <div className='flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center'>
      <div className='w-[30%]'>
          <img className=' object-cover' src={CartItem.imageUrl}/>
        </div>
        <div className='md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]'>
          <h1 className='text-xl text-slate-700 font-semibold'>
            {CartItem.title} 
          </h1>
          <p className='text-base text-slate-700 font-medium'>
            {`Quantity : ${CartItem.quantity}`}
          </p>

          <div className='flex justify-between'>
          <button 
              className="text-white bg-green-600 rounded-md font-medium 
              text-sm p-2 px-4 "
                onClick ={() => Addquantity(CartItem)}>
                   Add
          </button> 

          <button 
              className="text-white bg-red-600 rounded-md font-medium 
              text-sm p-2 px-4 "
                onClick ={() => Removequantity(CartItem)}> Remove </button>
          </div>
         
          <div className='flex items-center justify-between'>
            <p className='font-bold text-lg text-green-600'>{`Price : ${CartItem.price}`}</p>
           
          </div>
        </div>
    </div>
  </div>
  )
}

export default CartProduct