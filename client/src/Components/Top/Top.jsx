import React, { useState } from "react"
import "./Top.css"
import {Link} from "react-router-dom"

import logo from './logo.png';
const Top = () => {
	return (
		<div >
			<div className="new-image h-screen bg-fixed">
			
				<div className="py-24 ">
				<img src={logo} className="mx-auto h-40 w-40 mb-8"/>
					<h1 className="text-8xl mb-6 text-white font-bold ">
						VEERANGANA
					</h1>
					<h3 className="text-xl text-white font-medium">
						For the women, By the women, Of the women
					</h3>
					<div className="py-12">

						<button className="mx-8 text-xl inline-block px-20 py-4 mt-2 text-white uppercase duration-500 border-2 border-white border-4 font-semi-bold hover:bg-gray-900 hover:bg-opacity-75 hover:border-white ">
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
