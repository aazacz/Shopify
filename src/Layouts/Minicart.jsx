import React, { useContext, useEffect ,useReducer } from 'react'
import { IoMdClose } from "react-icons/io";
import { addedItemsContext } from '../Pages/Home';
import { useNavigate } from 'react-router-dom';

function reducer(state, action) {

    if (action.type == "INCREASE") {
               console.log("state")
               console.log(state)
        const updatedState =  state.map(item => {
                  
            if (item.id === parseInt(action.itemId, 10)) {
            return {  ...item, addNumber: item.addNumber + 1 }
            }
            return item;
          })
        
          return updatedState;
       
      
    } else if (action.type === "DECREASE") {
      if (state.addNumber == 1) {
         return state
      }
      return (state.map(item => {
        if (item.id === parseInt(action.itemId, 10) && item.addNumber > 1) {
          return {
            ...item,
            addNumber: item.addNumber - 1
          };
        }
        return item;
      }))
    }
    }




const Minicart = ({ addeditems, removeItem }) => {
   const navigate =useNavigate()
    
    const addedItemscontext = useContext(addedItemsContext);
    const { cartItems, setcartItems } = addedItemscontext
    
    const [state, dispatch] = useReducer(reducer, cartItems);

    useEffect(() => {
     
        setcartItems((prevCartItems) => {
             return state.map((item) => {
                      return item;    });
        });
      }, [state])


   
    const handleIncrease = (itemId) => {
           dispatch({ type: "INCREASE", itemId: itemId });
           };

    const handleDecrease = (itemId) => {
           dispatch({ type: "DECREASE", itemId: itemId });
           };


   const total = cartItems.reduce((pre, cur) => {
             return pre + Number(cur.addNumber) * Number(cur.price)
           }, 0) .toFixed(2);



function removeItem(item) {
    console.log("remove  item clicked");
    const newItems = cartItems.filter((addedItem) => addedItem.id !== item.id);
    setcartItems(newItems);
  }



    return (
        
        <div className='fixed z-50 w-[350px] h-[550px] px-3 pb-4 outline  top-20 right-3 flex flex-col items-center justify-between bg-white '>

<div className='w-full'> 
            <div className='w-full h-auto flex justify-between py-4 ' >
                <span className='text-xl '>My Order</span>    <span><IoMdClose /></span>
            </div>

    

            {cartItems.length > 0 ?
                (cartItems.map((items, index) => {
                    {console.log(cartItems)}
                    return (

                        <div key={index} className='w-full  h-[100px] flex shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]'>

                            <div className='w-full h-auto flex '>
                                <div className='w-[100px] h-[100px]'>
                                    <img src={items.images} className='w-[100px] h-[100px] object-cover' alt="Default" />

                                </div>

                                <div className='w-auto pl-3'>
                                    <h5>{items.title}</h5>
                                    <h5>{items.price}</h5>
                                    <div className='flex gap-3'>                      
                                        <button type="button" className='w-[30px] h-[30px] bg-orange-800 text-2xl flex items-center justify-center'  onClick={() => handleDecrease(`${items.id}`) } >-</button>
                                        <div className='w-[30px] h-[30px] bg-slate-300 text-2xl  flex items-center justify-center'>{items.addNumber}</div>
                                        <button type="button" className='w-[30px] h-[30px] text-2xl bg-green-400' onClick={() => handleIncrease(`${items.id}`) } >

                                                                                                        + </button>
                                    </div>
                                </div>
                            </div>


                            <div className='h-full flex items-center' >
                                <IoMdClose onClick={()=>removeItem(items)} />
                            </div>


                        </div>
                    )
                })) : <h3 className='text-black '>Cart Is Empty</h3>}
</div>
            {cartItems.length > 0 ? <div className='w-full mt-6 h-auto flex items-center justify-center'>
                <div className='w-full flex justify-between'>
<h4>Total</h4>
<h4>  ${total}</h4>
                </div>
                <button type='button' className='w-auto px-8 bg-red-700 rounded-xl text-white py-2' onClick={()=>navigate('/checkout',{replace:true})} >CheckOut</button>
            </div> : <></>}

        </div>
    )
}

export default Minicart