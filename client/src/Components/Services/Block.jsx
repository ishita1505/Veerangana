import React, {useState} from "react"
import "./Block.css"
export default function Block(props){
    return(
        <div className="services  block mx-10 my-10 p-10 rounded-lg hover:shadow-xl">
            <h3 className="text-gray-900 text-base sm:text-xl md:text-2xl xl:text-3xl py-2 font-semibold">{props.heading}</h3>
            <p className="text-xs sm:text-sm lg:text-base">{props.content}</p>
        </div>
    )
}