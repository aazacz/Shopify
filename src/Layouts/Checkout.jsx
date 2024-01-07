// CheckoutPage.jsx

import React,{useContext} from 'react';
import { addedItemsContext } from '../Pages/Home';


const CheckoutPage = () => {
    const addedItemscontext = useContext(addedItemsContext);
    const { cartItems, setcartItems } = addedItemscontext




  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.addNumber * item.price;
    }, 0);
  };

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
    </div>
  );
};

export default CheckoutPage;
