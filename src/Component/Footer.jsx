import React from 'react'
import { useCountContext } from '../Context/context'

const Footer = () => {
    const {toggle} = useCountContext()
  return (
    <footer className={`footer p-10 ${toggle ? `bg-white` : `bg-gray-800` } ${toggle ? `text-gray-800` : `text-white` }`}>
  <div>
    <img className='w-20' src="https://i.pinimg.com/originals/de/3e/ba/de3eba287d246feec704c33cff9aee57.png" alt="" />
    <p>Zora Domain Corp.<br/>Providing Good Quaity Movies</p>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
  )
}

export default Footer