import React, { Component } from 'react'
import list from '../listdata'

class List extends Component {
  render() {
    return (
      <div className='max-w-[1640px] mx-auto justify-between items-center p-4'>
        <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl mb-2'>Top Like Movies</h2>
        {/* Filter Row */}
        <div className='max-w-[1640px] m-auto py-4'>
            {/* Filter Series/Movies */}
            <div>
              <p className='font-bold text-gray pb-3'>Type</p>
              <div>
                <button className='bg-gray-400 rounded-full mb-3 py-1 px-3 font-bold mr-2' type='button'>Movies</button>
                <button className='bg-gray-400 rounded-full mb-3 py-1 px-3 font-bold mx-2' type='button'>Series</button>
              </div>
            </div>
            {/* Filter Genre */}
            <div>
              <p className='font-bold text-gray pb-3'>Genre</p>
              <div>
                <button className='bg-gray-400 rounded-full py-1 px-3 font-bold mr-2' type='button'>Action</button>
                <button className='bg-gray-400 rounded-full py-1 px-3 font-bold mr-2' type='button'>Thriller</button>
                <button className='bg-gray-400 rounded-full py-1 px-3 font-bold mr-2' type='button'>Sci - Fi</button>
                <button className='bg-gray-400 rounded-full py-1 px-3 font-bold mr-2' type='button'>Adventure</button>
                <button className='bg-gray-400 rounded-full py-1 px-3 font-bold mr-2' type='button'>Slice Of Life</button>
              </div>
            </div>
        </div>
        <div className='flex flex-wrap mx-auto justify-between items-center'>
                {list.map((list) => {
                return (
                <div>
                    <div className="card max-w-[400px] mb-5 bg-base-100 shadow-xl mx-1 image-full h-[500px]">
                        <figure><img className='object-cover w-[400px] h-[600px]' src={list.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{list.nama}</h2>
                            <p>{list.desc}</p>
                                <div className="card-actions justify-end">
                                    <button button className="btn btn-primary">Watch Now</button>
                                </div>
                        </div>
                    </div>
                </div> 
                )
                })} 
        </div>
      </div>
    )
  }
}


export default List
