import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react"

interface LayoutProps {
	children: React.ReactNode
	title: string
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className="min-h-screen bg-gray-50 p-4 relative">
			{/* Mobile Header */}
			<div className="flex items-center text-center justify-between md:hidden bg-gray-200 p-4 rounded-xl shadow-md">
				<h2 className="text-2xl font-bold" data-testid="mobile-title">
					{title}
				</h2>
				<button
					data-testid="mobile-header"
					onClick={() => setIsOpen((prev) => !prev)}
				>
					{isOpen ? <X size={28} /> : <Menu size={28} />}
				</button>
			</div>

			<div className="flex ">
				{/* Sidebar */}
				<div
					className={`fixed top-0 left-0 h-full w-64 bg-gray-200 text-gray-700 p-4 rounded-r-xl shadow-md transform transition-transform duration-300 
						z-20 md:static md:translate-x-0 ${
							isOpen ? "translate-x-0" : "-translate-x-full"
						}`}
				>
					<h2
						className="text-3xl font-bold hidden md:block mb-4 text-center"
						data-testid="desktop-title"
					>
						{title}
					</h2>

					<div className="flex flex-col gap-4">
						<NavLink
							to="/"
							className={({ isActive }) =>
								`p-4 rounded-md font-bold ${isActive ? "bg-green-500 text-white" : "bg-slate-300"}`.trim() ||
								"p-4 rounded-md font-bold bg-slate-300"
							}
							onClick={() => setIsOpen(false)}
						>
							Poll Set 1
						</NavLink>

						<NavLink
							to="/poll-two"
							className={({ isActive }) =>
								`p-4 rounded-md font-bold ${isActive ? "bg-green-500 text-white" : "bg-slate-300"}`.trim() ||
								"p-4 rounded-md font-bold bg-slate-300"
							}
							onClick={() => setIsOpen(false)}
						>
							Poll Set 2
						</NavLink>
					</div>
				</div>

				{/* Main Content */}
				<div className="flex-1 border-2 p-4 rounded-xl shadow-md mt-4 md:mt-0 md:ml-4 grid grid-cols-1 md:grid-cols-2 gap-4">
					{children}
				</div>
			</div>

			{/* Overlay for Mobile */}
			{isOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
					onClick={() => setIsOpen(false)}
					data-testid="overlay"
				></div>
			)}
		</div>
	)
}

export default Layout
