import React from 'react'
import { useSelector } from 'react-redux'

const Footer = () => {
  const {mode} = useSelector((state) => state.darkMode)
  return (
    <footer className={`footer p-10 ${mode? `bg-white` : `bg-slate-800`}`}>
  <div>
    <img className='w-20' src="https://i.pinimg.com/originals/de/3e/ba/de3eba287d246feec704c33cff9aee57.png" alt="" />
    <p className={`${mode? `text-black` : `text-white`}`}>Zora Domain Corp.<br/>Providing Good Quaity Movies</p>
  </div> 
  <div>
    <span className={`footer-title ${mode? `text-black` : `text-white`}`}>Services</span> 
    <a className={`link link-hover ${mode? `text-black` : `text-white`} `}>Branding</a> 
    <a className={`link link-hover ${mode? `text-black` : `text-white`} `}>Design</a> 
    <a className={`link link-hover ${mode? `text-black` : `text-white`} `}>Marketing</a> 
    <a className={`link link-hover ${mode? `text-black` : `text-white`} `}>Advertisement</a>
  </div> 
  <div>
    <span className={`footer-title ${mode? `text-black` : `text-white`}`}>Company</span> 
    <a className={`link link-hover ${mode? `text-black` : `text-white`} `}>About us</a> 
    <a className={`link link-hover ${mode? `text-black` : `text-white`} `}>Contact</a> 
    <a className={`link link-hover ${mode? `text-black` : `text-white`} `}>Jobs</a> 
    <a className={`link link-hover ${mode? `text-black` : `text-white`} `}>Press kit</a>
  </div> 
  <div>
    <span className={`footer-title ${mode? `text-black` : `text-white`}`}>Legal</span> 
    <a className={`link link-hover ${mode? `text-black` : `text-white`} `}>Terms of use</a> 
    <a className={`link link-hover ${mode? `text-black` : `text-white`} `}>Privacy policy</a> 
    <a className={`link link-hover ${mode? `text-black` : `text-white`} `}>Cookie policy</a>
  </div>
</footer>
  )
}

export default Footer