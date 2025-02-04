module.exports = {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	extensionsToTreatAsEsm: [".ts", ".tsx"],
	globals: {
		"ts-jest": {
			useESM: true
		}
	},
	transform: {
		"^.+\\.(ts|tsx|js|jsx)$": "babel-jest"
	},
	moduleNameMapper: {
		"^react-router-dom$": "./src/__mocks__/react-router-dom",
		"^lucide-react$": "./src/__mocks__/lucide-react.js"
	},
	setupFilesAfterEnv: ["./jest.setup.js"]
}
