import React from "react";
import data from "../data";
import { useSelector } from "react-redux";

const Hero = () => {
	const {mode} = useSelector((state) => state.darkMode)
	return (
		<div className={`max-w-[1920px] mx-auto p-4 ${mode? `bg-white` : `bg-slate-800`}`}>
			<h2 className={`max-w-[1640px] font-bold px-9 mx-0  text-2xl md:text-3xl lg:text-5xl mb-3 ${mode? `text-black` : `text-white`}`}>
				Movie Playing Now!!
			</h2>
			<div className="carousel w-full">
				{data.map((item) => {
					return (
						<>
							<div
								id={item.id}
								className={`carousel-item relative w-full shadow-xl rounded-xl`}
							>
								<img className="rounded-xl mx-auto text-center" src={item.video} alt="" />
								<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
									<a href={item.left} className="btn btn-circle">
										❮
									</a>
									<a href={item.right} className="btn btn-circle">
										❯
									</a>
								</div>
							</div>
						</>
					);
				})}
			</div>
		</div>
	);
};

export default Hero;
