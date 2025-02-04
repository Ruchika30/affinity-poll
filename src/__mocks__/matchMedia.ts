Object.defineProperty(window, "matchMedia", {
	writable: true,
	value: jest.fn().mockImplementation((query) => ({
		matches: query === "(max-width: 768px)", // Simulate mobile view
		media: query,
		onchange: null,
		addListener: jest.fn(), // Deprecated but required by some libraries
		removeListener: jest.fn(),
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
		dispatchEvent: jest.fn()
	}))
})

export {}
