import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink, Link } from 'react-router-dom'
import useThemeContext from '../hooks/useThemeContext'
import { Button } from 'react-bootstrap'

const Navigation = () => {
	const { isDarkMode, toggleTheme } = useThemeContext()

	const handleToggleTheme = () => {
		toggleTheme()
	}

	return (
		<Navbar expand="sm" className={`py-4 ${isDarkMode ? 'dark' : 'light'}`}>
			<Container>
				<Navbar.Brand as={Link} to="/">Sonja Svidén</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={NavLink} to="/about">About</Nav.Link>
						<Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
						<Nav.Link as={NavLink} end to="/projects">Projects</Nav.Link>
						<Nav.Link as={NavLink} to="/resume">Resume</Nav.Link>

						<Button className='toggle-theme-btn' onClick={handleToggleTheme}>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
								<path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z"></path>
							</svg>
						</Button>

					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation
