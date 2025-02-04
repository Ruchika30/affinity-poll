import { PollOne } from "./data"
import PollWidget from "../../shared/PollWidget"
import React from "react"
import Layout from "../../shared/Layout"

/*  This is Poll one */

const LandingPage: React.FC = () => {
	return (
		<>
			<Layout title="Affinity">
				<PollWidget questions={PollOne} />
			</Layout>
		</>
	)
}

export default LandingPage
