import React from 'react'
import {BsToggleOn} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDarkMode } from '../Features/DarkModeFeature'


const DarkMode = () => {

const {mode} = useSelector((state) => state.darkMode)
const dispatch = useDispatch()

  return (
    <div>
      <button className={`pt-[3px] ml-2 z-50`}>
      <BsToggleOn className={`${mode? `text-black` : `text-white`}`} onClick={() => dispatch(toggleDarkMode())} size={30}/>
      </button>
      
    </div>
  )
}

export default DarkMode