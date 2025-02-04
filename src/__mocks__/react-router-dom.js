export const NavLink = ({ to, children, ...rest }) => (
	<a href={to} {...rest}>
		{typeof children === "function" ? children({ isActive: false }) : children}
	</a>
)

export const useNavigate = () => jest.fn()
export const useLocation = () => ({ pathname: "/" })

export const MemoryRouter = ({ children }) => <div>{children}</div>
