import React from 'react'
import { useCountContext } from '../Context/context'

const BagianDetai = ({judul, gambar, detail, backdrop}) => {
  const {toggle} = useCountContext()
  return (
    <div className={`${toggle ? `bg-white` : `bg-gray-800` }`}>
        <div className={`max-w-[1640px] mx-auto`}>
          <div className="hero min-h-screen bg-base backdrop-blur-md">
          <div className='w-full bg-cover bg-center object-cover bg-no-repeat max-h-[921px]' >
              <img src={`https://image.tmdb.org/t/p/w500${backdrop}`} className=' w-screen object-cover' />
          </div>
            <div className="hero-overlay max-h-[921px]"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className='lg:flex'>
                  <div className='lg:mr-20'>
                    <img src={`https://image.tmdb.org/t/p/w500${gambar}`} alt="" />
                  </div>
                  <div className="max-w-sm lg:ml-20">
                    <h1 className="mb-5 text-1xl md:text-3xl lg:text-7xl mb-4 font-bold">{judul}</h1>
                    <p className="mb-5 text-1xl md:text-2xl lg:text-3xl">{detail}</p>
                    <button className="btn btn-primary">Watch It Now</button>
                </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default BagianDetai