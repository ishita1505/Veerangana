import React, {useState} from "react"
import {Link} from "react-router-dom"
import logo from './logo.png';
const Sidebar = ({ sidebarOn, onSidebarChange }) => {
    // Toggles for dropdowns
    const [toggle1, setToggle1] = useState(false)
    const [toggle2, setToggle2] = useState(false)
    const [toggle3, setToggle3] = useState(false)

	return (
			<div className="fixed top-0 left-0 z-50 h-screen overflow-y-scroll border-r-2 border-white w-96 bg-custom-primary">		
				<div
					className="flex flex-row justify-end m-1"
					onClick={() => {
						onSidebarChange()
					}}
				>

					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-10 h-10 p-2 rounded-full text-white hover:font-black hover:bg-gray-500 hover:bg-opacity-25"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</div>

				{/* Logo Alternative */}

				
				
				<div className="flex flex-row items-center justify-start ml-2 text-custom-secondary">
				<img src={logo} className="mx-4 h-16 w-16"/>
				</div>
				<p className="m-4 text-sm text-justify text-custom-muted">
					Discover the most outstanding articles on all topics of
					life.Write your stories and share them
				</p>
				<div className="flex flex-row mx-4 mt-2 mb-6 space-x-1">
					<button className="p-2 px-2 bg-gray-700 bg-opacity-50 rounded-full">
						{/* Facebook icon */}
						<svg
							className="w-4 h-4 text-custom-secondary"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							{" "}
							<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
						</svg>
					</button>
					<button className="p-2 px-2 bg-gray-700 bg-opacity-50 rounded-full">
						{/* Twitter icons */}
						<svg
							className="w-4 h-4 text-custom-secondary"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							{" "}
							<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
						</svg>
					</button>
					<button className="p-2 px-2 bg-gray-700 bg-opacity-50 rounded-full">
						{/* Youtube icon */}
						<svg
							className="w-4 h-4 text-custom-secondary"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							{" "}
							<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
						</svg>
					</button>
					<button className="p-2 px-2 bg-gray-700 bg-opacity-50 rounded-full">
						{/* Instagram icon */}
						<svg
							className="w-4 h-4 text-custom-secondary"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							{" "}
							<rect
								x="2"
								y="2"
								width="20"
								height="20"
								rx="5"
								ry="5"
							/>{" "}
							<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />{" "}
							<line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
						</svg>
					</button>
					<div className="w-full"></div>
					
				</div>
				<hr className="my-6 ml-2" />

				<div className="flex flex-col mx-2 space-y-2 text-sm text-left">
					<div className="p-2 rounded-lg text-custom-secondary hover:bg-gray-500 hover:bg-opacity-20 transition-all duration-500">
					<Link to="/">
						Home
						</Link>
					</div>
					<div className="p-2 rounded-lg text-custom-secondary hover:bg-gray-500 hover:bg-opacity-20 transition-all duration-500">
						<Link to="/Defense">Tutorials</Link>
					</div>
					<div className="flex flex-row justify-between p-2 rounded-lg text-custom-secondary hover:bg-gray-500 hover:bg-opacity-20 transition-all duration-500" onClick={()=>{setToggle1(!toggle1)}}>
						LISTING PAGE
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-5 h-5"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					{/* Dropdown for Listing Page */}
					{(toggle1) && 
					<div className="flex flex-col ml-6 space-y-1 ">
						<div className="p-2 rounded-lg text-custom-secondary hover:bg-gray-500 hover:bg-opacity-20 transition-all duration-500" >Stay Page Map</div>
						<div className="p-2 rounded-lg text-custom-secondary hover:bg-gray-500 hover:bg-opacity-20 transition-all duration-500" >Stay Page Map</div>
						<div className="p-2 rounded-lg text-custom-secondary hover:bg-gray-500 hover:bg-opacity-20 transition-all duration-500" >Stay Page </div>
						<div className="p-2 rounded-lg text-custom-secondary hover:bg-gray-500 hover:bg-opacity-20 transition-all duration-500" >Stay Page Map</div>
						<div className="p-2 rounded-lg text-custom-secondary hover:bg-gray-500 hover:bg-opacity-20 transition-all duration-500" >Stay Page (Map)</div>
						<div className="p-2 rounded-lg text-custom-secondary hover:bg-gray-500 hover:bg-opacity-20 transition-all duration-500" >Stay Page Map</div>                    
					</div>
					}
					</div>
				<hr className="my-6 ml-2" />
				<Link to="/Signup">
				<button className="px-6 py-3 font-bold rounded-full text-custom-secondary bg-custom-button-accent hover:bg-opacity-70" >
						Sign up</button>
						</Link>			
		</div>

	)
}

export default Sidebar
