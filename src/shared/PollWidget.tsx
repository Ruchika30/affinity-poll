import React, { useEffect, useState } from "react"
import { IQuestion } from "../components/LandingScreen/types"

interface PollScreenProps {
	pollId: string
	questions: IQuestion[]
}

const Poll: React.FC<PollScreenProps> = ({ pollId, questions }) => {
	const localStorageKey = `pollData-${pollId}`

	const [pollData, setPollData] = useState<IQuestion[]>(() => {
		const savedData = localStorage.getItem(localStorageKey)

		if (savedData) {
			return JSON.parse(savedData)
		}

		return questions.map((q) => ({
			...q,
			options: q.options.map((opt) => ({ ...opt, votes: opt.votes || 0 })),
			voted: false,
			selectedOption: ""
		}))
	})

	useEffect(() => {
		localStorage.setItem(localStorageKey, JSON.stringify(pollData))
	}, [pollData])

	const handleVote = (questionId: number, optionId: string) => {
		/* Increasing existing vote count by 1  */
		const updatedPollData = pollData.map((q) => {
			if (q.id === questionId) {
				return {
					...q,
					voted: true,
					selectedOption: optionId,
					options: q.options.map((opt) =>
						opt.id === optionId ? { ...opt, votes: opt.votes + 1 } : opt
					)
				}
			}
			return q
		})

		setPollData(updatedPollData)
	}

	return (
		<>
			{pollData.map((item) => {
				const totalVotes = item.options.reduce((acc, opt) => acc + opt.votes, 0)

				return (
					<div
						key={item.id}
						className="bg-white p-6 rounded-lg text-lg shadow-md w-full text-center mb-4"
					>
						<h2 className="text-2xl font-bold mb-4">{item.qsn}</h2>
						<ul>
							{item.options.map((option) => {
								const percentage = totalVotes
									? ((option.votes / totalVotes) * 100).toFixed(1)
									: "0"

								return (
									<li key={option.id} className="mb-2">
										{item.voted ? (
											<div className="w-full bg-gray-200 text-white rounded-xl relative">
												<div
													className={`p-2 text-sm text-left h-11 transition-all duration-500 ease-in-out ${
														option.id === item.selectedOption
															? "bg-sky-500 rounded-xl"
															: "bg-sky-200 rounded-xl"
													}`}
													style={{ width: `${percentage}%` }}
												></div>

												<div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-black font-semibold">
													{option.text} - {percentage}% ({option.votes} votes)
												</div>
											</div>
										) : (
											<button
												name={option.text}
												className="w-full p-2 rounded-xl border transition-transform duration-300 bg-gray-100 text-black hover:bg-gray-300"
												onClick={() => handleVote(item.id, option.id)}
											>
												{option.text}
											</button>
										)}
									</li>
								)
							})}
						</ul>
					</div>
				)
			})}
		</>
	)
}

export default Poll
