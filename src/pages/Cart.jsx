import toast from "react-hot-toast"
import CartProduct from "../component/CartProduct"



const Cart = ({cart , setcart}) => {

  const Addquantity = (cartitem ) => 
    {     
       
       console.log(cartitem)
       setcart( (prevcart) => {
        const existingProduct = cart.find((item) => item.id === cartitem.id);
          if (existingProduct) {
            // Increase quantity if already in cart
            return prevcart.map((item) => 
              item.id === cartitem.id ? { ...item, quantity: item.
                quantity + 1 } : item
            );
          } 

       })
       
      
    }

    const Removequantity = (cartitem) => {
     
      
      setcart( (prevcart) => {
        console.log(prevcart)
        const existingProduct = prevcart.find((item) => item.id === cartitem.id);
          console.log(existingProduct)

          if (existingProduct) {
            
            //remove product from cart 
            if(existingProduct.quantity === 0)
              {
                return prevcart.filter((item) => item.id !== cartitem.id);
              }
           
            // decrease quantity if already in cart
            return prevcart.map((item) => 

              item.id === cartitem.id ? { ...item, quantity: item.
                quantity - 1 } : item
            );
          } 

       }) 
    }
     
    //calculate totalprice for cart
    const TotalAmount = cart.reduce( (acc ,item) => {
        return acc + item.price * item.quantity  
    },0)


    const handlecheckout = async (cart) => {

        console.log(cart)

        try {
         
            const checkoutcart = await fetch('http://localhost:5000/api/v1/checkout' , {
            method:'POST',
             headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(cart)
         })

           const response = await checkoutcart.json()

           console.log(response)

           toast.success('"Order placed successfully! ')



        } catch (error) {
          
            console.log(error)  
        }
        

       
    }

   
  return (
    <div> 
 
    { //check cart legth if empty show shop more button and link to home page otherwise map through all cartitems
      cart.length > 0 ? 
      ( <div className='max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center'>

           <div className="w-[100%] md:w-[60%] flex flex-col p-2"> 
             {
                 (cart.map( (CartItem)=> 
                 <CartProduct 
                   CartItem={CartItem} 
                   key={CartItem.id} 
                   Addquantity =  {Addquantity}
                   Removequantity = {Removequantity}
                   
                   > 
                  </CartProduct>) ) 
             }
           </div>

            <div  className='"w-[100%] md:w-[40%] mt-5 flex flex-col p-5 gap-5 my-14 h-[100%] justify-between'>
                  <div> 
                    <p className="font-semibold text-xl text-green-800 ">  Your CART  </p> 
                  </div>

                  <div className='mb-2'>
                    <h1 className="font-semibold text-5xl text-green-700 -mt-5"> SUMMARY </h1>
                  </div>

                  <div>
                   <p className="text-xl font-bold" >  <span className="text-gray-700 font-semibold"> Total amount : </span> {TotalAmount.toFixed(2)} </p> 
                  </div>

                  <div>
                     <button 
                        className='bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-2 px-6 
                            rounded-lg uppercase transition-colors duration-200 shadow-md hover:shadow-lg 
                            active:scale-95 transform'
                      onClick={()=>handlecheckout(cart)}> Checkout </button>
                  </div>

               </div>

          

      </div>) 
      
  : 
       (<div className='min-h-[80vh] flex flex-col items-center justify-center'> 
         
         <div> 
          <p className='text-gray-700 font-semibold text-xl mb-2'> No cart Found </p> 
          
          </div> 

            

       </div>)
    }
  
</div>
  )
}

export default Cart