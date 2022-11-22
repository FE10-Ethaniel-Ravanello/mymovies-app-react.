import React, { Component } from 'react'
import list from '../listdata'

class List extends Component {
  render() {
    return (
      <div className='max-w-[1640px] mx-auto justify-between items-center p-4'>
        <h2 className='font-bold text-2xl mb-4'>Like Movies</h2>
        <div className='flex flex-wrap mx-auto justify-between items-center'>
                {list.map((list) => {
                return (
                <div>
                    <div className="card max-w-[400px] mb-5 bg-base-100 shadow-xl mx-2 image-full h-[500px]">
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
