import React, {useState} from "react"
import "./Block.css"
export default function Block(props){
    return(
        <div className="services  block mx-10 p-10 rounded-lg hover:shadow-xl">
            <h3 className="text-gray-900 text-3xl py-2 font-semibold">{props.heading}</h3>
            <p>{props.content}</p>
        </div>
    )
}