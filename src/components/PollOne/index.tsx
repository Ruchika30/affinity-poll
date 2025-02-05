import { PollOne } from "../data"
import PollWidget from "../../shared/widget/poll"
import React from "react"
import Layout from "../../shared/Layout"

/*  This is Poll one */

const LandingPage: React.FC = () => {
	return (
		<>
			{/* Passing questions for poll as prop */}
			<Layout title="Affinity">
				<PollWidget questions={PollOne} pollId="#4321" />
			</Layout>
		</>
	)
}

export default LandingPage
