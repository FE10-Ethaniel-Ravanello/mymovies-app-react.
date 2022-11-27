import React from 'react'
import data from '../data'
import drivetrailer from "../assets/Driver-trailer.mp4";
import johntrailer from "../assets/Baba-yaga.mp4";
import zelda from "../assets/totk.mp4"

const Hero = () => {
    return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <h2 className='w-[1640px] font-bold text-5xl mb-3'>Movie Playing Now!!</h2>
        <div className="carousel w-full">
            {data.map((item) => {
            return (
              <>
            <div id="slide1" className="carousel-item relative w-full bg-base-100 shadow-xl">
                 <video
                  autoPlay
                  muted
                  loop
                  className="object-cover w-[1640px] mx-auto rounded-xl h-full"> <source src={drivetrailer} />
                  </video>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 

            <div id="slide2" className="carousel-item relative w-full bg-base-100 shadow-xl">
                 <video
                  autoPlay
                  muted
                  loop
                  className="object-cover w-[1640px] mx-auto rounded-xl  h-full"> <source src={johntrailer} />
                  </video>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full bg-base-100 shadow-xl">
                 <video
                  autoPlay
                  muted
                  loop
                  className="object-cover w-[1640px] mx-auto rounded-xl  h-full"> <source src={zelda} />
                  </video>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div> 
            </>
            );
        })}
        </div>
    </div>
    )
  }


export default Hero
