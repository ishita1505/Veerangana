import React , {useState} from "react"
import "./Signin.css"
import {Link} from "react-router-dom"



export default function Signin(){
    return(
        <div >
            <section className="z-0 bg-gray-500">
            <div className="container z-0">
                <h2>Sign In</h2>
            
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
                        <span className="text">Password</span>
                        <span className="line"></span>
                    </div>
                </div>
            </div>
           

            <div className="row100">
                <div className="col">
                   
                        <Link to="/Signup">
                        <span className="text-white">Don't have an account? Click here to sign up...</span>
                        </Link>
                       
                 
                </div>
            </div> 


            <div className="">
            <button className="mx-8 text-xl inline-block px-20 py-4 mt-2 text-white uppercase duration-500 border-2 border-white border-4 font-semi-bold hover:bg-gray-900 hover:bg-opacity-75 hover:border-white ">
						<Link to="/Signin">
						Sign in
						</Link>
						</button>
            </div> 
        </div>
        </section>
        </div>
    )
}