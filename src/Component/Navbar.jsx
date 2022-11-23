import React, { Component } from 'react'
import {AiOutlineMenu, AiOutlineSearch} from  'react-icons/ai'
import {BsFillBookmarkFill} from 'react-icons/bs'

 class Navbar extends Component {
    
  render() {
    return (
      <div className='flex max-w-[1640px] mx-auto justify-between items-center p-4'>
            {/* Left Side */}
            <div className='flex items-center'>
                <div className='cursor-pointer mr-3'>
                <AiOutlineMenu size={32}/>
                </div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Zora <span className='font-bold'>Watch</span></h1>
                <div className='hidden md:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                    <p className='bg-black text-white rounded-full p-2'>Movies</p>
                    <p className='p-2'>Series</p>
                </div>
            </div>
            {/* Search Bar */}
            <div className='bg-gray-200 flex items-center rounded-full px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={20}/>
                <input className='rounded-full bg-transparent p-2 focus:outline-none w-full' type="text" placeholder='Search For Movies Or Series' />
            </div>
            {/* Saved Button */}
            <button className='hidden md:flex bg-gray-200 rounded-full py-2 px-3 items-center'>
                <BsFillBookmarkFill size={25} className='mr-3 text-black'/> <p className='text-black font-bold'>Saved</p>
            </button>
      </div>
    )
  }
}


export default Navbar
