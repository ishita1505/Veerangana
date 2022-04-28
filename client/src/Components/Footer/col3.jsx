import React from "react"
import { Link } from "react-router-dom"

function Col3() {
	return (
		<>
			<div className="pl-8 lg:w-4/5 text-sm text-left md:text-lg md:mx-auto">
				<h1 className="mt-3 mb-0 text-xl font-semibold text-white md:text-2xl md:my-6">
					SOCIAL UPDATES
				</h1>
				<h1 className="mt-3 mb-2 text-white md:mt-8">
					You may wonder: Veerangana so popular? If you do, find more
					info about it here.
				</h1>

				<div className="flex flex-row justify-around ">
					<div>
						<a
							href="#"
							className="inline-flex text-sm text-gray-300 hover:text-gray-100"
						>
							<img
								src="/icons/fb-removebg-preview.png"
								className="mx-3 w-7 h-7"
							/>
							<p className="hidden lg:inline-block">Facebook</p>
						</a>
					</div>

					<div>
						<a
							href="#"
							className="inline-flex text-sm text-gray-300 hover:text-gray-100"
						>
							<img
								src="/icons/tweet-removebg-preview(1).png"
								className="mx-3 w-7 h-7"
							/>
							<p className="hidden lg:inline-block">Twitter</p>
						</a>
					</div>

					<div>
						<a
							href="#"
							className="inline-flex text-sm text-gray-300 hover:text-gray-100"
						>
							<img
								src="/icons/Insta-removebg-preview.png"
								className="mx-3 w-7 h-7"
							/>
							<p className="hidden lg:inline-block">Instagram</p>
						</a>
					</div>

					<div>
						<a
							href="#"
							className="inline-flex text-sm text-gray-300 hover:text-gray-100"
						>
							<img
								src="/icons/yt-removebg-preview(1).png"
								className="mx-3 w-7 h-7"
							/>
							<p className="hidden lg:inline-block">Youtube</p>
						</a>
					</div>
				</div>

				<Link
					to="/team#"
					className="block w-full my-8 tracking-widest underline uppercase cursor-pointer text-custom-secondary"
				>
					meet the team
				</Link>
			</div>
		</>
	)
}
export default Col3
