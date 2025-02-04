interface Option {
	id: string
	text: string
	votes: number
}

export interface IQuestion {
	id: number
	qsn: string
	options: Option[]
	voted?: boolean
	selectedOption?: string
}

export interface IPollOption {
	id: string
	text: string
}

export interface PollProps {
	question: IQuestion[]
}
