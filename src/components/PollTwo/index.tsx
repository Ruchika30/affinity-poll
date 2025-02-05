import PollWidget from "../../shared/widget/poll"
import React from "react"
import { PollTwo } from "../LandingScreen/data"
import Layout from "../../shared/Layout"

/*  This is Poll two */

const LandingPage: React.FC = () => {
	return (
		<>
			<Layout title="Affinity">
				<PollWidget questions={PollTwo} pollId="#4721" />
			</Layout>
		</>
	)
}

export default LandingPage
