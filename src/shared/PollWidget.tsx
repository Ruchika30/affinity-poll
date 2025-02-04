import React, { useState } from "react"
import { IQuestion } from "../components/LandingScreen/types"

interface PollScreenProps {
	questions: IQuestion[]
}

const Poll: React.FC<PollScreenProps> = ({ questions }) => {
	const [pollData, setPollData] = useState<IQuestion[]>(
		questions.map((q) => ({
			...q,
			options: q.options.map((opt) => ({ ...opt, votes: opt.votes || 0 })),
			voted: false,
			selectedOption: ""
		}))
	)

	const handleVote = (questionId: number, optionId: string) => {
		const updatedPollData = pollData.map((q) => {
			if (q.id === questionId && !q.voted) {
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
						className="bg-white p-6 rounded-lg text-lg shadow-md w-full text-center"
					>
						<h2 className="text-2xl font-bold mb-4">{item.qsn}</h2>
						<ul>
							{item.options.map((option) => {
								const percentage = totalVotes
									? ((option.votes / totalVotes) * 100).toFixed(1)
									: "0"

								return (
									<li key={option.id} className="mb-2">
										{item.voted ? ( // Show result only if voted for this question
											<div className="w-full bg-gray-200 rounded-xl overflow-hidden">
												<div
													className={`p-2 text-sm text-left ${
														option.id === item.selectedOption
															? "bg-blue-600 text-white"
															: "bg-blue-400 text-white"
													}`}
													style={{ width: `${percentage}%` }}
												>
													{option.text} - {percentage}% ({option.votes} votes)
												</div>
											</div>
										) : (
											<button
												className={`w-full p-2 rounded-xl border transition-transform duration-300 ${
													option.id === item.selectedOption
														? "bg-blue-600 text-white"
														: "bg-gray-100 text-black hover:bg-gray-300"
												}`}
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
