import React from 'react'
import logo from '../assets/Logo.png'

const Dining = () => {
    return (
        <>
            <div className='font-primary flex'>
                <div className='flex justify-center items-center space-x-12'>
                    <img className='flex w-32 h-20 ml-48 mt-2' src={logo} />
                    <div className='flex justify-center items-center'>
                        <input className='w-96 p-1 rounded-md ' placeholder='Search for restaurants' />
                    </div>
                    <p className='space-x-'>SignUp</p>
                </div>
            </div>
        </>
    )
}

export default Dining