import React , {useState} from "react"
import "./Signup.css"
import {Link} from "react-router-dom"


export default function Signup(){
    return(
        <div >
            <section className="z-0">
            <div className="container z-0">
                <h2>Sign Up</h2>
            
           
            <div className="row100">
                <div className="col">
                    <div className="inputBox">
                        <input type="text" name="" required/>
                        <span className="text">Email</span>
                        <span className="line"></span>
                    </div>
                </div>
                <div className="col">
                    <div className="inputBox">
                        <input type="text" name="" required/>
                        <span className="text">Mobile</span>
                        <span className="line"></span>
                    </div>
                </div>
            </div>

            <div className="row100">
                <div className="col">
                    <div className="inputBox">
                        <input type="text" name="" required/>
                        <span className="text">UserName</span>
                        <span className="line"></span>
                    </div>
                </div>
                <div className="col">
                    <div className="inputBox">
                        <input type="text" name="" required/>
                        <span className="text">Password</span>
                        <span className="line"></span>
                    </div>
                </div>
            </div>

            <div className="row100">
                <div className="col">
                <Link to="/Signin">
                        <span className="text-white">Already have an account? Click here to sign in...</span>
                        </Link>
                </div>
            </div> 


            <div className="">
            <button className="mx-8 text-xl inline-block px-20 py-4 mt-2 text-white uppercase duration-500 border-2 border-white border-4 font-semi-bold hover:bg-gray-900 hover:bg-opacity-75 hover:border-white ">
						<Link to="/Signup">
						Sign Up
						</Link>
						</button>
            </div> 
        </div>
        </section>
        </div>
    )
}