import React , {useState} from "react"
import "./Contact.css"

export default function Contact(){
    return(
        <div >
            <section className="z-0 backgroundd">
            <div className="container z-0">
                <h2>Contact Us</h2>
            
            <div className="row100">
                <div className="col">
                    <div className="inputBox">
                        <input type="text" name="" required/>
                        <span className="text">First Name</span>
                        <span className="line"></span>
                    </div>
                </div>
                <div className="col">
                    <div className="inputBox">
                        <input type="text" name="" required/>
                        <span className="text">Last Name</span>
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