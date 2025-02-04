import PollWidget from "../../shared/PollWidget"
import React from "react"
import { PollTwo } from "../LandingScreen/data"
import Layout from "../../shared/Layout"

/*  This is Poll two */

const LandingPage: React.FC = () => {
	return (
		<>
			<Layout title="Affinity">
				<PollWidget questions={PollTwo} />
			</Layout>
		</>
	)
}

export default LandingPage
