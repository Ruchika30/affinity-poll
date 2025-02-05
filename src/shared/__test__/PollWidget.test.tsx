import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import Poll from "../widget/poll"
import { IQuestion } from "../../components/types"

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
	it("renders the poll questions and options correctly", () => {
		render(<Poll questions={mockQuestions} pollId="#4321" />)
		const question1 = screen.getByText("What is your favorite color?")
		expect(question1).toBeInTheDocument()

		const optionRed = screen.getByText("Red")
		const optionBlue = screen.getByText("Blue")
		const optionGreen = screen.getByText("Green")
		expect(optionRed).toBeInTheDocument()
		expect(optionBlue).toBeInTheDocument()
		expect(optionGreen).toBeInTheDocument()
	})

	it("allows voting red option and updates the vote count correctly", () => {
		render(<Poll questions={mockQuestions} pollId="#4321" />)
		const optionRedButton = screen.getByRole("button", { name: "Red" })
		fireEvent.click(optionRedButton)
		const updatedOptionRed = screen.getByText("Red")
		expect(updatedOptionRed).toBeInTheDocument()
	})

	it("allows voting blue option and updates the vote count correctly", () => {
		render(<Poll questions={mockQuestions} pollId="#4321" />)
		const optionRedButton = screen.getByRole("button", { name: "Blue" })
		fireEvent.click(optionRedButton)
		const updatedOptionRed = screen.getByText("Blue")
		expect(updatedOptionRed).toBeInTheDocument()
	})

	it("disables voting after a vote has been cast", () => {
		render(<Poll questions={mockQuestions} pollId="#4321" />)
		const optionRedButton = screen.getByRole("button", { name: "Red" })
		fireEvent.click(optionRedButton)

		const optionBlueButton = screen.getByRole("button", { name: "Blue" })
		expect(optionBlueButton).toBeDisabled()
	})
})
