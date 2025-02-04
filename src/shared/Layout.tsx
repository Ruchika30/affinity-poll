import React from "react"
import { NavLink } from "react-router-dom"

interface LayoutProps {
	children: React.ReactNode
	title: string
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
	return (
		<div className="grid grid-cols-[300px_1fr] min-h-screen gap-4 p-4 bg-gray-50">
			{/* Sidebar */}
			<div className="bg-gray-200 text-gray-700 p-4 rounded-xl shadow-md text-center">
				<h2 className="text-3xl font-bold mb-2">{title}</h2>

				<div className="p-4 text-white flex flex-col gap-4 justify-center">
					<NavLink
						to="/"
						className={({ isActive }) =>
							`p-4 rounded-md font-bold ${
								isActive ? "bg-green-500 text-white" : "bg-slate-400"
							}`
						}
					>
						Poll Set 1
					</NavLink>

					<NavLink
						to="/poll-two"
						className={({ isActive }) =>
							`p-4 rounded-md font-bold ${
								isActive ? "bg-green-500 text-white" : "bg-slate-400"
							}`
						}
					>
						Poll Set 2
					</NavLink>
				</div>
			</div>

			{/* Main Content */}
			<div className="border-2 p-4 rounded-xl shadow-md pt-2 grid grid-cols-2 gap-4 justify-center">
				{children}
			</div>
		</div>
	)
}

export default Layout
