import PollWidget from "../../shared/widget/poll"
import React from "react"
import { PollTwo } from "../data"
import Layout from "../../shared/components/layout"

/*  This is Poll two */

const LandingPage: React.FC = () => {
	return (
		<>
			{/* Passing questions for poll as prop */}
			<Layout title="Affinity">
				<PollWidget questions={PollTwo} pollId="#4721" />
			</Layout>
		</>
	)
}

export default LandingPage
