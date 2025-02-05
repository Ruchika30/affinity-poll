import { render, screen, fireEvent } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import Layout from "../layout"

const resizeWindow = (width: number) => {
	window.innerWidth = width
	window.dispatchEvent(new Event("resize"))
}

describe("Layout Component", () => {
	beforeEach(() => {
		resizeWindow(1024)
	})

	test("renders title in the view", () => {
		render(
			<MemoryRouter>
				<Layout title="Affinity">Content</Layout>
			</MemoryRouter>
		)

		expect(screen.getByTestId("mobile-title")).toBeInTheDocument()
		expect(screen.getByTestId("desktop-title")).toBeInTheDocument()
	})

	test("toggles sidebar in mobile view", () => {
		resizeWindow(375)

		render(
			<MemoryRouter>
				<Layout title="Mobile Title">Content</Layout>
			</MemoryRouter>
		)

		const menuButton = screen.getByRole("button")
		fireEvent.click(menuButton)

		expect(screen.getByTestId("overlay")).toBeInTheDocument()

		fireEvent.click(screen.getByTestId("overlay")) // Close sidebar
		expect(screen.queryByTestId("overlay")).not.toBeInTheDocument()
	})

	test("sidebar remains visible in desktop view", () => {
		render(
			<MemoryRouter>
				<Layout title="Desktop Title">Content</Layout>
			</MemoryRouter>
		)

		expect(screen.getByText("Poll Set 1")).toBeInTheDocument()
		expect(screen.getByText("Poll Set 2")).toBeInTheDocument()
	})
})
