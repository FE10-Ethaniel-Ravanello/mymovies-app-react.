import React from 'react'

const Filter = () => {
  return (
    <div className='max-w-[1640px] mx-auto justify-between items-center p-4'>
    <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl mb-2'>Top Like Movies</h2>

        <div className='max-w-[1640px] m-auto py-4'>

            <div>
              <p className='font-bold text-gray pb-3'>Type</p>
              <div>
                <button className='bg-gray-400 rounded-full mb-3 py-1 px-3 font-bold mr-2' type='button'>Movies</button>
                <button className='bg-gray-400 rounded-full mb-3 py-1 px-3 font-bold mx-2' type='button'>Series</button>
              </div>
            </div>

            <div>
              <p className='font-bold text-gray pb-3'>Genre</p>
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