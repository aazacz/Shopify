import React, { useEffect, useState,useContext } from 'react'
import Axios from 'axios'
import {  BsPlusCircleFill } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { addedItemsContext } from '../Pages/Home'; 
const Body = () => {

    const [products, setproducts] = useState([])
    const [searchValue, setSearchValue] = useState("");
    const [filtered, setfiltered] = useState([]);
    // const [addedItems, setAddedItem] = useState([]);
    
    const addedItemscontext = useContext(addedItemsContext);
    const{cartItems,setcartItems} = addedItemscontext

    // Fetch all products from the server when component mounts.
    useEffect(() => {
        Axios.get("https://api.escuelajs.co/api/v1/products")
        .then((Response) =>  Response.data)
        .then((data)=>{
            const productsWithAddedFlag = data.map((product) => ({
               ...product,   isAdded: true, }))

             setproducts(productsWithAddedFlag);
            // console.log(productsWithAddedFlag);
        })
        .catch((error) => { console.log(error) })
        
    }, [])

  
    //function for filtering items
    const itmesFilter = products.filter((item) =>
         item.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  
  

  //function to add item
  function addItem(item) {
    console.log("add item clicked");
    item.addNumber = 1;
    const itemArr = cartItems;
    setcartItems([...itemArr, item]);
    console.log("addedItems" + cartItems)
  } 
  //function to remove item
  function removeItem(item) {
    console.log("remove  item clicked");
    const newItems = cartItems.filter((addedItem) => addedItem.id !== item.id);
    setcartItems(newItems);
    // console.log(addedItems);
  }
 function checkProduct(item) {
    const foundItem  = cartItems.filter((addedItem) => addedItem.id == item.id);
  if(foundItem.length == 0){
    return true
  }
  else return false
  
  }



    return (
        <div className='w-full px-8 md:px-44 py-8 flex flex-col overflow-y-hidden'>

            {/* Search Bar */}
            <input type="text" className='px-3 border-2 h-10 rounded-md border-black  placeholder:pl-3 ' placeholder='Search' 
                            onChange={(e)=>setSearchValue(e.target.value)}  />

            {/* Card Body */}
            <div className=' h-full md:h-full grid grid-cols-2  md:grid-flow-row md:grid-cols-4 gap-7 mt-7  '>

                {itmesFilter.map((value, index) => {
                    
                    return (
                        <div key={value.id} className='W-full  h-[230px]  relative  flex flex-col items-end  '>
                            <button className='absolute text-2xl top-3 right-3 text-white bg-black rounded-full'
                            onClick={()=>{ checkProduct(value) ? addItem(value) : removeItem(value)  }} > 
                            
                            { checkProduct(value) ?  <BsPlusCircleFill /> : <TiTick/>}
                            
                             </button>

                            <div className='w-full h-[200px]  object-fill' >
                                <img src={value.images[0]} className='w-full rounded-xl h-full object-fill' alt="default" />
                            </div>
                            
                            <div className='absolute left-3 bottom-9 bg-white px-2 text-sm rounded-2xl bg-opacity-75'>{value.category.name}</div>

                            <div className=' w-full  rounded-md  ' >
                                <div className='w-full  flex justify-between py'>
                                    <h2 className='text-black '>{value.title}</h2>
                                    <h2 className='text-black font-bold'>{value.price}$</h2>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>


        </div>
    )
}

export default Body