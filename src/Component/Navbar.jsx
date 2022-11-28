import React, { Component, useState } from 'react'
import {AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillHome, AiFillLike, AiFillQuestionCircle} from  'react-icons/ai'
import {BsFillBookmarkFill} from 'react-icons/bs'
import {IoIosWallet} from 'react-icons/io'
import { useCountContext } from '../Context/context'
import DarkMode from './DarkMode'

const Navbar = ({Home, Liked}) =>  {
    const [nav, setNav] = useState(false)
    const {toggle, handleTheme} = useCountContext()
    
    return (
      <div className={`flex max-w-[1920px] mx-auto justify-between items-center p-4 ${toggle ? `bg-white` : `bg-gray-800` }`}>
            {/* Left Side */}
            <div className='flex items-center'>
              <button className={`${toggle ? `text-black` : `text-white`}`}>
              <AiOutlineMenu onClick={() => setNav(!nav)} className='cursor-pointer z-10 ${toggle ? `text-black` : `text-white`}' size={30}/>
              </button>
                <h1 className={`text-2xl sm:text-3xl lg:text-4xl px-2 ${toggle ? `text-black` : `text-white`}`}>Zora <span className='font-bold'>Watch</span></h1>
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
            <button onClick={Liked} className='hidden md:flex bg-gray-200 rounded-full py-2 px-3 items-center'>
                <BsFillBookmarkFill onClick={Liked} size={25} className='mr-3 text-black'/> <p className='text-black font-bold'>Like</p>
            </button>
            <DarkMode className='z-50 text-white'/>

            {/* Mobile Nav */}
            {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : '' }
            
            <div className={nav ? 'fixed top-0 left-0 h-screen bg-white w-[300px] z-10 duration-300' : 'fixed top-0 left-[-100%] h-screen bg-white w-[300px] z-10 duration-300' }>
              <AiOutlineClose onClick={() => setNav(!nav)} size={30} className='absolute right-4 top-4 cursor-pointer'/>
              <h2 className='mt-5 ml-4 text-2xl'>Zora <span className='font-bold'>Watch</span></h2>
              <nav>
                <ul className='text-gray-800 flex flex-col p-4'>
                  <li onClick={Home} className='text-xl flex py-4 cursor-pointer'><AiFillHome className='mr-4' size={25}/>Home</li>
                  <li onClick={Liked} className='text-xl flex py-4 cursor-pointer'><AiFillLike className='mr-4 ' size={25}/>Like</li>
                  <li className='text-xl flex py-4 cursor-pointer'><AiFillQuestionCircle className='mr-4' size={25}/>About Us</li>
                  <li className='text-xl flex py-4 cursor-pointer'><IoIosWallet className='mr-4' size={25}/>Payment</li>
                 
                </ul>
              </nav>

            </div>
      </div>
    )
  }



export default Navbar
