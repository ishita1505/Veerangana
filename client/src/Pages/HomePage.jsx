import React from "react"

import Testimonial from "../Components/Testimonial/Testimonial"
import Top from "../Components/Top/Top"
import Nav from "../Components/Nav/Nav"
import Services from "../Components/Services/Services"

import Newsletter from "../Components/Newsletter/Newsletter"
import Footer from "../Components/Footer/Footer"



const HomePage = () => {

	return (
		<div>
			<Nav />
			<Top />
			<Services/>
			<Newsletter />	
			<Testimonial/>
			<Footer />
		</div>
	)

}
export default HomePage
