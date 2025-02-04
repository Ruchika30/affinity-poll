import { render, screen, fireEvent } from "@testing-library/react"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import LandingPage from "../index"
import { PollOne } from "../data"
import PollTwo from "../../PollTwo"

jest.mock("../../../__mocks__/matchMedia")
jest.mock("../../../shared/PollWidget", () => ({
	__esModule: true,
	default: ({ questions }: { questions: any[] }) => (
		<div>
			{questions.map((q) => (
				<div key={q.id} data-testid="poll-question">
					{q.qsn}
				</div>
			))}
		</div>
	)
}))

describe("LandingPage Mobile view", () => {
	beforeAll(() => {
		window.matchMedia = jest.fn().mockImplementation((query) => ({
			matches: /max-width: 768px/.test(query), // Match any max-width 768px queries
			media: query,
			onchange: null,
			addListener: jest.fn(),
			removeListener: jest.fn(),
			addEventListener: jest.fn(),
			removeEventListener: jest.fn(),
			dispatchEvent: jest.fn()
		}))

		window.dispatchEvent(new Event("resize")) // Force re-evaluation of layout
	})

	it("renders the page title", () => {
		render(
			<MemoryRouter>
				<LandingPage />
			</MemoryRouter>
		)
		expect(screen.getByTestId("mobile-title")).toBeInTheDocument()
	})

	it("displays all poll questions", () => {
		render(
			<MemoryRouter>
				<LandingPage />
			</MemoryRouter>
		)
		const pollQuestions = screen.getAllByTestId("poll-question")
		expect(pollQuestions).toHaveLength(PollOne.length)
		PollOne.forEach((poll) => {
			expect(screen.getByText(poll.qsn)).toBeInTheDocument()
		})
	})

	it("toggles sidebar when hamburger icon is clicked", () => {
		render(
			<MemoryRouter>
				<LandingPage />
			</MemoryRouter>
		)

		const hamburgerButton = screen.getByTestId("mobile-header")
		fireEvent.click(hamburgerButton)

		expect(screen.getByText("Poll Set 1")).toBeInTheDocument()
	})

	it("navigates to Poll Set 2 when clicked", () => {
		render(
			<MemoryRouter initialEntries={["/"]}>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/poll-two" element={<PollTwo />} />
				</Routes>
			</MemoryRouter>
		)

		const hamburgerButton = screen.getByRole("button")
		const navLink = screen.getByText("Poll Set 2")

		fireEvent.click(hamburgerButton)

		expect(navLink).toBeInTheDocument()
		fireEvent.click(navLink)

		expect(
			screen.getByText("What's your favorite type of cuisine?")
		).toBeInTheDocument()
	})
})
