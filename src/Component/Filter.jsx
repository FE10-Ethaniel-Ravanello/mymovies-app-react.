import React from 'react'
import { useSelector } from 'react-redux'

const Filter = () => {
  const {mode} = useSelector((state) => state.darkMode)
  return (
    <div className={`max-w-[1920px] mx-auto justify-between items-center p-4 ${mode? `bg-white` : `bg-slate-800`}` }>
    <h2 className={`font-bold text-2xl md:text-3xl lg:text-4xl mb-2 px-8 ${mode? `text-black` : `text-white`}`}>Top Like Movies</h2>

        <div className='max-w-[1640px] px-10 py-3'>

            <div>
              <p className={`font-bold text-gray pb-3 ${mode? `text-black` : `text-white`}`}>Type</p>
              <div>
                <button className='bg-gray-400 rounded-full mb-3 py-1 px-3 font-bold mr-2' type='button'>Movies</button>
                <button className='bg-gray-400 rounded-full mb-3 py-1 px-3 font-bold mx-2' type='button'>Series</button>
              </div>
            </div>

            <div>
              <p className={`font-bold text-gray pb-3 ${mode? `text-black` : `text-white`}`}>Genre</p>
              <div>
                <button className='bg-gray-400 rounded-full py-1 px-3 font-bold mr-2 mb-3' type='button'>Action</button>
                <button className='bg-gray-400 rounded-full py-1 px-3 font-bold mx-2 mb-3' type='button'>Thriller</button>
                <button className='bg-gray-400 rounded-full py-1 px-3 font-bold mx-2 mb-3' type='button'>Sci - Fi</button>
                <button className='bg-gray-400 rounded-full py-1 px-3 font-bold mx-2' type='button'>Adventure</button>
                <button className='bg-gray-400 rounded-full py-1 px-3 font-bold mx-2' type='button'>Slice Of Life</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Filter