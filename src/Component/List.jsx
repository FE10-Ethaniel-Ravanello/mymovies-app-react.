import React, { useState } from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../Features/favoriteSlice';
import { deleteFavorite } from '../Features/favoriteSlice';


const List = ({poster_path, title, overview, diKlik, event}) =>  {
    const navigate = useNavigate()
    const [value, setValue] = useState("")
    const dispatch = useDispatch()
    const onFav = ({event}) => {
      dispatch(addFavorite({id: event.id, title: event.title, overview: event.overview, poster_path: event.poster_path })); 
      setValue("")
    };
    const url = `https://image.tmdb.org/t/p/w500${poster_path}`
    const {mode} = useSelector((state) => state.darkMode)
    return (
      <div className={`max-w-[1920px] mx-auto justify-evenly items-center p-4 ${mode? `bg-white` : `bg-slate-800`}s`}>
        <div className={`flex flex-wrap justify-evenly items-center`}>
                <div>
                    <div className="card max-w-[400px] mb-5 bg-base-100 shadow-xl mx-1 image-full h-[500px]">
                        <figure><img className='object-cover w-[400px] h-[600px]' src={url} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p>{overview}</p>
                                <div className="card-actions justify-end">
                                  <button onClick={() => onFav({event})} className='mt-4' size={30}><AiOutlineHeart size={30}/></button>
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
