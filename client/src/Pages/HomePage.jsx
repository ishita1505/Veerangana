import React from "react"
import Video from "../Components/Video/Video"
import Testimonial from "../Components/Testimonial/Testimonial"
import Top from "../Components/Top/Top"
import Nav from "../Components/Nav/Nav"
import Services from "../Components/Services/Services"
import Defense from "../Components/Defense/Defense"
import Newsletter from "../Components/Newsletter/Newsletter"
import Footer from "../Components/Footer/Footer"
import Contact from "../Components/Contact/Contact"


const HomePage = () => {

	return (
		<div>
			<Nav />
			<Top />
			<Contact/>
			<Services/>
			<Defense/>
			<Newsletter />
			<Video />
			<Testimonial/>
			<Footer />
		</div>
	)

}
export default HomePage
