import React,{useContext, useEffect} from 'react'
import { IoMdClose } from "react-icons/io";
import { addedItemsContext } from '../Pages/Home'; 



const Minicart = ({ addeditems, removeItem }) => {

      
  const addedItemscontext = useContext(addedItemsContext);
  const{cartItems,setcartItems} = addedItemscontext
  useEffect(() => {
    console.log(cartItems);
  

  }, [])
  

    return (
        <div className='fixed z-50 w-[350px] px-3 outline h-full  top-20 right-3 flex flex-col items-center bg-white'>

                <div className='w-full h-auto flex justify-between py-4 ' >
                    <span className='text-xl '>My Order</span>    <span><IoMdClose  /></span>
                </div>


                { cartItems.length>0 ?

(cartItems.map((items,index)=>{
    return(
       
            <div key={index} className='w-full  h-[100px] flex shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]'>

                <div className='w-full h-auto flex '>
                    <div className='w-[100px] h-[100px]'>
                        <img src={items.images} className='w-[100px] h-[100px] object-cover' alt="Default" />
                    
                      </div>
                    
                    <div className='w-auto pl-3'>
                        <h5>{items.title}</h5>
                        <h5>{items.price}</h5>
                        <div className='flex gap-3'>
                            <button type="button" className='w-[30px] h-[30px] bg-orange-800 text-2xl flex items-center justify-center' onClick={()=>items.addNumber+=1} >-</button>
                            <div className='w-[30px] h-[30px] bg-slate-300 text-2xl  flex items-center justify-center'>{items.addNumber}</div>
                            <button type="button" className='w-[30px] h-[30px] text-2xl bg-green-400'>+</button>
                        </div>
                    </div>
                </div>


                <div className='h-full flex items-center' >
                    <IoMdClose  />
                </div>


            </div>
            )
        }))  : <h3 className='text-black '>Cart Is Empty</h3> }
        </div>
    )
}

export default Minicart