import React, { useState } from "react"
import "./Top.css"
import {Link} from "react-router-dom"

import logo from './logo.png';
const Top = () => {
	return (
		<div >
			<div className="new-image h-full md:h-screen">
			
				<div className="py-12 md:py-24 ">
				<img src={logo} className="w-20 h-20  mx-auto md:h-40 md:w-40 md:mb-8 "/>
					<h1 className="text-4xl md:text-8xl mb-2 md:mb-6 text-white font-semibold md:font-bold ">
						VEERANGANA
					</h1>
					<h3 className="md:text-xl text-white md:font-medium">
						For the women, By the women, Of the women
					</h3>
					<div className="md:py-12">

						<button className="py-2 px-4 mt-4 md:mx-8 md:text-xl inline-block md:px-20 md:py-4 mt-2 text-white uppercase duration-500 border-2 border-white border-4 md:font-semi-bold hover:bg-gray-900 hover:bg-opacity-75 hover:border-white ">
						<Link to="/Signup">
						Join Us
						</Link>
						</button>
					</div>
				</div>
			</div>
		
		</div>
	)
}

export default Top
