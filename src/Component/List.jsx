import React from 'react'
import { useNavigate } from 'react-router-dom';


const List = ({poster_path, title, overview, diKlik}) =>  {
    const navigate = useNavigate()
    const url = `https://image.tmdb.org/t/p/w500${poster_path}`
    return (
      <div className='max-w-[1640px] mx-auto justify-evenly items-center p-4'>
        <div className='flex flex-wrap justify-between items-center'>
                <div>
                    <div className="card max-w-[400px] mb-5 bg-base-100 shadow-xl mx-1 image-full h-[500px]">
                        <figure><img className='object-cover w-[400px] h-[600px]' src={url} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p>{overview}</p>
                                <div className="card-actions justify-end">
                                    <button button onClick={diKlik} className="btn btn-primary">Movie Detail</button>
                                </div>
                        </div>
                    </div>
                </div>     
        </div>
      </div>
    )
  }



export default List
