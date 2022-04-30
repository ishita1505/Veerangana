import React, { useState } from "react"


import Data from "./Data"
const Services = () => {
	return (
		<div>
            
               
				<div className="py-16  h-full ">
					<h1 className="text-3xl lg:text-4xl xl:text-6xl mb-6 text-gray-900 font-bold ">
						Facalities we provide
					</h1>
					<h3 className="my-12 text-base md:text-lg lg:text-xl text-gray-900 font-medium">
                    <p>Our motive is to provide safety to women and bring them to the mainstream.</p> 
					
					<p>To accomplish our target, we provide the following facilities</p>
					</h3>
						
					<Data/>	
				</div>
		
                
           
        </div>
	)
}

export default Services
