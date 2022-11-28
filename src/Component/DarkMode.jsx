import React from 'react'
import {BsToggleOn} from 'react-icons/bs'
import { useCountContext } from '../Context/context'

const DarkMode = ({children}) => {

  const {toggle, handleTheme} = useCountContext()

  return (
    <div>
      {children}
      <button className={`pt-[3px] ml-2 z-50 ${toggle ? `text-gray-800` : `text-white` }`} onClick={() => handleTheme()}>
      <BsToggleOn size={30}/>
      </button>
      
    </div>
  )
}

export default DarkMode