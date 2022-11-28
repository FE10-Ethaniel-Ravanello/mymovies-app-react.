import React from 'react'
import { useCountContext } from '../Context/context'

const Filter = () => {
  const {toggle} = useCountContext()
  return (
    <div className={`max-w-[1920px] mx-auto justify-between items-center p-4 ${toggle ? `bg-white` : `bg-gray-800` }` }>
    <h2 className={`font-bold text-2xl md:text-3xl lg:text-4xl mb-2 ${toggle ? `text-black` : `text-white`}`}>Top Like Movies</h2>

        <div className='max-w-[1640px] m-auto py-4'>

            <div>
              <p className={`font-bold text-gray pb-3 ${toggle ? `text-black` : `text-white`}`}>Type</p>
              <div>
                <button className='bg-gray-400 rounded-full mb-3 py-1 px-3 font-bold mr-2' type='button'>Movies</button>
                <button className='bg-gray-400 rounded-full mb-3 py-1 px-3 font-bold mx-2' type='button'>Series</button>
              </div>
            </div>

            <div>
              <p className={`font-bold text-gray pb-3 ${toggle ? `text-black` : `text-white`}`}>Genre</p>
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