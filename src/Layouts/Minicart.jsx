import React from 'react'
import { TiTick } from "react-icons/ti";

const Minicart = ({ addeditems, removeItem }) => {
    return (
        <div className='fixed w-[300px] outline h-full  top-20 right-3'>

            <div className='w-full flex justify-between'>
                <span className='text-xl '>My Order</span>    <span><TiTick /></span>
            </div>



        </div>
    )
}

export default Minicart