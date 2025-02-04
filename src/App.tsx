import "./App.css"
import "./index.css"
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import LandingPage from "./components/LandingScreen"
import PollTwo from "./components/PollTwo"

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/poll-two" element={<PollTwo />} />
				</Routes>
			</Router>
		</>
	)
}

export default App
