import React, {useState} from "react"
import {Link} from "react-router-dom"
import Menuitem from "./MenuItem"
import logo from './logo.png';
const Navbar = ({ sidebarOn, onSidebarChange }) => {
    const [toggleSearch, setToggleSearch] = useState(false)
	return (
		<div className="sticky top-0 z-20 flex flex-row justify-between h-full py-5 bg-custom-primary text-custom-secondary">
			{/* Logo Alternative */}
			<img src={logo} className="mx-4 h-10 w-10"/>



			{/* Menubar */}
			<ul className="flex flex-row space-x-1 text-custom-secondary">
				<li className="hidden md:block">
					<div className="p-2 px-4 rounded-full transition-all duration-500 hover:bg-gray-500 hover:bg-opacity-25">
						<Link to="/">Home</Link>
					</div>
				</li>			

				<li className="transition-all duration-500">
				<Menuitem   title={`Five Columns`} />
				</li>
			
				
				<li className="hidden md:block">
					<div className="p-2 px-4 rounded-full transition-all duration-500 hover:bg-gray-500 hover:bg-opacity-25">
					<Link to="/Defense">Tutorials</Link>
					</div>
				</li>	
			</ul>
			<ul className="flex flex-row items-center space-x-1">
				
				{/* Search icon */}
				<li
					className="hidden lg:block"
					onClick={() => {
						setToggleSearch(!toggleSearch)
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-10 h-10 p-2 rounded-full hover:font-black hover:bg-gray-500 hover:bg-opacity-25"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</li>
				{toggleSearch && (
					<div className="absolute z-10 hidden transform lg:block translate-y-14 -translate-x-36">
						<input
							type="text"
							placeholder="Type and Press Enter"
							className="px-4 py-3 text-sm border-2 border-indigo-600 outline-none rounded-2xl bg-custom-primary text-custom-secondary"
						></input>
					</div>
				)}
				{/* Sign Up button */}
				<li className="hidden lg:block">
					<button className="px-4 py-2 mr-2 rounded-full bg-custom-button-accent hover:bg-opacity-70">
						<Link to="/Signup">
						Sign Up
						</Link>
						
					</button>
				</li>
				{/* Hamburger menu icon */}
				<li
					className="lg:hidden"
					onClick={() => {
						onSidebarChange()
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-10 h-10 p-2 mr-2 rounded-full hover:font-black hover:bg-gray-500 hover:bg-opacity-25"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</li>
			</ul>
		</div>
	)
}

export default Navbar
