import React from 'react'

const BagianDetai = ({judul, gambar, detail, backdrop}) => {
  return (
    <div>
        <div className='max-w-[1640px] mx-auto bg-base'>
          <div className="hero min-h-screen bg-base">
          <div className='w-full bg-cover bg-center object-cover bg-no-repeat max-h-[921px]' >
              <img src={`https://image.tmdb.org/t/p/w500${backdrop}`} className=' w-screen object-cover' />
          </div>
            <div className="hero-overlay max-h-[921px]"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className='flex'>
                  <div className='mr-20'>
                    <img src={`https://image.tmdb.org/t/p/w500${gambar}`} alt="" />
                  </div>
                  <div className="max-w-md ml-20">
                    <h1 className="mb-5 text-7xl mb-4 font-bold">{judul}</h1>
                    <p className="mb-5 text-3xl">{detail}</p>
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