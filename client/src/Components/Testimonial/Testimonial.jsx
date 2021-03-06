import React from "react"
import './Testimonial.css'
import Title from "./components/Title"
import Description from "./components/Description"
import Reviews from "./components/Reviews"

function Testimonial() {
    return (
        <div className="flex flex-col items-center justify-center w-full py-12 overflow-hidden bg-gray-100">
            <Title />
            <Description />
            <Reviews />
        </div>
    )
}

export default Testimonial