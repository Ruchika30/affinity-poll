import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import Poll from "../poll"
import { IQuestion } from "../../../components/types"

const mockQuestions: IQuestion[] = [
	{
		id: 1,
		qsn: "What is your favorite color?",
		options: [
			{ id: "a", text: "Red", votes: 0 },
			{ id: "b", text: "Blue", votes: 0 },
			{ id: "c", text: "Green", votes: 0 }
		]
	}
]

describe("Poll Component", () => {
	beforeEach(() => {
		localStorage.clear() // Clear localStorage before each test
	})

	it("renders the poll questions and options correctly", () => {
		render(<Poll questions={mockQuestions} pollId="#4321" />)
		const question1 = screen.getByText("What is your favorite color?")
		expect(question1).toBeInTheDocument()

		expect(screen.getByText("Red")).toBeInTheDocument()
		expect(screen.getByText("Blue")).toBeInTheDocument()
		expect(screen.getByText("Green")).toBeInTheDocument()
	})

	it("allows voting for the Red option and updates the vote count correctly", () => {
		render(<Poll questions={mockQuestions} pollId="#4321" />)
		const optionRedButton = screen.getByRole("button", { name: "Red" })
		fireEvent.click(optionRedButton)

		const updatedOptionRed = screen.getByText("Red - 100.0% (1 votes)")
		expect(updatedOptionRed).toBeInTheDocument()
	})

	it("does not allow voting for another option once voted", () => {
		render(<Poll questions={mockQuestions} pollId="#4321" />)

		const optionRedButton = screen.getByRole("button", { name: "Red" })
		fireEvent.click(optionRedButton)

		expect(screen.queryByRole("button", { name: "Blue" })).toBeNull()
		expect(screen.queryByRole("button", { name: "Green" })).toBeNull()
	})

	it("persists the vote in localStorage", () => {
		render(<Poll questions={mockQuestions} pollId="#4321" />)
		const optionBlueButton = screen.getByRole("button", { name: "Blue" })
		fireEvent.click(optionBlueButton)

		const savedData = JSON.parse(localStorage.getItem("pollData-#4321") || "[]")
		expect(savedData[0].voted).toBe(true)
		expect(savedData[0].selectedOption).toBe("b")
		expect(savedData[0].options.find((opt: any) => opt.id === "b").votes).toBe(
			1
		)
	})

	it("resets localStorage on page refresh", () => {
		render(<Poll questions={mockQuestions} pollId="#4321" />)
		const optionGreenButton = screen.getByRole("button", { name: "Green" })
		fireEvent.click(optionGreenButton)

		window.dispatchEvent(new Event("beforeunload"))

		expect(localStorage.getItem("pollData-#4321")).toBeNull()
	})
})
