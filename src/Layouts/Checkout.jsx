import React,{useContext} from 'react';
import { addedItemsContext } from '../Pages/Home';
import toast from 'react-hot-toast';
import { MyOrderContext } from '../App';
import { useNavigate } from 'react-router-dom';
const CheckoutPage = () => {
    const navigate = useNavigate()
    const addedItemscontext = useContext(addedItemsContext);
    const { cartItems, setcartItems } = addedItemscontext


    const myOrderContext = useContext(MyOrderContext)
    const {MyOrder, setMyOrder} = myOrderContext

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.addNumber * item.price;
    }, 0);
  };

  const HandleCheckout=()=>{

console.log("Checkout started");
    if(cartItems.length>0){
        setMyOrder(cartItems)
        toast.success("Your Order Has Been Success")
        navigate('/',{replace:true})
    }
   
  }
  return (
    <div className="container mx-auto mt-10">
      <div className="flex justify-center">
        <div className="w-full max-w-xl">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-bold mb-6">Checkout</h2>

            {cartItems.map((item) => (
              <div key={item.id} className="flex mb-4">
                <div className="w-1/4">
                  <img src={item.images[0]} alt={item.title} className="w-full h-auto" />
                </div>
                <div className="w-3/4 px-4">
                  <p className="text-lg font-bold mb-2">{item.title}</p>
                  <p className="text-gray-700 mb-2">Quantity: {item.addNumber}</p>
                  <p className="text-gray-700 mb-2">Price: ${item.price}</p>
                </div>
              </div>
            ))}

            <div className="mt-4 border-t pt-4">
              <p className="text-lg font-bold">Total: ${calculateTotal().toFixed(2)}</p>
            </div>

            {/* Add checkout form fields, payment details, etc. here */}
            {/* For simplicity, let's skip those details in this example */}
          </div>
        </div>
      </div>
      <div className='w-fuil h-11 flex items-center justify-center'>

       <button type='button' className='w-auto px-7 py-2 bg-red-700 text-white rounded-2xl' 
       onClick={()=>HandleCheckout()}> Finish</button>
      </div>
    </div>
  );
};

export default CheckoutPage;
