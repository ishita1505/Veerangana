import React , {useState} from "react"
import "./Signin.css"

export default function Signin(){
    return(
        <div >
            <section className="z-0">
            <div className="container z-0">
                <h2>Sign In</h2>
            
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
                    <div className="inputBox textarea">
                        <textarea required></textarea>
                        <span className="text">Type Your Message Here.....</span>
                        <span className="line"></span>
                    </div>
                </div>
            </div> 


            <div className="row100">
                <div className="col hover:opacity-75">
                <input type="submit" value="Send"/>
                </div>
            </div> 
        </div>
        </section>
        </div>
    )
}