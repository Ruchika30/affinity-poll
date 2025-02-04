import { IQuestion } from "./types"

export const PollOne: IQuestion[] = [
	{
		id: 0,
		qsn: "How do you prefer your coffee?",
		options: [
			{ id: "1a", text: "Black", votes: 6 },
			{ id: "1b", text: "White", votes: 9 },
			{ id: "1c", text: "I don't have coffee", votes: 6 },
			{ id: "1d", text: "Any if fine", votes: 5 }
		],
		voted: false
	},
	{
		id: 1,
		qsn: "How often do you travel?",
		options: [
			{ id: "2a", text: "Once a month", votes: 7 },
			{ id: "2b", text: "Twice a month", votes: 3 },
			{ id: "2c", text: "Once a year", votes: 8 },
			{ id: "2d", text: "Once a quarter", votes: 5 }
		],
		voted: false
	},
	{
		id: 2,
		qsn: "How do you travel?",
		options: [
			{ id: "3a", text: "In groups", votes: 4 },
			{ id: "3b", text: "Solo traveller", votes: 4 },
			{ id: "3c", text: "With family only", votes: 1 },
			{ id: "3d", text: "I dont travel", votes: 4 }
		],
		voted: false
	}
]

export const PollTwo: IQuestion[] = [
	{
		id: 3,
		qsn: "What's your favorite type of cuisine?",
		options: [
			{ id: "4a", text: "Italian", votes: 12 },
			{ id: "4b", text: "Chinese", votes: 9 },
			{ id: "4c", text: "Mexican", votes: 7 },
			{ id: "4d", text: "Indian", votes: 14 }
		],
		voted: false
	},
	{
		id: 4,
		qsn: "Which season do you prefer the most?",
		options: [
			{ id: "5a", text: "Summer", votes: 10 },
			{ id: "5b", text: "Winter", votes: 15 },
			{ id: "5c", text: "Spring", votes: 8 },
			{ id: "5d", text: "Autumn", votes: 6 }
		],
		voted: false
	},
	{
		id: 5,
		qsn: "What’s your go-to entertainment option?",
		options: [
			{ id: "6a", text: "Movies", votes: 11 },
			{ id: "6b", text: "Reading", votes: 9 },
			{ id: "6c", text: "Video Games", votes: 13 },
			{ id: "6d", text: "Music", votes: 10 }
		],
		voted: false
	},
	{
		id: 6,
		qsn: "Which pet would you prefer?",
		options: [
			{ id: "7a", text: "Dog", votes: 18 },
			{ id: "7b", text: "Cat", votes: 14 },
			{ id: "7c", text: "Bird", votes: 6 },
			{ id: "7d", text: "No pets", votes: 9 }
		],
		voted: false
	},
	{
		id: 7,
		qsn: "What’s your favorite mode of transport?",
		options: [
			{ id: "8a", text: "Car", votes: 13 },
			{ id: "8b", text: "Bicycle", votes: 7 },
			{ id: "8c", text: "Public Transport", votes: 11 },
			{ id: "8d", text: "Walking", votes: 5 }
		],
		voted: false
	}
]
